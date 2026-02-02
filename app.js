const playButton = document.querySelector("#play");

function getRandomInt() {
  return Math.floor(Math.random() * 3);
}

function capitalizeFirst(string) {
    return string.at(0).toUpperCase() + string.slice(1);
}

function getComputerChoice () {
    const randomNumber = getRandomInt();
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice () {
    const humanChoice = prompt("Type either Rock, Paper or Scissors","f.e.: Rock").toLowerCase();
    if (!(humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors")) {
        alert("You have to type either Rock, Paper or Scissors and respect proper grammar! Trying again...");
        return getHumanChoice();
    } else {
        return humanChoice;
    }
}

function playGame () {

    let humanScore = 0;
    let computerScore = 0;
    
    function playRound (humanChoice, computerChoice) {
        
        humanChoice = capitalizeFirst(humanChoice);
        computerChoice = capitalizeFirst(computerChoice);

        if (humanChoice === computerChoice) {
            alert(`Tie! Current Human Score: ${humanScore}. Current Computer Score: ${computerScore}`);
        } else if (humanChoice === "Rock" && computerChoice === "Paper" || humanChoice === "Scissors" && computerChoice === "Rock" || humanChoice === "Paper" && computerChoice === "Scissors") {
            computerScore += 1;
            alert(`You lose! ${computerChoice} beats ${humanChoice}! Current Human Score: ${humanScore}. Current Computer Score: ${computerScore}`);
        } else {
            humanScore += 1;
            alert(`You win! ${humanChoice} beats ${computerChoice}! Current Human Score: ${humanScore}. Current Computer Score: ${computerScore}`);
        }
    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
}

playButton.addEventListener('click', playGame);