const liActive = document.querySelector(".list-menu ul li.menu-active.max");
const aActive = liActive.firstElementChild;
aActive.classList.add("a-active");
const spanActive = aActive.lastElementChild;
spanActive.classList.add("a-active");

// ! expanded minimized
const slideToggle = document.querySelector(".slide-toggle");
const sidebarMenu = document.querySelector(".sidebar-menu");
const logo = document.querySelector("img.logo");
const aSpanAll = Array.from(document.querySelectorAll(".list-menu a span"));
const icon = document.querySelector(".slide-toggle i");
const sidebarFake = document.querySelector('.sidebar-fake');

slideToggle.addEventListener("click", function (e) {
  sidebarFake.classList.toggle('off');
  icon.classList.toggle("rotating");
  if (sidebarMenu.classList.contains("expanded")) {
    minimizedMenu();
  } else {
    expandedMenu();
  }
});

function minimizedMenu() {
  sidebarMenu.classList.replace("expanded", "minimized");
  logo.classList.replace("show", "hide");
  aSpanAll.forEach((a) => a.classList.replace("show", "hide"));
  liActive.classList.replace("max", "min");
  slideToggle.classList.replace("bg-white-blue", "bg-blue");
  icon.classList.replace("color-blue", "color-white");
}

function expandedMenu() {
  sidebarMenu.classList.replace("minimized", "expanded");
  logo.classList.replace("hide", "show");
  aSpanAll.forEach((a) => a.classList.replace("hide", "show"));
  liActive.classList.replace("min", "max");
  slideToggle.classList.replace("bg-blue", "bg-white-blue");
  icon.classList.replace("color-white", "color-blue");
}

// responsive
// const windowSize = window.innerWidth;
// if(windowSize < 991.98) {
//   if (sidebarMenu.classList.contains("expanded")) {
//     minimizedMenu();
//   } 
// }
