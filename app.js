const playBtns = document.querySelectorAll(".play-buttons");
const gameTxt = document.querySelector("#game-text");
const closeBtn = document.querySelector(".close-button");
const gameOverTxt = document.querySelector("#game-over-text");
const gameOverScrn = document.querySelector("#game-over-screen");

let humanScore = 0;
let computerScore = 0;

function capitalizeFirst(string) {
    return string.at(0).toUpperCase() + string.slice(1);
}

function getComputerChoice() {
    const rps = ["rock", "paper", "scissors"];
    return rps[Math.floor(Math.random() * rps.length)];
}

function checkIfWon() {
    if (computerScore === 3 || humanScore === 3) {
        if(computerScore === 3) {
            gameOverTxt.innerText = `Unfortunately you lost ${computerScore} to ${humanScore} against the computer!\n\nBetter luck next time!`
        } else {
            gameOverTxt.innerText = `Congratulations!\nYou won ${humanScore} to ${computerScore} against the computer!\n\nWhat an accomplishment!`
        }
        gameOverScrn.style.display = "initial";
        gameTxt.innerText = "Choose one of the options to start the game.";
        humanScore = 0;
        computerScore = 0;
    }
}

function playRound(e) {

    const humanChoice = capitalizeFirst(e.currentTarget.id); //This could be a problem. Hint: Objects
    const computerChoice = capitalizeFirst(getComputerChoice()); //This could be a problem. Hint: Objects
    
    if (humanChoice === computerChoice) {
        gameTxt.innerText = `Tie!\n\nCurrent Human Score: ${humanScore}\nCurrent Computer Score: ${computerScore}\n\nNow, pick again!`;
    } else if (humanChoice === "Rock" && computerChoice === "Paper" || humanChoice === "Scissors" && computerChoice === "Rock" || humanChoice === "Paper" && computerChoice === "Scissors") {
        computerScore++;
        gameTxt.innerText = `You lose! ${computerChoice} beats ${humanChoice}!\n\nCurrent Human Score: ${humanScore}\nCurrent Computer Score: ${computerScore}\n\nNow, pick again!`;
        checkIfWon();
    } else {
        humanScore++;
        gameTxt.innerText = `You win! ${humanChoice} beats ${computerChoice}!\n\nCurrent Human Score: ${humanScore}\nCurrent Computer Score: ${computerScore}\n\nNow, pick again!`;
        checkIfWon();
    }
}

playBtns.forEach((button) => {
  button.addEventListener("click", playRound);
});


closeBtn.addEventListener("click", () => {
gameOverScrn.style.display = "none";
})