var humanScore = 0;
var computerScore = 0;
var score;
var messageDiv;
var btn1;
var btn2;
var btn3;
var MAX_SCORE = 5;

function setScoreText() {
    score.textContent = "Score: Human " + humanScore + " - Computer " + computerScore;
}

function disableButtons() {
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
}

function endGame() {
    if (humanScore === MAX_SCORE) {
        messageDiv.textContent = "You win the game!";
    } else if (computerScore === MAX_SCORE) {
        messageDiv.textContent = "Computer wins the game!";
    }
    disableButtons();
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        messageDiv.textContent = "It's a tie! Both chose " + humanChoice + ".";
    } else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
               (humanChoice === 'paper' && computerChoice === 'rock') ||
               (humanChoice === 'scissors' && computerChoice === 'paper')) {
        humanScore++;
        messageDiv.textContent = "You win! " + humanChoice + " beats " + computerChoice + ".";
    } else {
        computerScore++;
        messageDiv.textContent = "You lose! " + computerChoice + " beats " + humanChoice + ".";
    }
    setScoreText();
}

function handleHumanChoice(choice) {
    if (humanScore >= MAX_SCORE || computerScore >= MAX_SCORE) {
        return;
    }
    const computerSelection = getComputerChoice();
    playRound(choice, computerSelection);
    if (humanScore === MAX_SCORE || computerScore === MAX_SCORE) {
        endGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    score.textContent = "Score: Human " + humanScore + " - Computer " + computerScore;
    messageDiv.textContent = "New game started! Choose rock, paper, or scissors.";
    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
}

function playGame() {
    resetGame();
}

function init() {
    score = document.getElementById('score');
    messageDiv = document.getElementById('message');
    btn1 = document.getElementById('btn1');
    btn2 = document.getElementById('btn2');
    btn3 = document.getElementById('btn3');

    setScoreText();

    btn1.addEventListener('click', function() {
        handleHumanChoice('rock');
    });
    btn2.addEventListener('click', function() {
        handleHumanChoice('paper');
    });
    btn3.addEventListener('click', function() {
        handleHumanChoice('scissors');
    });
}

document.addEventListener('DOMContentLoaded', init);
