// // Lấy phần tử nút Menu và danh sách mục
 const menuToggle = document.querySelector('.menu-toggle');
 const navItems = document.getElementById('nav-items');
// Thêm sự kiện click vào nút Menu
menuToggle.addEventListener('click', () => {
  // Chuyển đổi giữa hiển thị và ẩn
   navItems.classList.toggle('show');
 });



 // Am thanh
const audioElement = document.querySelector("audio");
const volumeControl = document.getElementById("volumeControl");

volumeControl.addEventListener("input", (Event) =>{
audioElement.volume = Event.target.value;
});

// Âm lượng
const volumeIcon = document.getElementById("volumeIcon");
const volumeSlider = document.getElementById("volumeSlider");

// Hiển thị 
volumeIcon.addEventListener("click", (event) => {
  event.stopPropagation(); // Ngừng sự kiện lan ra ngoài
  if (volumeSlider.style.display === "block") {
    volumeSlider.style.display = "none";
  } else {
    volumeSlider.style.display = "block";
  }
});


document.addEventListener("click", (event) => {
  if (!volumeSlider.contains(event.target) && event.target !== volumeIcon) {
    volumeSlider.style.display = "none";
  }
});


// Infor
// Get elements
const modal = document.getElementById('myInfor');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.querySelector('.close-btn');

// Open modal
openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Close modal when clicking on the close button
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});



