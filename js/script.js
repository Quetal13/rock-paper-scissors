const allButtons = document.querySelectorAll('.button-container')

//Add a conditional that check the player's choice
//Return the player's choice

let roundResult;
let playerPointsCounter = 0;
let computerPointsCounter = 0;

function getComputerChoice() {
    const choiceArray = [
        'rock',
        'paper',
        'scissors'
    ];
    var randomSelect = Math.floor(Math.random() * choiceArray.length); 
    var randomChoice = choiceArray[randomSelect];
    return randomChoice;
}
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    //this conditionals check the round results for edit the roundResult var
    if (playerSelection === computerSelection) {
        roundResult ='It\'s a tie';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        roundResult = 'You lose! Paper beats Rock';
        computerPointsCounter++
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        roundResult ="You win! Paper beats Rock";
        playerPointsCounter++
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        roundResult = "You win! Rock beats Scissors";
        playerPointsCounter++
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        roundResult = "You lose! Rock beats Scissors";
        computerPointsCounter++
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        roundResult = "You lose! Scissors beats Paper";
        computerPointsCounter++
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        roundResult ="You win! Scissors beats Paper";
        playerPointsCounter++
    }

}



//game();

/*function game() { //This function is responsible for to play a best-of-five game and print in the console the result of the round and the result of the game
    for (let i = 0; i < 5; i++) {
        if (playerPointsCounter === 3) {
            console.log('Congratulations! You win!');
            break;
        } else if (computerPointsCounter === 3) {
            console.log('I\'m sorry, you loose :(');
            break;
        } else if (i === 4 && playerPointsCounter > computerPointsCounter) {
            console.log('Congratulations! You win!');
        } else if (i === 4 && playerPointsCounter < computerPointsCounter) {
            console.log('I\'m sorry, you loose :(');
        } else if (i === 4 && playerPointsCounter === computerPointsCounter) {
            console.log('Nobody wins, it\'s a tie!');
        }
    }
} */

allButtons.forEach((button) => {
button.addEventListener('click', function(ev) {
    const computerSelection = getComputerChoice();
    playRound(ev.target.value, computerSelection);
    console.log(roundResult);
})
})