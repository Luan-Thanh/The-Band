const buyBtns = document.querySelectorAll(".js-buy-ticket");
const modal = document.querySelector(".js-modal");
const modalContainer = document.querySelector(".js-modal-container");
const modalClose = document.querySelector(".js-modal-close");

// Hàm hiên thị modal mua vé (thêm class open vào modal)
function showBuyTickets() {
  modal.classList.add("open");
}
// Hàm ẩn modal mua vé (gỡ bỏ class open vào modal)
function hideBuyTickets() {
  modal.classList.remove("open");
}

/*
- Lắng nghe hành vi click của 1 danh sách
- Lập qua từng thẻ button và lắng nghe hành vi clicl
*/
for (const buyBtn of buyBtns) {
  // "click" là tên hành vi
  buyBtn.addEventListener("click", showBuyTickets);
}

// Lắng nghe hành vi click của 1 cái (Nghe hành vi click vào nút button close và modal)
modalClose.addEventListener("click", hideBuyTickets);

modal.addEventListener("click", hideBuyTickets);

modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});

// Mobile-Memu
var header = document.getElementById("header");
var mobileMenu = document.getElementById("mobile-menu");
var headerHeight = header.clientHeight;

// Đóng/Mở mobile menu
mobileMenu.onclick = function () {
  var isClosed = header.clientHeight === headerHeight;

  if (isClosed) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
};

// Tự động đóng mở khi chọn menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i];

  menuItem.onclick = function (event) {
    var isParentMenu =
      this.nextElementSibling &&
      this.nextElementSibling.classList.contains("subnav");

    if (isParentMenu) {
      event.preventDefault();
    } else {
      header.style.height = null;
    }
  };
}
