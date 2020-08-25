const sidebarWrapper = document.querySelector("#sidebar-wrapper");
const ulSidebarNav = document.querySelector("ul.sidebar-nav");
const logo = document.querySelector(".sidebar-nav img");
const menuItem = Array.from(
  document.querySelectorAll(".sidebar-nav li a.menu-item")
);

const classMenuToggle = document.querySelector(".menu-toggle");
const idMenuToggle = document.querySelector("#menu-toggle");

classMenuToggle.addEventListener("click", function (e) {
  e.preventDefault();
  toggleSlider();
});

idMenuToggle.addEventListener("click", function (e) {
  e.preventDefault();
  toggleSlider();
});

function toggleSlider() {
  $("#wrapper").toggleClass("toggled");

  sidebarWrapper.classList.toggle("minimized");
  ulSidebarNav.classList.toggle("minimized");
  logo.classList.toggle("minimized");
  menuItem.forEach((m) => m.classList.toggle("minimized"));
}
