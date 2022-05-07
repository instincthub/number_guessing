// Your JavaScript goes here

// Adding variables to store our data
let random_number = Math.floor(Math.random() * 2) + 1;

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
  Printing prvious guesses
  ================================ */
  const userGuess = Number(guessField.value);
  if (guess_count === 1) {
    guessesList.textContent = 'Previous guesses: ';
  }
  guessesList.textContent += userGuess + ', ';


  /* =============================
  Check if user guessed right
  ================================ */
  if (userGuess === random_number) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    // setGameOver();
  }

  /* =============================
  Check if user have exhusted the
  guess count
  ================================ */
  else if (guess_count === 10) {
    console.log(guess_count);
    console.log(guess_count);
    lastResult.textContent = '!!!GAME OVER!!!';
    lastResult.style.color = 'red';
    lowOrHi.textContent = '';
    // setGameOver();
  }

  /* =============================
  Increase counter, reset and
  make input focus.
  ================================ */
  guess_count++
  guessField.value = '';
  guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

// checkGuess();
