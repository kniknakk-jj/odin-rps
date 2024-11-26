
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex].toLowerCase(); // Return in lowercase for consistency
}

function getHumanChoice() {
    const choices = ["rock", "paper", "scissors"];
    let chosenChoice = prompt("Enter Rock, Paper, or Scissors:").toLowerCase();


    while (!choices.includes(chosenChoice)) {
        chosenChoice = prompt("Invalid choice. Please enter Rock, Paper, or Scissors:").toLowerCase();
    }

    return chosenChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
}

const humanSelection = getHumanChoice(); 
const computerSelection = getComputerChoice(); 


function playGame(rounds) {
    for (let i = 0; i < rounds; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(`Round ${i + 1}`);
        console.log(`Human: ${humanSelection}, Computer: ${computerSelection}`);
        console.log(playRound(humanSelection, computerSelection));
        console.log(`Scores - Human: ${humanScore}, Computer: ${computerScore}`);
        console.log('--------------------------');
    }


    if (humanScore > computerScore) {
    console.log("WINNER!");
    } else if (humanScore < computerScore) {
    console.log("LOSER");
    } else {
    console.log("TIED!");
    }
}

playGame(5);