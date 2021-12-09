// START

const playerChoices = document.getElementsByClassName('choice');
const roundAnswer = document.getElementById('round-answer'); /*resultDisplay*/
const closeBtn = document.getElementsByClassName('close')[0];

const openBtn = document.getElementsByClassName('open')[0];

const winnerModal = document.getElementsByClassName('winner-modal')[0];
const modalAnswer = document.getElementsByClassName('modal-answer')[0];
const modalDisplay = document.getElementsByClassName('modal-display')[0];

let playerChoice;
let computerChoice;
let scoreHTML = document.getElementsByClassName('score')[0];
let computerHTML = document.getElementsByClassName('comp-score')[0];
let playerScore = 0;
let computerScore = 0;


const musicSound = new Audio("assets/music/christmas-magic-night-11648.mp3");

// function playMusic() {
//     musicSound.play();
// }

// function stopMusic() {
//     musicSound.muted();
// }


// var x = document.getElementById("myAudio"); 

// function playAudio() { 
//   x.play(); 
// } 

// function pauseAudio() { 
//   x.pause(); 
// } 


// let xmas = document.getElementById("myAudio"); 
        
// function playAudio() { 
//   xmas.play(); 
// } 

// function pauseAudio() { 
//   xmas.pause(); 
// } 


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
    showWinner(winnerModal, modalAnswer, modalDisplay);
    // musicSound.play();
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

/*https://www.w3schools.com/js/js_switch.asp*/
/*youtube tutorials*/
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
            roundAnswer.innerHTML = "You Win this Round!"; /*resultDisplay*/
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
            roundAnswer.innerHTML = "You lose, the Computer Wins this Round!";
            incrementComputerScore(computerHTML);
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
        case 'lizardlizard':
        case 'spockspock':
            roundAnswer.innerHTML = "Its a Draw!";
            break;
    }
}

function incrementPlayerScore(score) {
    score.innerHTML = ++playerScore;
}

function incrementComputerScore(score) {
    score.innerHTML = ++computerScore;
}


function showWinner(winnerModal, modalAnswer, modalDisplay) {
    if (playerScore === 3) {
        winnerModal.style.display = 'block';
        modalAnswer.textContent = 'You Beat the Computer!';
        modalDisplay.textContent = `${playerScore} vs. ${computerScore}`;
    } else if (computerScore === 3) {
        winnerModal.style.display = 'block';
        modalAnswer.textContent = 'You just Lost The Game!';
        modalDisplay.textContent = `${computerScore} vs. ${playerScore}`;
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
    roundAnswer.innerHTML = '';
    document.getElementById('computer-icon').className = '';
}


// https://www.w3schools.com/howto/howto_css_modals.asp

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

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

