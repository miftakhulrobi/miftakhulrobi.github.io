const sidebarWrapper = document.querySelector("#sidebar-wrapper");
const sidebarWrapperMinimized = document.querySelector(
  "#sidebar-wrapper-minimized"
);

$('.toggle-slider').click(function (e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");

  sidebarWrapper.classList.toggle('hide-sidebar-wrapper');
});
