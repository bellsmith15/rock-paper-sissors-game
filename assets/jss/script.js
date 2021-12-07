// START

const playerChoices = document.getElementsByClassName('choice');
const roundText = document.getElementById('round-text');
const closeBtn = document.getElementsByClassName('close')[0];

const openBtn = document.getElementsByClassName('open')[0];

const winnerModal = document.getElementsByClassName('winner-modal')[0];
const modalHeader = document.getElementsByClassName('modal-header')[0];
const modalParagraph = document.getElementsByClassName('modal-result')[0];

let playerChoice;
let computerChoice;
let scoreHTML = document.getElementsByClassName('score')[0];
let computerHTML = document.getElementsByClassName('comp-score')[0];
let playerScore = 0;
let computerScore = 0;


// const rulesModal = document.getElementsByClassName('rules-modal')[0];
// rulesModal = document.getElementById("")

// function openRulesModal(){
//     openrulesModal.style.display = "block";
// }

// function closeRulesModal(){
//     openrulesModal.style.display = "none";
// }

// openBtn.addEventListener('click', () => {
//     closeModal(rulesModal);
// });





for (let choice of playerChoices) {
    choice.addEventListener('click', playGame);
}

closeBtn.addEventListener('click', () => {
    closeModal(winnerModal);
});


function playGame(e) {
    playerChoice = e.target.id;
    generateComputerChoice();
    getResult();
    showWinner(winnerModal, modalHeader, modalParagraph);
}

function generateComputerChoice() {
    const hand = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomChoice = hand[Math.floor(Math.random() * hand.length)];
    computerChoice = randomChoice;
    displayComputerChoice();
}

function displayComputerChoice() {
    let computerIcon = document.getElementById('computer-icon');
    computerIcon.className = `far fa-hand-${computerChoice}`;
}

function getResult() {
    switch (playerChoice + computerChoice) {
        case 'rockscissors':
        case 'rocklizard':
        case 'paperrock':
        case 'paperspock':
        case 'scissorspaper':
        case 'scissorslizard':
        case 'lizardpaper':
        case 'lizardspock':
        case 'spockscissors':
        case 'spockrock':
            console.log('You win!');
            roundText.innerHTML = 'You Win this Round!';
            incrementPlayerScore(scoreHTML);
            break;
        case 'scissorsrock':
        case 'lizardrock':
        case 'rockpaper':
        case 'spockpaper':
        case 'paperscissors':
        case 'lizardscissors':
        case 'paperlizard':
        case 'spocklizard':
        case 'scissorsspock':
        case 'rockspock':
            roundText.innerHTML = 'Computer Wins this Round!';
            incrementComputerScore(computerHTML);
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
        case 'lizardlizard':
        case 'spockspock':
            roundText.innerHTML = 'Draw!';
            break;
    }
}

function incrementPlayerScore(score) {
    score.innerHTML = ++playerScore;
}

function incrementComputerScore(score) {
    score.innerHTML = ++computerScore;
}


function showWinner(winnerModal, modalHeader, modalParagraph) {
    if (playerScore === 3) {
        winnerModal.style.display = 'block';
        modalHeader.textContent = 'You Beat the Computer!';
        modalParagraph.textContent = `You: ${playerScore} > Computer: ${computerScore}`;
    } else if (computerScore === 3) {
        winnerModal.style.display = 'block';
        modalHeader.textContent = 'You just Lost The Game!';
        modalParagraph.textContent = `Computer: ${computerScore} > You: ${playerScore}`;
    }
}

function closeModal(modal) {
    modal.style.display = 'none';
    resetGame(scoreHTML, computerHTML);
}

function resetGame(player, computer) {
    playerScore = 0;
    computerScore = 0;
    player.innerHTML = playerScore;
    computer.innerHTML = computerScore;
    roundText.innerHTML = '';
    document.getElementById('computer-icon').className = '';
}


// https://www.w3schools.com/howto/howto_css_modals.asp

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

