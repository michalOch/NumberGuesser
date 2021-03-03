/*
GAME FUNCTION:
- Player must guess a number beetween a min and max
- Player get a certain amount of guesses
- Notify player of quesses remaining
- Notify the palyer of correct answer if loose
- let player choose to play again
*/

// Game values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function (e) {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
})

// Add event listeners
// listen for guess
guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);
  // Validate input
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number beetween ${min} and ${max}`, 'red');
  }

  // Check if won
  if (guess === winningNum) {
    // Game over - won
    gameOver(true, `${winningNum} is correct! YOU WIN!`);

  } else {
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      // Game over - lost
      gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);

    } else {
      // Game continues - answer wrong
      // change border color
      guessInput.style.borderColor = 'red';
      // clear the input
      guessInput.value = '';
      // Send message
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
    }
  }

})

// Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}


// Game Over
function gameOver(won, msg) {

  let color = (won === true) ? 'green' : 'red';

  // disable input
  guessInput.disabled = true;
  // change border color
  guessInput.style.borderColor = color;
  // change text color
  message.style.color = color;
  // Send message
  setMessage(msg, color);

  // Play again ?
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';

  // Add event handler 
}


// Get winning number
function getRandomNum(min, max) {
  let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNum;
}