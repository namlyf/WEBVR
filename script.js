document.addEventListener("DOMContentLoaded", function () {
  // Menu Toggle (already implemented)
  const menuToggle = document.querySelector('.menu-toggle');
  const navItems = document.getElementById('nav-items');
  const menuIcon = menuToggle.querySelector('article'); 

  menuToggle.addEventListener('click', () => {
      // Only toggle the menu if the modal is not open
      if (modal.style.display !== 'block') {
          navItems.classList.toggle('show');
          if (navItems.classList.contains('show')) {
              menuIcon.classList.remove('fa-times');
              menuIcon.classList.add('fa-times');
          } else {
              menuIcon.classList.remove('fa-times');
              menuIcon.classList.add('fa-times');
          }
      }
  });

  // Modal (Information) functionality
let modal = document.getElementById('myInfor2');
let openModalBtn = document.getElementById('openModalBtn2');
let closeModalBtn = document.querySelector('.inforclose-btn2');

  // Open the modal when the Information button is clicked
  openModalBtn.addEventListener('click', () => {
      modal.style.display = 'block'; // Show the modal
  });

  // Close the modal when the close button ('×') is clicked
  closeModalBtn.addEventListener('click', () => {
      modal.style.display = 'none'; // Hide the modal
  });

  // Close the modal if the user clicks anywhere outside the modal
  window.addEventListener('click', (event) => {
      if (event.target === modal) {
          modal.style.display = 'none'; // Hide the modal
      }
  });
});




let modal = document.getElementById('myInfor3');
let openModalBtn = document.getElementById('openModalBtn3');
let closeModalBtn = document.querySelector('.inforclose-btn3');

  // Open the modal when the Information button is clicked
  openModalBtn.addEventListener('click', () => {
      modal.style.display = 'block'; // Show the modal
  });

  // Close the modal when the close button ('×') is clicked
  closeModalBtn.addEventListener('click', () => {
      modal.style.display = 'none'; // Hide the modal
  });

  // Close the modal if the user clicks anywhere outside the modal
  window.addEventListener('click', (event) => {
      if (event.target === modal) {
          modal.style.display = 'none'; // Hide the modal
      }
  });

      // Hàm thay đổi hình chính và chú thích
      function changeImage(thumbnail) {
          const mainImage = document.getElementById('mainImage');
          const imageCaption = document.getElementById('imageCaption');

          mainImage.src = thumbnail.src; // Đổi nguồn hình lớn
          imageCaption.textContent = thumbnail.getAttribute('data-caption'); // Đổi chú thích
      }
