const navbar = document.getElementById("navbar");
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const htmlEl = document.getElementById('root-html');
const themeBtns = [document.getElementById('theme-toggle-btn'), document.getElementById('mobile-theme-toggle-btn')];
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

menuBtn?.addEventListener("click", () => {
    mobileMenu?.classList.toggle("hidden");
});

let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
    if (!navbar) return;
    const currentScrollY = window.scrollY;
    
    if (currentScrollY <= 0) {
        navbar.classList.remove("-translate-y-full");
    } else if (Math.abs(currentScrollY - lastScrollY) > 10) {
        navbar.classList.toggle("-translate-y-full", currentScrollY > lastScrollY);
    }
    lastScrollY = currentScrollY;
});

const updateIcons = (isDark) => {
    sunIcon?.classList.toggle('hidden', !isDark);
    moonIcon?.classList.toggle('hidden', isDark);
};

const toggleTheme = () => {
    const isDark = htmlEl.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateIcons(isDark);
};
const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const isDark = localStorage.theme === 'dark' || (!('theme' in localStorage) && isSystemDark);

if (isDark) {
    htmlEl.classList.add('dark');
} else {
    htmlEl.classList.remove('dark');
}
updateIcons(isDark);

themeBtns.forEach(btn => btn?.addEventListener('click', toggleTheme));
