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
    let textResult ='';
    if(playerSelection === 'rock') {
        if(computerSelection === 'scissors'){
            playerScore ++;
            textResult = 'You win! Rock beats Scissors.';
        }
        else if(computerSelection === 'paper'){
            computerScore ++
            textResult = 'You lose! Paper beats Rock.';
        }
        else{
            textResult = 'Tie.';
        }
    }
    else if(playerSelection === 'scissors'){
        if(computerSelection === 'paper'){
            playerScore ++;
            textResult = 'You win! Scissors beat Paper.';
        }
        else if(computerSelection === 'rock'){
            computerScore ++;
            textResult = 'You lose! Rock beats Scissors.';
        }
        else{
            textResult = 'Tie.';
        }
    }
    else if(playerSelection === 'paper'){
        if(computerSelection === 'rock'){
            playerScore ++;
            textResult = 'You win! Paper beats Rock.';
        }
        else if(computerSelection === 'scissors'){
            computerScore ++;
            textResult = 'You lose! Scissors beat Paper.';
        }
        else{
            textResult = 'Tie.';
        }
    }
    else {
        textResult = 'Invalid input. Please input Rock, Paper or Scissors.';
    }
    document.getElementById('choices').textContent = `${playerSelection} vs ${computerSelection}`;
    document.getElementById('message').textContent = textResult;
    document.getElementById('score').textContent = `${playerScore} : ${computerScore}`;
    if(playerScore >= 5) {
        overlayOn();
        document.getElementById('end-result').textContent = "You won! Click anywhere to start a new game."
    }
    if(computerScore >= 5) {
        overlayOn();
        document.getElementById('end-result').textContent = "You lost! Click anywhere to start a new game."
    }
}


const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener('click', (e) =>{
        playRound(e.target.id,computerPlay());
    });
});

function overlayOn() {
    document.getElementById('overlay').style.display = "block";
}

function newGame(){
    document.getElementById('overlay').style.display = "none";
    playerScore = 0;
    computerScore = 0;
    document.getElementById('choices').textContent = `Waiting for your choice`;
    document.getElementById('message').textContent = 'Good luck!';
    document.getElementById('score').textContent = `0 : 0`;
}