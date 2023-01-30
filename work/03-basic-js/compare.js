"use strict";
/* DO NOT MODIFY EXCEPT WHERE ALLOWED */
module.exports = compare; // DO NOT MODIFY - USED FOR TESTING

function compare( word, guess ) {  // DO NOT MODIFY
  let convertedWord = word.toLowerCase();
  let convertedGuess = guess.toLowerCase();
  let wordChars = {};
  let guessChars = {};
  let num = 0;

  for (let i = 0; i < convertedWord.length; i++) {
    wordChars[convertedWord[i]] = (wordChars[convertedWord[i]] || 0) + 1;
    guessChars[convertedGuess[i]] = (guessChars[convertedGuess[i]] || 0) + 1;
  }

  for (const letter in wordChars) {
    if (guessChars[letter]) {
      num += Math.min(wordChars[letter], guessChars[letter]);
    }
  }

  return num;
}
