const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null;
const inputInitHeight = chatInput.scrollHeight;

// Gemini API Configuration
const GEMINI_API_KEY = "AIzaSyC3Th_BaGxIYvI86EvUN_dUtA7WiQk8kcc"; 
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";


const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi;
}

// Function to fetch Gemini API Response
const getGeminiResponse = async (userMessage) => {
    try {
        const response = await fetch(GEMINI_API_URL + `?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{ parts: [{ text: userMessage }] }],
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`API Error: ${response.status} ${response.statusText} ${JSON.stringify(errorData)}`);
        }

        const data = await response.json();

        if (data && data.candidates && data.candidates.length > 0 && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts.length > 0) {
            return data.candidates[0].content.parts[0].text.trim();
        }

        return "I'm having trouble generating a response right now.";

    } catch (error) {
        console.error("Gemini API error:", error);
        return "I'm having trouble generating a response right now.";
    }
}


const generateResponse = async (chatElement) => {
  const messageElement = chatElement.querySelector("p");
  messageElement.textContent = "Thinking..."; // Show "Thinking..." message
  const botResponse = await getGeminiResponse(userMessage);
  messageElement.textContent = botResponse;
  chatbox.scrollTo(0, chatbox.scrollHeight);
};


const handleChat = () => {
    userMessage = chatInput.value.trim();
    if(!userMessage) return;

    // Clear the input textarea and set its height to default
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    // Append the user's message to the chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);


    setTimeout(() => {
        // Display "Thinking..." message while waiting for the response
         const incomingChatLi = createChatLi("", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);

        generateResponse(incomingChatLi);
      }, 600);
};


chatInput.addEventListener("input", () => {
    // Adjust the height of the input textarea based on its content
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    // If Enter key is pressed without Shift key and the window
    // width is greater than 800px, handle the chat
    if(e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));