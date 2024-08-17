const computersInput = document.getElementById("computers-choice");
const result = document.getElementById("result");
const scoreField = document.getElementById("score");
const roundField = document.getElementById("rounds");

let currentUserScore = 0;
let currentRound = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playGame(userChoice) {
  let computersChoice = getComputerChoice();
  computersInput.textContent = computersChoice;

  currentRound += 1;
  roundField.textContent = currentRound;

  let didUserWin = checkWinner(userChoice, computersChoice);

  if (didUserWin === "DRAW") {
    result.textContent = `This round is a draw. You both chose ${computersChoice}`;
  } else if (didUserWin === "WIN") {
    result.textContent = `${userChoice} beats ${computersChoice}, You WIN this round.`;
    currentUserScore += 1;
    scoreField.textContent = currentUserScore;
  } else if (didUserWin === "LOSE") {
    result.textContent = `${computersChoice} beats ${userChoice}, You LOSE this round.`;
  }
}

function checkWinner(userChoice, computersChoice) {
  if (userChoice === computersChoice) {
    return "DRAW";
  } else if (userChoice === "rock") {
    if (computersChoice === "paper") {
      return "LOSE";
    }
    if (computersChoice === "scissor") {
      return "WIN";
    }
  } else if (userChoice === "paper") {
    if (computersChoice === "rock") {
      return "WIN";
    }
    if (computersChoice === "scissor") {
      return "LOSE";
    }
  } else if (userChoice === "scissor") {
    if (computersChoice === "rock") {
      return "LOSE";
    }
    if (computersChoice === "paper") {
      return "WIN";
    }
  }
}
