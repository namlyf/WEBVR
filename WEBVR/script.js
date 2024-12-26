//Menu button
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navItems = document.getElementById('nav-items');
    const menuIcon = menuToggle.querySelector('article'); 
    
    menuToggle.addEventListener('click', () => {
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
  });
  
  let modal1 = document.getElementById('myInfor1');
  let openModalBtn1 = document.getElementById('openModalBtn1');
  let closeModalBtn1 = document.querySelector('.inforclose-btn1');
    openModalBtn1.addEventListener('click', () => {
        modal1.style.display = 'block'; 
    });
  
    closeModalBtn1.addEventListener('click', () => {
        modal1.style.display = 'none'; 
    });
  
    window.addEventListener('click', (event) => {
        if (event.target === modal1) {
            modal1.style.display = 'none'; 
        }
    });
  
  //Infor button
  let modal = document.getElementById('myInfor2');
  let openModalBtn = document.getElementById('openModalBtn2');
  let closeModalBtn = document.querySelector('.inforclose-btn2');
  
    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'block'; 
    });
  
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none'; 
    });
  
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none'; 
        }
    });
  
  
  
  // Gallery
  
  let modal3 = document.getElementById('myInfor3');
  let openModalBtn3 = document.getElementById('openModalBtn3');
  let closeModalBtn3 = document.querySelector('.inforclose-btn3');
    openModalBtn3.addEventListener('click', () => {
        modal3.style.display = 'block'; 
    });
  
    closeModalBtn3.addEventListener('click', () => {
        modal3.style.display = 'none'; 
    });
  
    window.addEventListener('click', (event) => {
        if (event.target === modal3) {
            modal3.style.display = 'none'; 
        }
    });
  /// Gallery-thumbnail
  function changeImage(thumbnail) {
      const mainImage = document.getElementById('mainImage');
      const imageCaption = document.getElementById('imageCaption');
      mainImage.src = thumbnail.src; 
      imageCaption.textContent = thumbnail.getAttribute('data-caption'); 
  }
  
  