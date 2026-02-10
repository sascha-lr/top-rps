const playButton = document.querySelector("#play");

function getRandomInt() {
  return Math.floor(Math.random() * 3);
}

function capitalizeFirst(string) {
    return string.at(0).toUpperCase() + string.slice(1);
}

function getComputerChoice() {
    const randomNumber = getRandomInt();
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice;
    while (true) {
        humanChoice = prompt("Type either Rock, Paper or Scissors","Rock").toLowerCase();
        if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
            alert("You have to type either Rock, Paper or Scissors and respect proper grammar! Trying again...");
        } else {
            break;
        }
    }
    return humanChoice;
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
        
        humanChoice = capitalizeFirst(humanChoice); //why could this be a problem? hint: objects
        computerChoice = capitalizeFirst(computerChoice); //why could this be a problem? hint: objects

        if (humanChoice === computerChoice) {
            alert(`Tie! Current Human Score: ${humanScore}. Current Computer Score: ${computerScore}`);
        } else if (humanChoice === "Rock" && computerChoice === "Paper" || humanChoice === "Scissors" && computerChoice === "Rock" || humanChoice === "Paper" && computerChoice === "Scissors") {
            computerScore++;
            alert(`You lose! ${computerChoice} beats ${humanChoice}! Current Human Score: ${humanScore}. Current Computer Score: ${computerScore}`);
        } else {
            humanScore++;
            alert(`You win! ${humanChoice} beats ${computerChoice}! Current Human Score: ${humanScore}. Current Computer Score: ${computerScore}`);
        }
    }
    while(!(humanScore >= 3 || computerScore >= 3)) {
        const humanChoice = getHumanChoice(); //advantageous for debugging
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    if (computerScore >= 3) {
        alert("Unfortunately you lost!");
    } else {
        alert("Congratulations! You won!");
    }
}

playButton.addEventListener("click", playGame);

