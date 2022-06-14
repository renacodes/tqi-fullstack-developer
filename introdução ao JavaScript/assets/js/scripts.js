var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;
const adicionar = document.getElementById("adicionar");
const subtrair = document.getElementById("subtrair");
var mensagem = document.getElementById("mensagem");
adicionar.addEventListener("click", function () {
  currentNumber++;
  currentNumberWrapper.innerHTML = currentNumber;
});
subtrair.addEventListener("click", function () {
  currentNumber--;
  currentNumberWrapper.innerHTML = currentNumber;
});