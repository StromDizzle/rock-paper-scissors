
let playerScore = 0;
let computerScore = 0;
let playerChoice = "";
let winner = 0;
let play = true;

const buttons = document.querySelectorAll('#btn');
buttons.forEach(button => {
    button.addEventListener('click', () => playRound(button.textContent));
});


//while (play === true){

    //playerChoice = getPlayerChoice();
    //winner = playRound(playerChoice);
    //if (winner === 1){
    //    playerScore++;
    //}
    //else if (winner === -1){
    //    computerScore++;
    //}
    //console.log("Player score: " + playerScore + " Computer Score: " + computerScore);
//}

if (playerScore > computerScore){
    alert("You won! Your score = " + playerScore + " Computer score = " + computerScore);
}

else if (computerScore > playerScore){
    alert("You lost! Your score = " + playerScore + " Computer score = " + computerScore)
}

else{
    alert("something went terribly wrong when comparing scores!")
}


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

function playRound(playerSelection){
    //if the strings are equal, output that its a tie
    let computerSelection = getComputerChoice();
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === computerSelection){
        console.log("It's a tie! Try again!");
        return 0;
    }

    if (playerSelection === "rock"){
        if (computerSelection === "scissors"){
            playerScore++;
            console.log("You Win! Rock beats scissors!");
            return 1;
        }
        if (computerSelection === "paper"){
            computerScore++;
            console.log("You Lose! Paper beats Rock!");
            return -1;
        }
    }

    if (playerSelection === "paper"){
        if (computerSelection === "rock"){
            playerScore++;
            console.log("You Win! Paper beats Rock!");
            return 1;
        }
        if (computerSelection === "scissors"){
            computerScore++;
            console.log("You Lose! Scissors beats paper!");
            return -1;
        }
    }

    if (playerSelection === "scissors"){
        if (computerSelection === "paper"){
            playerScore++;
            console.log("You Win! Scissors beats Paper!");
            return 1;
        }
        if (computerSelection === "rock"){
            computerScore++;
            console.log("You Lose! Rock beats scissors!");
            return -1;
        }
    }

    console.log("Something went hella wrong!");
}