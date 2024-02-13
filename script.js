let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = '';

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
               (playerChoice === 'paper' && computerChoice === 'rock') ||
               (playerChoice === 'scissors' && computerChoice === 'paper')) {
        result = 'You win!';
        playerScore++;
    } else {
        result = 'Computer wins!';
        computerScore++;
    }

    let message = '';
    if (playerScore > computerScore) {
        message = 'Congratulations! You win!';
    } else if (playerScore < computerScore) {
        message = 'Oops! You lose!';
    } else {
        message = "It's a tie!";
    }

    document.getElementById('result').innerText = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
    document.getElementById('player-score').innerText = `Your Score: ${playerScore}`;
    document.getElementById('computer-score').innerText = `Computer Score: ${computerScore}`;
    document.getElementById('message').innerText = message;
}  


