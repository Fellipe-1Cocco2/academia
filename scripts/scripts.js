// Carregar Footer
document.addEventListener("DOMContentLoaded", function () {
  fetch("../pages/footer.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("footer").innerHTML = html;
    })
    .catch((error) => console.error("Erro ao carregar o rodapé:", error));
});

// Carregar Cabeçalho
document.addEventListener("DOMContentLoaded", function () {
  fetch("../pages/cabecalho.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("cabecalho").innerHTML = html;
      executeFooterScript();
    })
    .catch((error) => console.error("Erro ao carregar o rodapé:", error));
});

// Carregar icone whats
document.addEventListener("DOMContentLoaded", function () {
  fetch("../pages/whats.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("whats").innerHTML = html;
    })
    .catch((error) => console.error("Erro ao carregar o rodapé:", error));
});

// Carregar icon pagina
const iconePagina = document.querySelector(".icon-shortcut");

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  iconePagina.setAttribute("href", "../assets/logo_faixa.png");
} else {
  iconePagina.setAttribute("href", "../assets/logo_faixa_preto.png");
}

// Ativa e desativa menu Hamburguer
function executeFooterScript() {
  const imagemMenuHamburguer = document.querySelector(".img-menu-hamburguer");
  const menuHamburguer = document.querySelector(".itens-menu-hamburguer");

  menuHamburguer.classList.remove("active");

  imagemMenuHamburguer.addEventListener("click", () => {
    menuHamburguer.classList.toggle("active");
  });
}
