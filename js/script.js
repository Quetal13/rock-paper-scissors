const allButtons = document.querySelectorAll('.button-container button')
const restartButton = document.querySelector('#restart');
const round = document.querySelector('.round-counter');
const roundResult = document.querySelector('.round');
const computerPoints = document.querySelector('.computer-score');
const playerPoints = document.querySelector('.player-score');
const winner = document.querySelector('.winner');

let playerPointsCounter = 0;
let computerPointsCounter = 0;
let roundCounter = 0;

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
    playerSelection = playerSelection;
    //this conditionals check the round results for edit the roundResult var
    if (playerSelection === computerSelection) {
        roundResult.textContent ='Result: It\'s a tie';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        roundResult.textContent = 'Result: You lose! Paper beats Rock';
        computerPointsCounter++
        computerPoints.textContent = 'Computer score: ' + computerPointsCounter;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        roundResult.textContent ="Result: You win! Paper beats Rock";
        playerPointsCounter++
        playerPoints.textContent = 'Player score: ' + playerPointsCounter;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        roundResult.textContent = "Result: You win! Rock beats Scissors";
        playerPointsCounter++
        playerPoints.textContent = 'Player score: ' + playerPointsCounter;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        roundResult.textContent = "Result: You lose! Rock beats Scissors";
        computerPointsCounter++
        computerPoints.textContent = 'Computer score: ' + computerPointsCounter;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        roundResult.textContent = "Result: You lose! Scissors beats Paper";
        computerPointsCounter++
        computerPoints.textContent = 'Computer score: ' + computerPointsCounter;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        roundResult.textContent ="Result: You win! Scissors beats Paper";
        playerPointsCounter++
        playerPoints.textContent = 'Player score: ' + playerPointsCounter;
    }

}

function game() { //This function is responsible for to play a best-of-five game and print in the console the result of the round and the result of the game
        if (playerPointsCounter === 3) {
            winner.textContent = 'Congratulations! You win!';
            winner.style.color = 'RGBA(5,255,80,0.72)';
            winner.style.animation = 'zoomIn 2s'
            roundCounter = 5;
        } else if (computerPointsCounter === 3) {
            winner.textContent = 'Winner: I\'m sorry, you loose :(';
            winner.style.color = 'RGBA(255,50,80,0.81)';
            winner.style.animation = 'zoomIn 1s'
            roundCounter = 5;
        } else if (roundCounter === 5 && playerPointsCounter > computerPointsCounter) {
            winner.textContent = 'Congratulations! You win!';
            winner.style.color = 'RGBA(5,255,80,0.72)';
            winner.style.animation = 'zoomIn 2s'
        } else if (roundCounter === 5 && playerPointsCounter < computerPointsCounter) {
            winner.textContent = 'Winner: I\'m sorry, you loose :(';
            winner.style.color = 'RGBA(255,50,80,0.81)';
            winner.style.animation = 'zoomIn 1s'
        } else if (roundCounter === 5 && playerPointsCounter === computerPointsCounter) {
            winner.textContent = 'Winner: Nobody wins, it\'s a tie!';
            winner.style.color = 'RGBA(0,0,0,0.5)';
            winner.style.animation = 'zoomIn 1s'
        }
}

allButtons.forEach((button) => {
button.addEventListener('click', function(ev) {
    const computerSelection = getComputerChoice();
    if (roundCounter < 5) {
        playRound(ev.currentTarget.value, computerSelection);
        roundCounter++
        round.textContent = `Rounds: ` + roundCounter;
        game();
    }
})
})

restartButton.addEventListener('click', function() {
  roundCounter = 0;
  playerPointsCounter = 0;
  computerPointsCounter = 0;

  round.textContent = `Rounds: ` + roundCounter;
  playerPoints.textContent = 'Player score: ' + playerPointsCounter;
  computerPoints.textContent = 'Computer score: ' + computerPointsCounter;
  roundResult.textContent = "Result:";
  winner.textContent = 'Winner:';
  winner.style.color = 'white';
  winner.style.animation = '';
})