const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
 
menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});
 
/* ---------- Hide Navbar on Scroll Down ---------- */
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
 
/* ---------- Dark Mode ---------- */
const htmlEl = document.documentElement;
 
// Desktop toggle
const themeToggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
 
// Mobile toggle
const themeToggleBtnMobile = document.getElementById("theme-toggle-mobile");
const themeIconMobile = document.getElementById("theme-icon-mobile");
 
function applyTheme(theme) {
    const isDark = theme === "dark";
    htmlEl.classList.toggle("dark", isDark);
 
    [themeIcon, themeIconMobile].forEach((icon) => {
        if (!icon) return;
        icon.classList.toggle("fa-moon", !isDark);
        icon.classList.toggle("fa-sun", isDark);
    });
}
 
function toggleTheme() {
    const isDark = htmlEl.classList.contains("dark");
    const newTheme = isDark ? "light" : "dark";
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
}
 
// Load saved preference, default to light mode
const savedTheme = localStorage.getItem("theme") || "light";
 
applyTheme(savedTheme);
 
if (themeToggleBtn) themeToggleBtn.addEventListener("click", toggleTheme);
if (themeToggleBtnMobile) themeToggleBtnMobile.addEventListener("click", toggleTheme);
 