 function hotspotClick(hotSpotDiv, args) {
   hotSpotDiv.innerHTML = `<i class="fas fa-info"></i>`; // Thêm biểu tượng "i"
  hotSpotDiv.addEventListener("click", function () {
       const modal = document.getElementById(args.modalId);
      modal.style.display = "block"; // Hiển thị modal khi nhấn
 });
 }

// // Đóng modal
 function closeModal() {
 const modal = document.getElementById('infoModal');
 modal.style.display = 'none'; // Ẩn modal
}

// // Lấy phần tử nút Menu và danh sách mục
const menuToggle = document.querySelector('.menu-toggle');
const navItems = document.getElementById('nav-items');
// Thêm sự kiện click vào nút Menu
menuToggle.addEventListener('click', () => {
  // Chuyển đổi giữa hiển thị và ẩn
   navItems.classList.toggle('show');
 });



// Infor

const modal = document.getElementById('myInfor');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.querySelector('.inforclose-btn');

// Open modal
openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Close modal 
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Note





