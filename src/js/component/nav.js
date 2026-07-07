// document.addEventListener("DOMContentLoaded", () => {
//   // --- Mobile menu toggle ---
//   const menuBtn = document.getElementById("menu-btn");
//   const mobileMenu = document.getElementById("mobile-menu");
//   const burger = document.getElementById("icon-burger");
//   const close = document.getElementById("icon-close");
 
//   if (menuBtn) {
//     menuBtn.addEventListener("click", () => {
//       mobileMenu.classList.toggle("hidden");
//       burger.classList.toggle("hidden");
//       close.classList.toggle("hidden");
//     });
//   }
 
//   // --- Dark mode toggle ---
//   const darkToggle = document.getElementById("dark-toggle");
//   const iconMoon = document.getElementById("icon-moon");
//   const iconSun = document.getElementById("icon-sun");
 
//   function applyTheme(dark) {
//     document.body.setAttribute("data-theme", dark ? "dark" : "light");
//     iconMoon.classList.toggle("hidden", dark);
//     iconSun.classList.toggle("hidden", !dark);
//   }
 
//   if (darkToggle) {
//     const savedTheme = localStorage.getItem("theme");
//     applyTheme(savedTheme === "dark");
 
//     darkToggle.addEventListener("click", () => {
//       const nowDark = document.body.getAttribute("data-theme") !== "dark";
//       applyTheme(nowDark);
//       localStorage.setItem("theme", nowDark ? "dark" : "light");
//     });
//   }
 
//   // --- Hide navbar on scroll down, show on scroll up ---
//   const nav = document.getElementById("site-nav");
//   if (nav) {
//     let lastScroll = window.pageYOffset;
//     window.addEventListener("scroll", () => {
//       const current = window.pageYOffset;
//       if (current <= 0) {
//         nav.classList.remove("-translate-y-full");
//       } else if (current > lastScroll && current > 80) {
//         nav.classList.add("-translate-y-full");
//       } else if (current < lastScroll) {
//         nav.classList.remove("-translate-y-full");
//       }
//       lastScroll = current;
//     });
//   }
// });
 