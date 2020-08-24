const sidebarWrapper = document.querySelector("#sidebar-wrapper");
const ulSidebarNav = document.querySelector("ul.sidebar-nav");
const logo = document.querySelector(".sidebar-nav img");
const menuItem = Array.from(
  document.querySelectorAll(".sidebar-nav li a.menu-item")
);

$(".menu-toggle").click(function (e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");

  sidebarWrapper.classList.toggle("minimized");
  ulSidebarNav.classList.toggle("minimized");
  logo.classList.toggle("minimized");
  menuItem.forEach((m) => m.classList.toggle("minimized"));
});

$("#menu-toggle").click(function (e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");

  sidebarWrapper.classList.toggle("minimized");
  ulSidebarNav.classList.toggle("minimized");
  logo.classList.toggle("minimized");
  menuItem.forEach((m) => m.classList.toggle("minimized"));
});
