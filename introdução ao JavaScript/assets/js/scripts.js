var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;
const adicionar = document.getElementById("adicionar");
const subtrair = document.getElementById("subtrair");
var mensagem = document.getElementById("mensagem");

function linkStyle() {
  mensagem.style.cursor = "pointer";
  mensagem.style.textDecoration = "underline";
  mensagem.setAttribute("onMouseLeave", "styleOff()");
}

function styleOff() {
  mensagem.style.cursor = "none";
  mensagem.style.textDecoration = "none";
}

function reset() {
  currentNumber = 0;
  currentNumberWrapper.innerHTML = currentNumber;
  mensagem.innerHTML =
    "<em>Clique nos botões para aumentar ou diminuir o número mostrado.</em>";
  mensagem.style.cursor = "none";
  mensagem.style.textDecoration = "none";
}

adicionar.addEventListener("click", function () {
  if (currentNumber >= 100) {
    mensagem.innerHTML = "<em>Ufa! Cansei... não quer começar de novo?</em>";
    mensagem.setAttribute("onClick", "reset()");
    mensagem.setAttribute("onMouseEnter", "linkStyle()");
  } else {
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
  }
});

subtrair.addEventListener("click", function () {
  if (currentNumber == -10) {
    mensagem.innerHTML =
      "<em>Pra quê você precisa contar até -10?</em>";
    mensagem.setAttribute("onClick", "reset()");
    mensagem.setAttribute("onMouseEnter", "linkStyle()");
  } else {
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;
  }
});
