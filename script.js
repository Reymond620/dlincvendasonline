// Contador de cliques
let cliques = 0;

// Função para contar cliques nos botões
function contarCliques() {
  cliques++;
  console.log("O botão foi clicado " + cliques + " vezes.");
}

// Adicionando evento aos botões
const botoes = document.querySelectorAll('button');

botoes.forEach(button => {
  button.addEventListener('click', contarCliques);
});
