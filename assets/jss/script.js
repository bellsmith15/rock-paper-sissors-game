/**
 * Declare constants for DOM elements
 * and possible choices
 */
const playerChoices = document.getElementsByClassName('choice');
const roundText = document.getElementById('round-text'); /*resultDisplay*/
const closeBtn = document.getElementsByClassName('close')[0];
const winnerModal = document.getElementsByClassName('winner-modal')[0];
const modalAnswer = document.getElementsByClassName('modal-answer')[0];
const modalParagraph = document.getElementsByClassName('modal-result')[0];

let playerChoice;
let computerChoice;
let scoreHTML = document.getElementsByClassName('score')[0];
let computerHTML = document.getElementsByClassName('comp-score')[0];
let playerScore = 0;
let computerScore = 0;

const musicSound = new Audio("assets/music/christmas-magic-night-11648.mp3");


// https://www.w3schools.com/howto/howto_css_modals.asp

let modal = document.getElementById("myModal"); /* Get modal*/
let btn = document.getElementById("myBtn"); /* Get button that opens modal*/
let span = document.getElementsByClassName("shut")[0]; /* Get the <span> element that closes the modal */

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};






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



/**
 * Add event listener
 */

for (let choice of playerChoices) {
    choice.addEventListener('click', playGame);
}

closeBtn.addEventListener('click', () => {
    closeModal(winnerModal);
});


/**
 * The main game function that identifies both players choices (randomly for the computer), 
 * then the results for each of the seven rounds of play with a final winning scoreboard
 */

function playGame(e) {
    playerChoice = e.target.id;
    generateComputerChoice();
    getResult();
    showWinner(winnerModal, modalAnswer, modalParagraph);
    musicSound.play();
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
/*video tutorials*/
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
            roundText.innerHTML = "You Win this Round!"; /*resultDisplay*/
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
            roundText.innerHTML = "You lose, the Computer Wins this Round!";
            incrementComputerScore(computerHTML);
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
        case 'lizardlizard':
        case 'spockspock':
            roundText.innerHTML = "Its a Draw!";
            break;
    }
}

function incrementPlayerScore(score) {
    score.innerHTML = ++playerScore;
}

function incrementComputerScore(score) {
    score.innerHTML = ++computerScore;
}


function showWinner(winnerModal, modalAnswer, modalParagraph) {
    if (playerScore === 7) {
        winnerModal.style.display = 'block';
        modalAnswer.textContent = 'Winner! You Beat the Computer!';
        modalParagraph.textContent = `${playerScore} to ${computerScore}`;
    } else if (computerScore === 7) {
        winnerModal.style.display = 'block';
        modalAnswer.textContent = 'Sorry you Lost this Game!';
        modalParagraph.textContent = `${computerScore} to ${playerScore}`;
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



