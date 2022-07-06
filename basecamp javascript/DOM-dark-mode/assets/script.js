function changeMode(){
  changeClass();
}

function changeClass(){
  button.classList.toggle('dark-mode');
}
const button = document.getElementById("mode-selector");
const h1 = document.getElementById("page-title");
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
button.addEventListener('click', changeMode)