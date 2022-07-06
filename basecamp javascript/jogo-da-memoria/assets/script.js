const cards = document.querySelectorAll(".card");
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flip");
    //primeiro clique:
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this; //atribui o card atual como valor de firstCard
        return;
    }
    secondCard = this;
    hasFlippedCard = false;
    checkForMatch();
}
//verifica se os cards são iguais e desabilita o clique nos dois
function checkForMatch() {
    if (firstCard.dataset.card === secondCard.dataset.card) {
        disableCards();
        return;
    }
    unflipCards();
}

//quando a pessoa acha o par, essa função desabilita o flip
function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    resetBoard();
}

//caso os cards não sejam um par, essa função permite desvirar e tentar de novo

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        resetBoard();
    }, 1300);
}

//desfaz as funções anteriores
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

//embaralha as cartas usando o atributo order do flex-container
//immediately invoked function (IIF): encapsula em parênteses e já invoca ao declarar a função, assim ela carrega eexecuta junto com o scripts
(function shuffle() {
    cards.forEach((card) => {
        let randomize = Math.floor(Math.random() * 12);
        card.style.order = randomize;
    });
})();

cards.forEach((card) => {
    card.addEventListener("click", flipCard);
});
