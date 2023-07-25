
game();

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let playerChoice = "";
    let computerChoice = "";
    let winner = 0;

    while (playerScore < 5 && computerScore < 5){
        playerChoice = getPlayerChoice();
        computerChoice = getComputerChoice();
        winner = playRound(playerChoice, computerChoice);
        if (winner === 1){
            playerScore++;
        }
        else if (winner === -1){
            computerScore++;
        }
        console.log("Player score: " + playerScore + " Computer Score: " + computerScore);
    }

    if (playerScore > computerScore){
        alert("You won! Your score = " + playerScore + " Computer score = " + computerScore);
    }

    else if (computerScore > playerScore){
        alert("You lost! Your score = " + playerScore + " Computer score = " + computerScore)
    }

    else{
        alert("something went terribly wrong when comparing scores!")
    }

}

function getPlayerChoice(){
    return prompt("what do you choose?").toLowerCase();
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

function playRound(playerSelection, computerSelection){
    //if the strings are equal, output that its a tie
    if (playerSelection === computerSelection){
        console.log("It's a tie! Try again!");
        return 0;
    }

    if (playerSelection === "rock"){
        if (computerSelection === "scissors"){
            game.playerScore++;
            console.log("You Win! Rock beats scissors!");
            return 1;
        }
        if (computerSelection === "paper"){
            game.computerScore++;
            console.log("You Lose! Paper beats Rock!");
            return -1;
        }
    }

    if (playerSelection === "paper"){
        if (computerSelection === "rock"){
            game.playerScore++;
            console.log("You Win! Paper beats Rock!");
            return 1;
        }
        if (computerSelection === "scissors"){
            game.computerScore++;
            console.log("You Lose! Scissors beats paper!");
            return -1;
        }
    }

    if (playerSelection === "scissors"){
        if (computerSelection === "paper"){
            game.playerScore++;
            console.log("You Win! Scissors beats Paper!");
            return 1;
        }
        if (computerSelection === "rock"){
            game.computerScore++;
            console.log("You Lose! Rock beats scissors!");
            return -1;
        }
    }

    console.log("Something went hella wrong!");
}