let result = document.querySelector(".result")
let mypoints = document.querySelector(".my-points")
let machinepoints = document.querySelector(".machine-points")
let resultMachine = document.querySelector(".result-machine")


let myPointsNumber = 0
let machinePointsNumber = 0

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
    
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {

    console.log(`Humano:  ${human} Machine: ${machine}`)

    resultMachine.innerHTML = `O JavaScript escolheu: ${machine}`

    if (human === machine) {
        result.innerHTML = "deu empate"
    }else if ( human === 'rock' && machine === 'scissors' ||
        human === 'paper' && machine === 'rock' ||
        human === 'scissors' && machine === 'paper'
    ) {
        result.innerHTML = "Voce ganhou!"
        myPointsNumber++
        mypoints.innerHTML = myPointsNumber
        
    } else {
        result.innerHTML = "Voce perdeu para o JavaScript!"
        machinePointsNumber++
        machinepoints.innerHTML = machinePointsNumber
    }
}

const resetGame = () => {
    myPointsNumber = 0
    machinePointsNumber = 0
    mypoints.innerHTML = 0
    machinepoints.innerHTML = 0
    result.innerHTML = ''
    resultMachine.innerHTML = ''
}


