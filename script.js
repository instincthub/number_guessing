// Your JavaScript goes here

// Adding variables to store our data
let random_number = Math.floor(Math.random() * 100) + 1;

const guessesList = document.querySelector('.guesses-list');
const lastResult = document.querySelector('.last-result');
const lowOrHi = document.querySelector('.low-or-hi');

const guessSubmit = document.querySelector('.guess-submit');
const guessField = document.querySelector('.field-input');

let guess_count = 1;
let reset_button;


// Functions
function checkGuess() {
  // alert('I am a placeholder');

  /* =============================
  1. Printing prvious guesses
  ================================ */
  const userGuess = Number(guessField.value);
  if (guess_count === 1) {
    guessesList.textContent = 'Previous guesses: ';
  }
  guessesList.textContent += userGuess + ', ';


  /* =============================
  2. Check if user guessed right
  ================================ */
  if (userGuess === random_number) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  }

  /* =============================
  3. Check if user have exhusted the
  guess count
  ================================ */
  else if (guess_count === 10) {
    lastResult.textContent = '!!!GAME OVER!!!';
    lowOrHi.textContent = '';
    setGameOver();
  }

  /* =============================
  4. Let the user know when they
  guess wrong. Give the user hint
  if the guess was too low
  or too high.
  ================================ */
  else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < random_number) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if(userGuess > random_number) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }

  /* =============================
  5. Increase counter, reset and
  make input focus.
  ================================ */
  guess_count++
  guessField.value = '';
  guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

// checkGuess();


/* =============================
Disable input field,
write gameover and
call the reset game function
================================ */
function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.querySelector('.wrapper').append(resetButton);
  resetButton.addEventListener('click', resetGame);
}



/* =============================
Reset game function
================================ */
function resetGame() {
  guessCount = 1;

  // reset all the result p tags
  const resetParas = document.querySelectorAll('.result-paras p');
  for (const resetPara of resetParas) {
    resetPara.textContent = '';
  }

  // remove the resetButton
  resetButton.parentNode.removeChild(resetButton);

  // enable input guessSubmit and guessField
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
