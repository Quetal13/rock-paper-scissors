
let roundResult;
let playerPointsCounter = 0;
let computerPointsCounter = 0;

function getComputerChoice() {  //This function select a random choice for play
    //Set a array which save the probably choices
    let choiceArray = [
        'rock',
        'paper',
        'scissors'
    ];
    //Set vars which randomly selects a choice
    var randomSelect = Math.floor(Math.random() * choiceArray.length); 
    var randomChoice = choiceArray[randomSelect];
    //Get the results and return it
    return randomChoice;
}
function playRound(playerSelection, computerResult) { //This function is responsible for managing the rounds of the game
    //Set my player selection var case-insensitive
    playerSelection = playerSelection.toLowerCase();
    //If playerSelection is equal to computerResult then
    //  Set a console log which have the next message "It's a tie!"
    if (playerSelection === computerResult) {
        roundResult ='It\'s a tie';
    //Else if playerSelection is equal to rock and the computerResult is equal to paper then
    //  Set a console log which have the next message "You lose! Paper beats Rock"
    } else if (playerSelection === 'rock' && computerResult === 'paper') {
        roundResult = 'You lose! Paper beats Rock';
        computerPointsCounter++
    //Else if playerSelection is equal to paper and the computerResult is equal to rock then
    //  Set a console log which have the next message "You win! Paper beats Rock"
    } else if (playerSelection === 'paper' && computerResult === 'rock') {
        roundResult ="You win! Paper beats Rock";
        playerPointsCounter++
    //Else if playerSelection is equal to rock and the computerResult is equal to scissors then
    //  Set a console log which have the next message "You win! Rock beats Scissors"
    } else if (playerSelection === 'rock' && computerResult === 'scissors') {
        roundResult = "You win! Rock beats Scissors";
        playerPointsCounter++
    //Else if playerSelection is equal to scissors and the computerResult is equal to rock then
    //  Set a console log which have the next message "You lose! Rock beats Scissors"
    } else if (playerSelection === 'scissors' && computerResult === 'rock') {
        roundResult = "You lose! Rock beats Scissors";
        computerPointsCounter++
    //Else if playerSelection is equal to paper and the computerResult is equal to scissors then
    //  Set a console log which have the next message "You lose! Scissors beats Paper"
    } else if (playerSelection === 'paper' && computerResult === 'scissors') {
        roundResult = "You lose! Scissors beats Paper";
        computerPointsCounter++
    //Else if playerSelection is equal to scissors and the computerResult is equal to paper then
    //  Set a console log which have the next message "You win! Scissors beats Paper"
    } else if (playerSelection === 'scissors' && computerResult === 'paper') {
        roundResult ="You win! Scissors beats Paper";
        playerPointsCounter++
    }

}



game();

function game() { //This function is responsible for to play a best-of-five game
    //Set a loop for repeat the playRound function until the var i is equal to five
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Type your choice to play', '' )
        const computerResult = getComputerChoice();
        playRound(playerSelection, computerResult);
        console.log(roundResult);
    //If player wins three times then player wins
        if (playerPointsCounter === 3) {
            console.log('Congratulations! You win!');
            break;
    //If computer wins three times then computer wins
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
}