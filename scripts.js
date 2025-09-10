
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

let buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound));
let humanScore = 0;
let computerScore = 0;
let round = document.querySelector('.round');
let score = document.querySelector('.score');
let results = document.querySelector('.results');
function playRound(e) {
    let humanChoice = e.target.className;
    let computerChoice = getComputerChoice();
    // Take humanChoice and computerChoice and output who wins. 
    // Increment humanScore or ComputerScore.
    if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "paper" || 
        humanChoice === "paper" && computerChoice === "rock") {
        round.textContent = `You win, ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    } else if (humanChoice === computerChoice) {
        round.textContent = `it's a tie. You and the computer both chose ${humanChoice}`;
    } else {
        round.textContent = `You lose, ${humanChoice} loses to ${computerChoice}.`;
        ++computerScore;
    }

    score.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            results.textContent = `You win! You had ${humanScore} points. The computer had ${computerScore} points.`;
        } else {
            results.textContent = `You lost. You had ${humanScore} points. The computer had ${computerScore} points.`;
        }
    }
}
