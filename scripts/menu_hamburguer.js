const imagemMenuHamburguer = document.querySelector(".img-menu-hamburguer");
const menuHamburguer = document.querySelector(".itens-menu-hamburguer");
const iconePagina = document.querySelector(".icon-shortcut");

menuHamburguer.classList.remove("active");

imagemMenuHamburguer.addEventListener("click", () => {
  menuHamburguer.classList.toggle("active");
});

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  iconePagina.setAttribute("href", "../assets/logo_faixa.png");
} else {
  iconePagina.setAttribute("href", "../assets/logo_faixa_preto.png");
}
