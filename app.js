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
  winningNum = 2,
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
    // disable input
    guessInput.disabled = true;
    // change border color
    guessInput.style.borderColor = 'green';
    // Set message
    setMessage(`${winningNum} is correct! You win!`, 'green');

  } else {

  }

})

// Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}