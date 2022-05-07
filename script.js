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
  const userGuess = Number(guessField.value);
  if (guess_count === 1) {
    guessesList.textContent = 'Previous guesses: ';
  }
  guessesList.textContent += userGuess + ', ';

  guess_count++
  guessField.value = '';
  guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

// checkGuess();
