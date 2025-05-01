// script.js

// Função para alternar tema escuro/claro
const toggleThemeButton = document.getElementById('toggleTheme');
const bodyElement = document.body;

toggleThemeButton.addEventListener('click', () => {
  bodyElement.classList.toggle('dark-theme');
  toggleThemeButton.textContent = bodyElement.classList.contains('dark-theme') ? 'Tema Claro' : 'Tema Escuro';
});

// Função para alternar a aba lateral de configurações
const settingsToggleButton = document.getElementById('settingsToggle');
const settingsPanel = document.getElementById('settingsPanel');

settingsToggleButton.addEventListener('click', () => {
  settingsPanel.classList.toggle('active');
});

// Cadastro de informações do usuário
const loginForm = document.getElementById('loginForm');
const usernameField = document.getElementById('username');
const emailField = document.getElementById('email');
const phoneField = document.getElementById('phone');
const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('confirmPassword');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Verificar se as senhas coincidem
  if (passwordField.value !== confirmPasswordField.value) {
    alert('As senhas não coincidem!');
    return;
  }

  // Salvar as informações no localStorage
  localStorage.setItem('username', usernameField.value);
  localStorage.setItem('email', emailField.value);
  localStorage.setItem('phone', phoneField.value);
  localStorage.setItem('password', passwordField.value);

  // Exibir o perfil
  document.getElementById('displayName').textContent = usernameField.value;
  document.get
