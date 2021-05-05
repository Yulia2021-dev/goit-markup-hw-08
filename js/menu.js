// (() => {
//   const menuBtnRef = document.querySelector("[data-menu-button]")
//   const mobileMenuRef = document.querySelector("[data-menu]")

//   menuBtnRef.addEventListener("click", () => {
//     const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false

//     menuBtnRef.classList.toggle("is-open")
//     menuBtnRef.setAttribute("aria-expanded", !expanded)

//     mobileMenuRef.classList.toggle("is-open")
//   })
// })();

const hamburger = document.querySelector(".hamburger");
const mobileMenuRef = document.querySelector(".mobile-menu");
const logo = document.querySelector(".logo");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("toggle");

    mobileMenuRef.classList.toggle("toggle");
    logo.classList.toggle("hidden");
}