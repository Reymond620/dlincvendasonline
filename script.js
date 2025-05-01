const registerForm = document.getElementById('registerForm');
const authContainer = document.getElementById('auth-container');
const profileContainer = document.getElementById('profile-container');

const profileName = document.getElementById('profile-name');
const profileEmail = document.getElementById('profile-email');
const profilePicInput = document.getElementById('profile-pic');
const profilePicPreview = document.getElementById('profile-pic-preview');

registerForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const userData = {
    name,
    phone,
    email,
    password
  };

  localStorage.setItem('dl_user', JSON.stringify(userData));

  showProfile(userData);
});

function showProfile(user) {
  authContainer.classList.add('hidden');
  profileContainer.classList.remove('hidden');

  profileName.textContent = user.name;
  profileEmail.textContent = user.email;
}

window.onload = () => {
  const savedUser = JSON.parse(localStorage.getItem('dl_user'));
  if (savedUser) {
    showProfile(savedUser);
  }
};

profilePicInput.addEventListener('change', function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      profilePicPreview.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});
