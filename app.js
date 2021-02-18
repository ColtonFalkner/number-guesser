/*
  Game Functions
  - Player must guess a number between a min and a max
  - Player gets a certain amount of guesses
  - Notify the player of the correct answer if lose
  - Let player choose to play again
  */

//Game Values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3

//UI Elements
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message')

//Assign UI min and max
minNum.textContent = min
maxNum.textContent = max

guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value)
  console.log(guess)
  //Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red')
  }

  //Check if won
  if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct, You Win!!`)
  } else {
    //check for loss
    guessesLeft -= 1

    if (guessesLeft === 0) {
      //Game over
      guessInput.disabled = true
      guessInput.style.borderColor = 'red'
      setMessage(
        `Game Over, You fucking Loser. The correct number was ${winningNum}`,
        'red'
      )
    } else {
      //Game Continues - answer wrong
      guessInput.style.borderColor = 'red'

      //clear input
      guessInput.value = ''

      setMessage(`${guess} is not correct. ${guessesLeft} guesses left.`, 'red')
    }
  }
})

function gameOver(won, msg) {
  let color
  won === true ? (color = 'green') : (color = 'red')

  guessInput.disabled = true
  guessInput.style.borderColor = color
  setMessage(msg)
}

function setMessage(msg, color) {
  message.style.color = color
  message.textContent = msg
}
