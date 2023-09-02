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


    function game() {
        let playerScore = 0
        let computerScore = 0

        for (let i = 1; i <= 5; i++ ) {
            let roundBoard = document.querySelector('.round-number')
            roundBoard.textContent = `Round ${i}`

            const buttons = document.querySelectorAll('.btn')
            buttons.forEach((button) => {
                button.addEventListener('click', () => {
                    let result = playRound(`${button.id}`)

                    writeOnMainScreen(result)

                    if (result.includes('Win')) {
                        playerScore += 1
                        let playerScoreBoard = document.querySelector('.player-score')
                        playerScoreBoard.textContent = `Player Score: ${playerScore}`
                    } 

                    if (result.includes('Lose')) {
                        computerScore += 1
                        let computerScoreBoard = document.querySelector('.computer-score')
                        computerScoreBoard.textContent = `Computer Score: ${computerScore}`
                    }
                    
                }, {once: true})
            })
        }

    }

    



// const buttons = document.querySelectorAll('.btn')
// buttons.forEach((button) => {
//     button.addEventListener('click', () => {
//         writeOnMainScreen(playRound(`${button.id}`))
//     })
// })



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

game()

