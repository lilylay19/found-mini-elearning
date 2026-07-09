 const teamData = [
      { name: "Song Chingsean", role: "Leader", img: "../img/chingsean.JPG" },
      { name: "Chhom Chanraksmey", role: "Member",img:"../img/smey.jpg"}, // TODO: no photo file yet — shows initials for now
      { name: "Neang Thana", role: "Member", img: "../img/thana.jpg" },
      { name: "Nin Bora", role: "Member", img: "../img/bora.jpg" },
      { name: "Borey Sothearith", role: "Member" ,img:"../img/pozzgay.jpg"}, // TODO: no photo file yet — shows initials for now
      { name: "Chit Chimy", role: "Member", img: "../img/jimmy.jpg" }, // best guess — confirm this is Chimy's photo
      { name: "Roeun Chanry", role: "Member", img: "../img/chanry.PNG" },
      { name: "Lay Lily", role: "Member", img: "../img/ly.jpg" }
    ];

    const mentorData = { name: "Srorng Sokcheat", role: "Mentor",img:"../img/cher.jpg"}; // TODO: no photo file yet — shows initials for now
    // Note: img/pozzgay.jpg wasn't used above — tell me which person it belongs to


    // If a photo path is wrong or the file is missing, show a neat
    // initials avatar instead of a broken image icon.
    function initialsOf(name) {
      return name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join('');
    }

    function avatarFallbackSrc(name) {
      const label = initialsOf(name || '?');
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">
        <defs>
          <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#1f450d"/>
            <stop offset="100%" stop-color="#79b023"/>
          </linearGradient>
        </defs>
        <rect width="300" height="300" fill="url(#g)"/>
        <text x="150" y="150" dy=".35em" font-family="Arial, sans-serif" font-size="110" font-weight="700" fill="#ffffff" text-anchor="middle">${label}</text>
      </svg>`;
      return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
    }

    function createCard(person) {
      const initialSrc = person.img || avatarFallbackSrc(person.name);
      return `
        <div class="profile-card">
          <div class="card-banner"></div>
          <div class="avatar-ring">
            <img src="${initialSrc}" alt="${person.name}" onerror="this.onerror=null; this.src=avatarFallbackSrc(this.alt);">
          </div>
          <h3 class="profile-name">${person.name}</h3>
          <p class="profile-role">${person.role}</p>
          <div class="social-row">
            <a href="#" class="social-link ig" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="#" class="social-link tw" aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.8a8.3 8.3 0 0 1-2.4.7 4.1 4.1 0 0 0 1.8-2.3 8.4 8.4 0 0 1-2.6 1A4.1 4.1 0 0 0 12 9a11.7 11.7 0 0 1-8.5-4.3 4.1 4.1 0 0 0 1.3 5.5 4 4 0 0 1-1.9-.5v.1c0 2 1.4 3.7 3.3 4.1a4.2 4.2 0 0 1-1.9.1 4.1 4.1 0 0 0 3.8 2.9A8.3 8.3 0 0 1 2 18.4 11.7 11.7 0 0 0 8.3 20c7.5 0 11.6-6.2 11.6-11.6v-.5A8.2 8.2 0 0 0 22 5.8Z"/></svg>
            </a>
            <a href="#" class="social-link gh" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1.3A10.7 10.7 0 0 0 1.3 12a10.8 10.8 0 0 0 7.4 10.3c.5.1.7-.2.7-.6v-2c-3 .7-3.6-1.3-3.6-1.3-.5-1.2-1.1-1.5-1.1-1.5-1-.7.1-.7.1-.7 1 .1 1.6.9 1.8 1.3.9 1.5 2.7 1.1 3.3.8.1-.6.4-1.1.7-1.3-2.4-.3-5-1.2-5-5.4 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 3 1.1.9-.2 1.8-.4 2.7-.4s1.8.1 2.7.4c2.1-1.4 3-1.1 3-1.1.6 1.4.2 2.5.1 2.8.7.8 1.1 1.7 1.1 2.9 0 4.2-2.6 5.1-5 5.4.4.3.7 1 .7 2v3c0 .3.2.7.8.6A10.8 10.8 0 0 0 22.7 12 10.7 10.7 0 0 0 12 1.3Z"/></svg>
            </a>
          </div>
        </div>
      `;
    }

    document.getElementById('team-grid').innerHTML = teamData.map(createCard).join('');
    document.getElementById('mentor-card').innerHTML = createCard(mentorData);

    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const themeToggles = document.querySelectorAll('[data-theme-toggle]');

    menuToggle?.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
    });

    function applyTheme(isDark) {
      document.body.classList.toggle('dark-mode', isDark);
      localStorage.setItem('elearn-theme', isDark ? 'dark' : 'light');
    }

    const savedTheme = localStorage.getItem('elearn-theme');
    applyTheme(savedTheme === 'dark');

    themeToggles.forEach((toggle) => {
      toggle.addEventListener('click', () => {
        applyTheme(!document.body.classList.contains('dark-mode'));
      });
    });