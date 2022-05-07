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
