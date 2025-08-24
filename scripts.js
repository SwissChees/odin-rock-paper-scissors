


function getComputerChoice() {
    // Randomly choose a number between zero, one, or two.
    let choice = Math.floor(Math.random() * 3);
    // Return rock, paper, or scissors corresponding to zero, one, and two.
    switch (choice) {
        case 0 : 
            return "rock";
        case 1 : 
            return "paper";
        case 2 : 
            return "scissors";
    }
}

function getHumanChoice() {
    // Prompt user for rock, paper, or scissors.
    let choice = prompt("Rock, paper, or scissors?");
    choice = choice.toLowerCase()
    // Tell them to try again if they don't type one of the three. 
    if (choice != "rock" && choice != "paper" && choice != "scissors") {
        alert("Please try again. You did not type out one of the three options.");
        getHumanChoice()
    } 
    // Return the value. 
    else {
        return choice;
    }
}



function playGame() {
    // Play 5 rounds.

    // Initialize score. 
    let humanScore = 0;
    let computerScore = 0;

    // Round function.
    function playRound(humanChoice, computerChoice) {
        // Take humanChoice and computerChoice and output who wins. 
        // Increment humanScore or ComputerScore.
        if (humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "scissors" && computerChoice === "paper" || 
            humanChoice === "paper" && computerChoice === "rock") {
            console.log(`You win, ${humanChoice} beats ${computerChoice}.`);
            humanScore++;
        } else if (humanChoice === computerChoice) {
            console.log(`it's a tie. You and the computer both chose ${humanChoice}`);
        } else {
            console.log(`You lose, ${humanChoice} loses to ${computerChoice}.`);
            ++computerScore;
        }
    }

    // Call playRound 5 times.
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    // Print results. 
    if (humanScore > computerScore) {
        console.log(`You win! You had ${humanScore} points. The computer had ${computerScore} points.`);
    } else if (humanScore === computerScore) {
        console.log(`You tied. You and the computer each had ${humanScore} points.`);
    } else {
        console.log(`You lost. You had ${humanScore} points. The computer had ${computerScore} points.`)
    }
}

playGame();
