 // Show/hide password toggle for both password fields
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
 
  const passwordInput = document.getElementById('password');
  const confirmInput = document.getElementById('confirmPassword');
  const confirmError = document.getElementById('confirmPasswordError');
 
  function setRuleState(id, valid) {
    const li = document.getElementById(id);
    const icon = li.querySelector('.rule-icon i');
    const iconWrap = li.querySelector('.rule-icon');
    const text = li.querySelector('.rule-text');
    if (valid) {
      icon.classList.remove('fa-circle');
      icon.classList.add('fa-circle-check');
      iconWrap.classList.remove('text-gray-300');
      iconWrap.classList.add('text-primary');
      text.classList.remove('text-gray-400');
      text.classList.add('text-secondary');
    } else {
      icon.classList.remove('fa-circle-check');
      icon.classList.add('fa-circle');
      iconWrap.classList.remove('text-primary');
      iconWrap.classList.add('text-gray-300');
      text.classList.remove('text-secondary');
      text.classList.add('text-gray-400');
    }
  }
 
  function validatePasswordRules() {
    const val = passwordInput.value;
    const hasLength = val.length >= 8;
    const hasUpper = /[A-Z]/.test(val);
    const hasNumber = /[0-9]/.test(val);
    setRuleState('rule-length', hasLength);
    setRuleState('rule-upper', hasUpper);
    setRuleState('rule-number', hasNumber);
    return hasLength && hasUpper && hasNumber;
  }
 
  passwordInput.addEventListener('input', validatePasswordRules);
 
  function checkConfirmMatch() {
    if (confirmInput.value.length === 0) {
      confirmError.classList.add('hidden');
      return true;
    }
    const match = passwordInput.value === confirmInput.value;
    confirmError.classList.toggle('hidden', match);
    return match;
  }
 
  confirmInput.addEventListener('input', checkConfirmMatch);
  passwordInput.addEventListener('input', checkConfirmMatch);
 
  // Form submit validation
  const form = document.getElementById('RegisterForm');
  const fullNameInput = document.getElementById('fullName');
  const emailInput = document.getElementById('email');
  const fullNameError = document.getElementById('fullNameError');
  const emailError = document.getElementById('emailError');
 
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
 
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
 
    if (fullNameInput.value.trim() === '') {
      fullNameError.classList.remove('hidden');
      valid = false;
    } else {
      fullNameError.classList.add('hidden');
    }
 
    if (!isValidEmail(emailInput.value.trim())) {
      emailError.classList.remove('hidden');
      valid = false;
    } else {
      emailError.classList.add('hidden');
    }
 
    const passRulesOk = validatePasswordRules();
    if (!passRulesOk) valid = false;
 
    const matchOk = checkConfirmMatch() && confirmInput.value.length > 0;
    if (!matchOk) {
      confirmError.classList.remove('hidden');
      valid = false;
    }
 
    if (valid) {
      alert('Account created successfully! (demo only)');
      form.reset();
      validatePasswordRules();
      confirmError.classList.add('hidden');
    }
  });