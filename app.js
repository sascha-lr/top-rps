const playButton = document.querySelector("#play");

function getRandomInt() {
  return Math.floor(Math.random() * 3);
}

function getComputerChoice () {
    let randomNumber = getRandomInt();
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice () {
    let humanChoice = prompt("Type either Rock, Paper or Scissors","f.e.: Rock").toLowerCase();
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
        if (humanChoice === computerChoice) {
            alert(`Tie! Current Human Score: ${humanScore}. Current Computer Score: ${computerScore}`);
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore += 1;
            alert(`You lose! Paper beats Rock! Current Human Score: ${humanScore}. Current Computer Score: ${computerScore}`);
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore += 1;
            alert(`You win! Paper beats Rock! Current Human Score: ${humanScore}. Current Computer Score: ${computerScore}`);
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore += 1;
            alert(`You win! Rock beats Scissors! Current Human Score: ${humanScore}. Current Computer Score: ${computerScore}`);
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore += 1;
            alert(`You lose! Rock beats Scissors! Current Human Score: ${humanScore}. Current Computer Score: ${computerScore}`);
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore += 1;
            alert(`You lose! Scissors beat Paper! Current Human Score: ${humanScore}. Current Computer Score: ${computerScore}`);
        } else {
            humanScore += 1;
            alert(`You win! Scissors beat Paper! Current Human Score: ${humanScore}. Current Computer Score: ${computerScore}`);
        }
    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice()); 
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice()); 
    playRound(getHumanChoice(), getComputerChoice());
}

playButton.addEventListener('click', playGame);