
let playerScore = 0;
let computerScore = 0;
let playerChoice = "";
let winner = 0;
let play = true;

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', () => playRound(button.textContent));
});

const container = document.querySelector('#container');
const message = document.createElement('div');
container.appendChild(message);

const score = document.createElement('div');
container.appendChild(score);


function getComputerChoice(){
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    if (randomNumber === 1){
        return "rock";
    }
    else if (randomNumber == 2){
        return "paper";
    }
    else {
        return "scissors";
    }
}

function checkWin(){
    if (playerScore === 5){
        message.textContent = `You win! Your final score: ${playerScore} Computer final Score: ${computerScore}`;
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5){
        message.textContent = `You lose! Your final score: ${playerScore} Computer final Score: ${computerScore}`;
        playerScore = 0;
        computerScore = 0;
    }
    return;
}

function playRound(playerSelection){
    //if the strings are equal, output that its a tie
    let computerSelection = getComputerChoice();
    let outcome = -5;
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === computerSelection){
        message.textContent = "It's a tie! Try again!";
        outcome = 0;
    }

    if (playerSelection === "rock"){
        if (computerSelection === "scissors"){
            playerScore++;
            message.textContent = "You Win! Rock beats scissors!";
            outcome = 1;
        }
        if (computerSelection === "paper"){
            computerScore++;
            message.textContent = "You Lose! Paper beats Rock!";
            outcome = -1;
        }
    }

    if (playerSelection === "paper"){
        if (computerSelection === "rock"){
            playerScore++;
            message.textContent = "You Win! Paper beats Rock!";
            outcome = 1;
        }
        if (computerSelection === "scissors"){
            computerScore++;
            message.textContent = "You Lose! Scissors beats paper!";
            outcome = -1;
        }
    }

    if (playerSelection === "scissors"){
        if (computerSelection === "paper"){
            playerScore++;
            message.textContent = "You Win! Scissors beats Paper!";
            outcome = 1;
        }
        if (computerSelection === "rock"){
            computerScore++;
            message.textContent = "You Lose! Rock beats scissors!";
            outcome = -1;
        }
    }
    if(outcome === -5){
        console.log("Something went hella wrong when deciding who won :(((((");
    }    
    checkWin();
    score.textContent = `Your Score: ${playerScore} Computer Score: ${computerScore}`;
    return outcome;

}