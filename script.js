// Adding variables to store our data
let random_number = Math.floor(Math.random() * 100) + 1;
// console.log(random_number);
// console.log(Math.floor(40.6));

const guessesList = document.querySelector('.guesses-list');
const lastResult = document.querySelector('.last-result');
const lowOrHi = document.querySelector('.low-or-hi');

const guessSubmit = document.querySelector('.guess-submit');
const guessField = document.querySelector('.field-input');

let guess_count = 1;
let reset_button;

// Functions
function checkGuess() {
	/* =============================
  1. Printing prvious guesses
  ================================ */
  const userGuess = Number(guessField.value)

  if (guess_count === 1){
    guessesList.textContent = "Previous guesses: "
  }
  guessesList.textContent += userGuess + ', '

	/* =============================
  2. Check if user guessed right
  ================================ */
  if (userGuess === random_number) {
    lastResult.textContent = "Congratulations! You got it right";
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver()
  }

	/* =============================
  3. Check if user have exhusted the
  guess count

  4. Let the user know when they
  guess wrong. Give the user hint
  if the guess was too low
  or too high.
  ================================ */

  else if (guess_count === 10) {
    lastResult.textContent = "!!!GAME OVER";
    lastResult.style.backgroundColor = 'red';
    lowOrHi.textContent = '';
    setGameOver()

  }
  else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = 'red';
    if (userGuess < random_number) {
      lowOrHi.textContent = 'Last guess was too low!';
    }
    else if (userGuess > random_number) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }
  console.log(guess_count);

	/* =============================
  5. Increase counter, reset and
  make input focus.
  ================================ */
  guess_count++
  guessField.value = ''
  guessField.focus()


}

// checkGuess()
guessSubmit.addEventListener('click', checkGuess)


/* =============================
Disable input field,
write gameover and
call the reset game function
================================ */
function setGameOver(){
  guessField.disabled = true;
  guessSubmit.disabled = true;

  reset_button = document.createElement('button')
  reset_button.textContent = "Start new game"

  document.querySelector('.wrapper').append(reset_button)
  reset_button.addEventListener('click', resetGame)

}

/* =============================
Reset game function
================================ */
function resetGame(){
  guess_count = 1;

  const resetParas = document.querySelectorAll('.result-paras p');
  console.log(resetParas);

  for (const resetPara of resetParas) {
    resetPara.textContent = '';
  }

  // remove the resetButton
  reset_button.parentNode.removeChild(reset_button);

  // enable input guessSubmit and guessField
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();
  //
  lastResult.style.backgroundColor = 'white';
  //
  randomNumber = Math.floor(Math.random() * 100) + 1;

}
