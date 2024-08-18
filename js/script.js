let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

function ToggleFunction() {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

const checkpoint1 = 300

window.addEventListener("scroll", () => {
  document.querySelector(".secondary-section h1").style.opacity = (window.scrollY - checkpoint1) / checkpoint1;
  document.querySelector(".secondary-section p").style.opacity = (window.scrollY - checkpoint1) / checkpoint1;
});