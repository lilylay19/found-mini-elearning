const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

const navbar = document.getElementById("navbar");

let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    navbar.classList.remove("-translate-y-full");
    return;
  }
  if (
    currentScroll > lastScroll &&
    !navbar.classList.contains("-translate-y-full")
  ) {
    navbar.classList.add("-translate-y-full");
  } else if (
    currentScroll < lastScroll &&
    navbar.classList.contains("-translate-y-full")
  ) {
    navbar.classList.remove("-translate-y-full");
  }
  lastScroll = currentScroll;
});
