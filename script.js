const registerForm = document.getElementById('registerForm');
const mainContent = document.getElementById('main-content');
const authContainer = document.getElementById('auth-container');

function showProfile(user) {
  document.getElementById('profileName').textContent = user.name;
  document.getElementById('profileEmail').textContent = user.email;

  authContainer.classList.add('hidden');
  mainContent.classList.remove('hidden');
}

registerForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  const phoneRegex = /^\+55\s?\(\d{2}\)\s?\d{4,5}-\d{4}$/;

  if (!phoneRegex.test(phone)) {
    alert("Por favor, insira um número válido com DDD e código do país (ex: +55 (45) 99123-4567)");
    return;
  }

  const userData = {
    name,
    phone,
    email,
    password
  };

  localStorage.setItem('dl_user', JSON.stringify(userData));
  showProfile(userData);
});

window.addEventListener('load', () => {
  const user = JSON.parse(localStorage.getItem('dl_user'));
  if (user) {
    showProfile(user);
  }
});
