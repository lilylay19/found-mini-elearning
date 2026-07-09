  document.querySelectorAll('.toggle-password').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const input = document.getElementById(targetId);
      const icon = btn.querySelector('i');
      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';
      icon.classList.toggle('fa-eye-slash', !isPassword);
      icon.classList.toggle('fa-eye', isPassword);
    });
  });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  //  checks the 3 password rules
  function isValidPassword(password) {
    const hasLength = password.length >= 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    return hasLength && hasUpper && hasNumber;
  }

  const form = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    if (!isValidEmail(emailInput.value.trim())) {
      emailError.classList.remove('hidden');
      valid = false;
    } else {
      emailError.classList.add('hidden');
    }

    if (!isValidPassword(passwordInput.value)) {
      passwordError.textContent = 'Password must be at least 8 characters, include one uppercase letter and one number.';
      passwordError.classList.remove('hidden');
      valid = false;
      passwordInput.value = ''; // clears the wrong password so they retype it
      passwordInput.focus();    // puts cursor back in the field
    } else {
      passwordError.classList.add('hidden');
    }

    if (valid) {
      alert('Login successful! (demo only)');
      form.reset();
    }
  });