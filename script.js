// script.js

// Função para alternar entre tema claro e tema escuro
const themeToggleButton = document.getElementById("toggleTheme");
const body = document.body;

// Função de alternância do tema
themeToggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  // Atualizar o texto do botão com base no tema atual
  if (body.classList.contains("dark-theme")) {
    themeToggleButton.textContent = "Tema Claro";
  } else {
    themeToggleButton.textContent = "Tema Escuro";
  }
});

// Função para mostrar e esconder o painel de configurações
const settingsToggleButton = document.getElementById("settingsToggle");
const settingsPanel = document.getElementById("settingsPanel");

settingsToggleButton.addEventListener("click", () => {
  settingsPanel.classList.toggle("active");
});

// Função para carregar as informações de login
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Validar as senhas
  if (password !== confirmPassword) {
    alert("As senhas não coincidem.");
    return;
  }

  // Salvar as informações no localStorage para login posterior
  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
  localStorage.setItem("phone", phone);
  localStorage.setItem("password", password);

  alert("Cadastro realizado com sucesso!");

  // Preencher os dados de perfil após cadastro
  updateProfile();
  loginForm.reset();
});

// Função para carregar as informações de perfil salvas
function updateProfile() {
  const profileContainer = document.getElementById("profileContainer");
  const profileImage = document.getElementById("profileImage");
  const displayName = document.getElementById("displayName");
  const displayEmail = document.getElementById("displayEmail");

  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");
  const phone = localStorage.getItem("phone");

  if (username && email && phone) {
    // Exibir o perfil
    profileContainer.classList.remove("hidden");
    displayName.textContent = username;
    displayEmail.textContent = email;
  }
}

// Função para mudar a foto de perfil
const profilePicture = document.getElementById("profileImage");
profilePicture.addEventListener("click", () => {
  const action = prompt("Deseja alterar ou visualizar a foto? (Digite 'alterar' ou 'visualizar')");

  if (action.toLowerCase() === "visualizar") {
    // Exibir imagem em tamanho maior
    const imagePopup = document.getElementById("imagePopup");
    const popupImg = document.getElementById("popupImg");
    popupImg.src = profilePicture.src;
    imagePopup.classList.add("active");

    const closePopupButton = document.getElementById("closePopup");
    closePopupButton.addEventListener("click", () => {
      imagePopup.classList.remove("active");
    });
  } else if (action.toLowerCase() === "alterar") {
    // Permitir alterar foto
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.addEventListener("change", () => {
      const file = fileInput.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        profilePicture.src = reader.result;
      };

      reader.readAsDataURL(file);
    });

    fileInput.click();
  }
});

// Atualizar o perfil se já houver dados no localStorage
if (localStorage.getItem("username")) {
  updateProfile();
}
