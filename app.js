// Selecting Element for dom manipulation;
const playerOneScore = document.querySelector('.player-one')
const playerTwoScore = document.querySelector('.player-two')
const playingScore = document.querySelector('.playing-score-set')
const inputForm = document.querySelector('.form')
const inputScore = document.querySelector('.input')
const playerOneBtn = document.querySelector('.btn-primary')
const playerTwoBtn = document.querySelector('.btn-success')
const resetBtn = document.querySelector('.btn-danger')

// Data Layer (Saving User Data)
let winningScore = 5;
let playerOneScoreValue = 0;
let playerTwoScoreValue = 0;
let gameOver = false;


// Event Listener
inputForm.addEventListener('submit', (event) => {
    event.preventDefault()
    let scoreSet = Number(inputScore.value);
    if(scoreSet<1){
        alert('Input a valid number which is getter than 0')
        scoreSet = '(!!Wrong Input!!)'
    }
    playingScore.innerText = scoreSet;    
    inputScore.value = '';

    winningScore = scoreSet;
})



playerOneBtn.addEventListener('click', () => {

    if(!gameOver && playerOneScoreValue < winningScore){
        playerOneScoreValue++;
        playerOneScore.textContent = playerOneScoreValue;
    }
    if(playerOneScoreValue === winningScore){
        alert('player 1 you win')
        gameOver = true;
    }
    if(gameOver){
        resetGame();
    }
})

playerTwoBtn.addEventListener('click', () => {

    if(!gameOver && playerTwoScoreValue < winningScore){
        playerTwoScoreValue++;
        playerTwoScore.textContent = playerTwoScoreValue;
    }
    if(playerTwoScoreValue === winningScore){
        alert('player 2 you win')
        gameOver = true;
    }
    if(gameOver){
        resetGame();
    }
})

function resetGame(){
    winningScore = 5;
    playerOneScoreValue = 0;
    playerTwoScoreValue = 0;
    gameOver = false;

    playerOneScore.textContent = playerOneScoreValue;
    playerTwoScore.textContent = playerTwoScoreValue;
    playingScore.textContent = winningScore;
}

// resetBtn.addEventListener('click', () => {
//     // winningScore = 5;
//     // playerOneScoreValue = 0;
//     // playerTwoScoreValue = 0;
//     // gameOver = false;

//     // playerOneScore.textContent = playerOneScoreValue;
//     // playerTwoScore.textContent = playerTwoScoreValue;
//     // playingScore.textContent = winningScore;

//     resetGame();
// })

resetBtn.addEventListener('click', resetGame)
