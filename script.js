document.addEventListener("DOMContentLoaded", () => {
  // Cadastro
  const formCadastro = document.getElementById("formCadastro");
  const cadastroDiv = document.getElementById("cadastro");
  const siteDiv = document.getElementById("site");

  // Verifica se o usuário já fez o cadastro
  if (localStorage.getItem("userLoggedIn")) {
    cadastroDiv.style.display = "none";
    siteDiv.style.display = "block";
    loadUserProfile();
  } else {
    cadastroDiv.style.display = "block";
    siteDiv.style.display = "none";
  }

  // Função de Cadastro
  formCadastro.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    const user = {
      nome,
      email,
      telefone,
      senha,
    };

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("userLoggedIn", true);
    cadastroDiv.style.display = "none";
    siteDiv.style.display = "block";
    loadUserProfile();
  });

  // Carrega as informações do usuário
  function loadUserProfile() {
    const user = JSON.parse(localStorage.getItem("user"));
    document.getElementById("userName").textContent = user.nome;
    document.getElementById("userEmail").textContent = user.email;
  }

  // Tema Escuro/Claro
  const botaoConfig = document.getElementById("botaoConfig");
  const configPanel = document.getElementById("configPanel");
  const toggleThemeBtn = document.getElementById("toggleTheme");

  botaoConfig.addEventListener("click", () => {
    configPanel.style.right = configPanel.style.right === "0px" ? "-200px" : "0px";
  });

  toggleThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("temaEscuro");
    toggleThemeBtn.textContent = document.body.classList.contains("temaEscuro")
      ? "Tema Claro"
      : "Tema Escuro";
  });

  // Foto de perfil
  const profilePhoto = document.getElementById("profilePhoto");
  const photoModal = document.createElement("div");
  photoModal.id = "photoModal";
  document.body.appendChild(photoModal);

  profilePhoto.addEventListener("click", () => {
    photoModal.style.display = "flex";
    const img = document.createElement("img");
    img.src = profilePhoto.src;
    photoModal.appendChild(img);

    const closeBtn = document.createElement("span");
    closeBtn.id = "closePhotoModal";
    closeBtn.textContent = "X";
    photoModal.appendChild(closeBtn);

    closeBtn.addEventListener("click", () => {
      photoModal.style.display = "none";
    });
  });
});
