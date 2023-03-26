const words = require('./words');
const userInfo = {}; 

function isValidUsername(username) {
    //use regular expression to match the string only consist of letters and numbers
    const regExp = /^[a-zA-Z0-9]+$/;
    const isValid = username.match(regExp);
    if (username === 'dog' || username === '' || !isValid) {
        return false;
    }

    return true;
}

function isValidGuess(username, word) {
    if (!word) {
        return "";
    }

    word = word.toLowerCase();
    const wordCount = userInfo[username].guessTry.filter(currentWord => currentWord == word).length;

    if (!userInfo[username].possibleWords.includes(word)) { //out of range
        return `Invalid Guess: Out of Range`;
    } else if (wordCount >= 2) { //duplicate guess
        return `Invalid Guess: Duplicate Guess`;
    } else {
        return '';
    }
}

function compare(word, guess) {
    if (!guess) {
        return 'No guess yet';
    }
    
    let convertedWord = word.toLowerCase();
    let convertedGuess = guess.toLowerCase();
    let wordChars = {};
    let guessChars = {};
    let num = 0;
  
    for (let letterIndex = 0; letterIndex < convertedWord.length; letterIndex++) {
      wordChars[convertedWord[letterIndex]] = (wordChars[convertedWord[letterIndex]] || 0) + 1;
      guessChars[convertedGuess[letterIndex]] = (guessChars[convertedGuess[letterIndex]] || 0) + 1;
    }
  
    for (const letter in wordChars) {
      if (guessChars[letter]) {
        num += Math.min(wordChars[letter], guessChars[letter]);
      }
    }
  
    return `Match: ${num}`;
}


function newGame(username) {
    //initialize userInfo by calling newGame() function
    userInfo[username] = {
        name: username,
        guessTry: [],
        lastValidGuess: "",
        validAttempts: 0,
        answer: "",
        possibleWords: [],
    };

    //generate 10 possible words and select one of them as the answer
    const startIndex = Math.floor(Math.random() * (words.length - 10)) ;
    const possibleWords = words.slice(startIndex, startIndex + 10).map(word => word);
    const answer = possibleWords[Math.floor(Math.random() * 10)];
    userInfo[username].answer = answer;
    userInfo[username].possibleWords = possibleWords;
    return;
}


const loginData = {
    userInfo,
    isValidUsername,
    isValidGuess,
    compare,
    newGame,
};

module.exports = loginData;