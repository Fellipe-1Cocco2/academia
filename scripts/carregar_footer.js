document.addEventListener("DOMContentLoaded", function () {
  fetch("../pages/footer.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("footer").innerHTML = html;
    })
    .catch((error) => console.error("Erro ao carregar o rodapé:", error));
});
