
let rockButton = document.getElementById("Rock");
let paperButton = document.getElementById("Paper");
let scissorsButton = document.getElementById("Scissors");

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

let humanChoice = "";
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }

    if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
}

function handleHumanChoice(choice) {
    humanChoice = choice;
    const computerChoice = getComputerChoice();
    const roundResult = playRound(humanChoice, computerChoice);
    document.getElementById("result").innerHTML = roundResult;
    document.getElementById("humanScore").textContent = `Your score: ${humanScore}`;
    document.getElementById("computerScore").textContent = `Computer's score: ${computerScore}`;
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore === 5) {
            document.getElementById("result").innerHTML = "You win the game!";
        } else {
            document.getElementById("result").innerHTML = "You lose the game!";
        }
        humanScore = 0;
        computerScore = 0;
        document.getElementById("humanScore").textContent = `Your score: ${humanScore}`;
        document.getElementById("computerScore").textContent = `Computer's score: ${computerScore}`;
    }
}

// Add event listeners for buttons
rockButton.addEventListener("click", () => handleHumanChoice("Rock"));
paperButton.addEventListener("click", () => handleHumanChoice("Paper"));
scissorsButton.addEventListener("click", () => handleHumanChoice("Scissors"));