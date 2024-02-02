const daleButton = document.getElementById("daleButton");
const resultado = document.getElementById("resultado");
const limiteInput = document.querySelector(".limite");

daleButton.disabled = true;
daleButton.addEventListener("click", mN);

function mN() {
  const limite = parseInt(limiteInput.value);
  const numero = Math.floor(Math.random() * limite) + 1;
  resultado.innerHTML = "➠ " + numero;
}

function establecerLimite() {
  const limite = parseInt(prompt("Ingrese el límite:"));
  if (isNaN(limite)) {
    return;
  }
  limiteInput.value = limite;
  daleButton.disabled = false;
}


let container = document.querySelector('.change-language');
let countries = container.querySelectorAll('div');

//REVIEW - Creando un objeto para poder añadir los siguientes paises. 

const rugged = {
  españa: () => {
    for (let i = 1; i < countries.length; i++) {
      if (countries[i].style.display == 'none') {
        countries[i].style.display = 'block'
      } else {
        countries[i].style.display = 'none'
      }
    }
  },
  uk: {},
  pt: {},
  it: {},
  de: {}
}