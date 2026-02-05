const maxScore = 100
let player1TotalScore = 0
let player2TotalScore = 0
const rolling = document.getElementById("roll")
const scorePlayer1 = document.getElementById("scorePlayer1")
const totalScorePlayer1 = document.getElementById("totalScorePlayer1")
const scorePlayer2 = document.getElementById("scoreplayer2")
const totalScoreplayer2 = document.getElementById("totalScoreplayer2")
const holdButton = document.getElementById("hold")
const players = {
    player1: false,
    shots1: 0,
    player2: false,
    shots2: 0
}
rolling.classList = "allowed"


function choosePlayer() {
    let player = Math.floor(Math.random() * 2) + 1
    if (player === 1) {
        players.player1 = true
    }
    else {
        players.player2 = true
    }

}



function turn(players) {
    if (players.player1) {
        return "player1"
    }
    return "player2"
}

function rollDice() {
    let dice1 = Math.floor(Math.random() * 7) + 1
    let dice2 = Math.floor(Math.random() * 7) + 1
    if (dice1 === dice2) {
        return 0
    }
    return dice1 + dice2
}

function runGame() {
    if (players.player1) {
        if (players.shots1 < 5) {
            let score = rollDice()
            if (score === 0) {
                holdButton.classList = "allowed"
            }
            if(score!= 0){
                holdButton.classList = "hide"
            }
            player1TotalScore += score
            scorePlayer1.innerHTML = score
            players.shots1++
        }
        if (players.shots1 === 5) {
            totalScorePlayer1.innerHTML = player1TotalScore
            rolling.classList = "hide"
            holdButton.classList = "allowed"
            scorePlayer1.innerHTML = 0
        }
        if (player1TotalScore >= 100) {
            totalScorePlayer1.innerHTML = player1TotalScore
            window.alert("player 1 win")
        }
    }
    else {
        if (players.shots2 < 5) {
            let score = rollDice()
            if (score === 0) {
                holdButton.classList = "allowed"
            }
            if(score!= 0){
                holdButton.classList = "hide"
            }
            player2TotalScore += score
            scorePlayer2.innerHTML = score
            players.shots2++
        }
        if (players.shots2 === 5) {
            totalScoreplayer2.innerHTML = player2TotalScore
            rolling.classList = "hide"
            holdButton.classList = "allowed"
            scorePlayer2.innerHTML = 0
        }
        if (player2TotalScore >= 100) {
            totalScoreplayer2.innerHTML = player2TotalScore
            window.alert("player 2 win")
        }
    }

}

choosePlayer()
holdButton.classList = "hide"
rolling.addEventListener("click", () => {
    runGame()
})

holdButton.addEventListener("click", () => {
    if (players.player1) {
        players.player1 = false
        players.shots1 = 0
        players.player2 = true
        players.shots2 = 0
    }
    else {
        players.player1 = true
        players.player2 = false
        players.shots2 = 0
        players.shots1 = 0
    }
    holdButton.classList = "hide"
    rolling.classList = "allowed"
})
