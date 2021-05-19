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

const hamburgerOpen = document.getElementById("btn-open");
const hamburgerClose = document.getElementById("btn-close");
const mobileMenuRef = document.querySelector("[data-menu]");
// mobileMenuRef.classList.remove("toggle");

hamburgerOpen.onclick = mobileMenu;

hamburgerClose.onclick = mobileMenu;


function mobileMenu() {
    //hamburger.classList.toggle("toggle");

   // mobileMenuRef.classList.remove("toggle");
    mobileMenuRef.classList.toggle("toggle");
    // logo.classList.toggle("hidden");
}