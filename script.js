//initialize score keepers
let playerScore = 0;
let computerScore = 0;

// Generates a random choice by the computer, each with a 33% chance
function computerPlay(){
    let choice;
    let number = Math.random();
    if(number <= 0.33){
        choice = "rock";
    }
    else if (number <= 0.66){
        choice = "paper";
    }
    else {
        choice = "scissors";
    }
    return choice;
}

//Compares player and computer choices and returns the corresponding message
function playRound(playerSelection, computerSelection) {
    if(playerSelection === 'rock') {
        if(computerSelection === 'scissors'){
            playerScore ++;
            console.log('You win! Rock beats Scissors.');
        }
        else if(computerSelection === 'paper'){
            computerScore ++
            console.log('You lose! Paper beats Rock.');
        }
        else{
            console.log('Tie!');
        }
    }
    else if(playerSelection === 'scissors'){
        if(computerSelection === 'paper'){
            playerScore ++;
            console.log('You win! Scissors beat Paper.');
        }
        else if(computerSelection === 'rock'){
            computerScore ++;
            console.log('You lose! Rock beats Scissors.');
        }
        else{
            console.log('Tie.');
        }
    }
    else if(playerSelection === 'paper'){
        if(computerSelection === 'rock'){
            playerScore ++;
            console.log('You win! Paper beats Rock.');
        }
        else if(computerSelection === 'scissors'){
            computerScore ++;
            console.log('You lose! Scissors beat Paper.');
        }
        else{
            console.log('Tie.');
        }
    }
    else {
        console.log('Invalid input. Please input Rock, Paper or Scissors.');
    }
}


function game(){
    let firstToFive = 0;
    while (firstToFive < 5){
        let playerPlay = prompt("Choose your weapon: Rock, Paper or Scissors").toLowerCase();
        playRound (playerPlay,computerPlay());
        console.log('Player: '+playerScore +', Computer: '+ computerScore);
        firstToFive = Math.max(playerScore,computerScore);
    }
    if(playerScore === 5){
        console.log('Congratulations! You won the game.');
    }
    else {
        console.log('You lost! Better luck next time.');
    }
}
game();