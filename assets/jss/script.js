// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them 

document.addEventListener("DOMContentLoaded",function (){
    let buttons = document.getElementsByTagName("button")
    // for (let i = 0; i <<button.length; i++ ) OLD way of doing it

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                // alert("You clicked Submit!");
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                // alert(`You clicked ${gameType}`); to run the game see below the parameter is "gameType"
                runGame(gameType);
            }
        })
    }  
    runGame("addition");
    runGame("multiply");

    // runGame("subtract");
    // runGame("division");

})


/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame (gameType) {
    let num1 = Math.floor(Math.random() * 25) + 1; /*Creates two random nummbers between 1 and 25*/
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    } else if (gameType === "subtract") {
        displaySubtractQuestion(num1, num2);

    // } else if (gameType === "division") {
    //     displayDivideQuestion(num1, num2);

    } else {
        alert(`unknown game type: ${gameType}`);
        throw `Unkonwn game type: ${gameType}.Aborting!`;
    }
}
// runGame();  This pops up the description for the DOcstring in JS so you know the description without having to search for where it was placed in the script


/**
 * Checks the answer against the first element in
 * the returned calculatedCorrectAnswer array. ( return [operand1 + operand2, "addition"];)
 */
// function checkAnswer (); This pops up the description for the DOCstring in JS so you know the description without having to search for where it was placed in the script It calculates the correct answer "checkAnswer"
function checkAnswer () {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey! You got it right! :D");
        incrementScore(); /*Row 103   118 */
    } else {
        alert(`Awwww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);   /*this is a template literal in the alert*/
        incrementWrongAnswer(); /*Row 111   126 */
    }
    runGame(calculatedAnswer[1]); /*1 returns the calculated answer*/
}
    
// Test in Inspect DEVTools on Console to test the sum up logic
// userAnswer = 23;
// 23
// let userAnswer = 23;
// undefined
// let calculatedAnswer = [21, "addition"];
// undefined
// let isCorrect = userAnswer === calculateCorrectAnswer [0];
// undefined
// isCorrect
// false



/**
 * Gets the operands (the numbers) and the operator (plus, minus +_x/ signs)
 * directly from the DOM and returns the correct answer.
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').innerText);  /*parseInt treats the number as a whole no decimal by default if we didn't use this then the returned alue would be a string and you could not do maths on it*/
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === "+"){
        return [operand1 + operand2, "addition"];
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];
    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"]; 

    // } else if (operator === "/") {
    //     return [operand1 / operand2, "divide"];

    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`; /*operator is a template literal*/
    }
}

/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore () {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer () {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}


function displayAdditionQuestion (operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}


function displaySubtractQuestion (operand1, operand2) {
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2; /*ternary operator  Q = Is operand 1 bigger than operand2?  if = operand1 : else = operand2 - so this shows the highest random number first so - minus will be subtractabl and not result in a -4 number*/
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1; /*ternary operator  Q = Is operand 1 bigger than operand2?  if = operand2 : else = operand1 - so this shows the highest random number first so - minus will be subtractabl and not result in a -4 number*/
    document.getElementById('operator').textContent = "-";
}

function displayMultiplyQuestion (operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";
}


// TEST one for me to do DIVIDE function displayDivideQuestion () {
    
// function displayDivideQuestion (operand1, operand2) {
//     document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2; /*ternary operator  Q = Is operand 1 bigger than operand2?  if = operand1 : else = operand2 - so this shows the highest random number first so - minus will be subtractabl and not result in a -4 number*/
//     document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1; /*ternary operator  Q = Is operand 1 bigger than operand2?  if = operand2 : else = operand1 - so this shows the highest random number first so - minus will be subtractabl and not result in a -4 number*/
//     document.getElementById('operator').textContent = "/";
// }

}