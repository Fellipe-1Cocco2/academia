const form = document.getElementById("form");
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span-required");
const radioBtns = document.querySelectorAll(".radio-btns");
let radioChecada = "";
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const validado = "validado";
const erro = "erro";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  radioBtnsValidade();
  emailValidate();
  nameValidate();
  telefoneValidate();
  if (
    emailValidate() === "erro" ||
    nameValidate() === "erro" ||
    telefoneValidate() === "erro" ||
    radioBtnsValidade() === "erro"
  ) {
  } else {
    console.log(`nome: ${campos[0].value}`);
    console.log(`email: ${campos[1].value}`);
    console.log(`telefone: ${campos[2].value}`);
    console.log(`plano: ${radioBtns[radioChecada].value}`);
    fetch("https://api.sheetmonkey.io/form/rxXVMyCz9UvRVhAqBNrBYD", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: campos[0].value,
        email: campos[1].value,
        telefone: campos[2].value,
        plano: radioBtns[radioChecada].value,
      }),
    });
    removeCampos();
  }
});

function setError(index) {
  campos[index].style.border = "2px solid #d40e0e";
  spans[index].style.display = "block";
}

function setErrorRadio() {
  spans[3].style.display = "block";
}

function removeError(index) {
  campos[index].style.border = "";
  spans[index].style.display = "none";
}

function removeErrorRadio() {
  spans[3].style.display = "none";
}

function removeCampos() {
  campos[0].value = "";
  campos[1].value = "";
  campos[2].value = "";
  radioBtns[radioChecada].checked = false;
}

function nameValidate() {
  if (campos[0].value.length < 3) {
    setError(0);
    return erro;
  } else {
    removeError(0);
    return validado;
  }
}

function emailValidate() {
  if (emailRegex.test(campos[1].value)) {
    removeError(1);
    return validado;
  } else {
    setError(1);
    return erro;
  }
}

function telefoneValidate() {
  let num = campos[2].value;
  if (!isNaN(num)) {
    let valorString = num.toString();
    if (valorString.length > 9) {
      removeError(2);
      return validado;
    } else {
      setError(2);
      return erro;
    }
  } else {
    setError(2);
    return erro;
  }
}

function radioBtnsValidade() {
  let checked = false;
  for (let i = 0; i < radioBtns.length; i++) {
    if (radioBtns[i].checked) {
      checked = true;
      radioChecada = i;
      removeErrorRadio();
      return validado;
    }
  }
  if (!checked) {
    setErrorRadio();
    return erro;
  }
}
