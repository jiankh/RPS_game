//Page elements

let computerScore = 0
let playerScore = 0
let roundCounter = 1

let playerScoreBoard = document.querySelector('.player-score')
playerScoreBoard.textContent = `Player Score: ${playerScore}`

let computerScoreBoard = document.querySelector('.computer-score')
computerScoreBoard.textContent = `Computer Score: ${computerScore}`

let roundScoreBoard = document.querySelector('.round-number')
roundScoreBoard.textContent = `Round: ${roundCounter}`

const buttons = document.querySelectorAll('.btn')

const restartButtonArea = document.querySelector('.restart-button')
const restartButton = document.createElement('button')
restartButton.textContent = 'RESTART'


//Game Elements


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (playerScore >= 5 || computerScore >= 5) {
            return; // Return early, no need to continue the game
          }

        addClickListener(button)      
    })
})


//Functions


function checkGameStatus() {
    if (playerScore >= 5) {
        endGame('You Win! Play again?')
    } else if (computerScore >= 5) {
        endGame('You Lose! Try again?')
    }
}

function endGame(result) {
    writeOnMainScreen(result)
    restartButtonArea.appendChild(restartButton)
    restartButton.addEventListener('click', () => restartGame(), {once: true})
}


function addClickListener(button) {
    let result = playRound(button.id);
  
    writeOnMainScreen(result);
  
    if (result.includes('Win')) {
      playerScore += 1;
    } else if (result.includes('Lose')) {
      computerScore += 1;
    }
  
    // Update the score and check the game status
    playerScoreBoard.textContent = `Player Score: ${playerScore}`;
    computerScoreBoard.textContent = `Computer Score: ${computerScore}`;
    roundCounter += 1;
    roundScoreBoard.textContent = `Round: ${roundCounter}`;
  
    checkGameStatus();
  }


function getComputerChoice() {
    const randInt = (Math.floor(Math.random() * 3)) // 0 for ROCK; 1 for PAPER; 2 for SCISSOR
    if (randInt === 0) {
        return "rock"
    } else if (randInt === 1) {
        return "paper"
    } else {
        return "scissor"
    }
}


function playRound(playerSelection) {
    const computerSelection = getComputerChoice()
    const playerChoice = playerSelection.toLowerCase()
    resetTransform()

    if (computerSelection === playerChoice) {
        transformPlayedChoice(`#${computerSelection}`)
        transformPlayedChoice(`#${computerSelection}C`)
        return "Its a Draw!"

    } else if (computerSelection === "rock" && playerChoice === "paper") {
        transformPlayedChoice(`#${playerChoice}`)
        transformPlayedChoice(`#${computerSelection}C`)
        return "You Win! Paper beats rock"

    } else if (computerSelection === "rock" && playerChoice === "scissor") {
        transformPlayedChoice(`#${playerChoice}`)
        transformPlayedChoice(`#${computerSelection}C`)
        return "You Lose! Rock beats scissor"

    } else if (computerSelection === "paper" && playerChoice === "rock") {
        transformPlayedChoice(`#${playerChoice}`)
        transformPlayedChoice(`#${computerSelection}C`)
        return "You Lose! Paper beats rock"

    } else if (computerSelection === "paper" && playerChoice === "scissor") {
        transformPlayedChoice(`#${playerChoice}`)
        transformPlayedChoice(`#${computerSelection}C`)
        return "You Win! Scissor beats paper"

    } else if (computerSelection === "scissor" && playerChoice === "rock") {
        transformPlayedChoice(`#${playerChoice}`)
        transformPlayedChoice(`#${computerSelection}C`)
        return "You Win! Rock beats scissor"

    } else if (computerSelection === "scissor" && playerChoice === "paper") {
        transformPlayedChoice(`#${playerChoice}`)
        transformPlayedChoice(`#${computerSelection}C`)
        return "You Lose! Scissor beats paper"
    }
}

function writeOnMainScreen(string) {
    let mainScreen = document.querySelector(".screen")
    mainScreen.textContent = string
}

function transformPlayedChoice(choice) {
    const selection = document.querySelector(`${choice}`)
    selection.classList.add('played')
}

function resetTransform() {
    const transformedClasses = document.querySelectorAll('.played')
    console.log(transformedClasses)
    transformedClasses.forEach( (transed) => { 
        transed.classList.remove('played')
    })
}

function restartGame() {
    computerScore = 0
    playerScore = 0
    roundCounter = 1
    location.reload()
}
