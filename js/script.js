
let roundResult;
let playerPointsCounter = 0;
let computerPointsCounter = 0;

function getComputerChoice() {  //This function select a random choice for play
    let choiceArray = [
        'rock',
        'paper',
        'scissors'
    ];
    var randomSelect = Math.floor(Math.random() * choiceArray.length); 
    var randomChoice = choiceArray[randomSelect];
    return randomChoice;
}
function playRound(playerSelection, computerSelection) { //This function is responsible for managing the rounds of the game
    playerSelection = playerSelection.toLowerCase();
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



game();

function game() { //This function is responsible for to play a best-of-five game
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Type your choice to play', '' )
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log(roundResult);
        if (playerPointsCounter === 3) {
            console.log('Congratulations! You win!');
            break;
        } else if (computerPointsCounter === 3) {
            console.log('I\'m sorry, you loose :(');
            break;
    //Else if the game ends and the player have more points than computer then player wins
        } else if (i === 4 && playerPointsCounter > computerPointsCounter) {
            console.log('Congratulations! You win!');
    //Else if the game ends and the computer have more points than player then computer wins
        } else if (i === 4 && playerPointsCounter < computerPointsCounter) {
            console.log('I\'m sorry, you loose :(');
    //Else if the game ends and the player have the same points than the player then it's a tie
        } else if (i === 4 && playerPointsCounter === computerPointsCounter) {
            console.log('Nobody wins, it\'s a tie!');
        }
    }
}