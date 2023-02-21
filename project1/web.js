const { userInfo, 
    compare,
    isValidGuess,
} = require('./data');

const webPages = {
    loginPage: function() {
        return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Treasure Hunter</title>
                <link rel="stylesheet" type="text/css" href="style.css">
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;900&display=swap" rel="stylesheet">
            </head>
            <body>
                <h1>Welcome! Treasure Hunter, login to start your journey!</h1>
                <div class="login-panel">
                    <form action="/login" method="POST">
                        <input 
                            name="username"
                            type="text"
                            placeholder="Please input a username here to login"
                            maxlength="25"
                        >
                        <button type="submit" class="submit-button">Submit</button>
                    </form>
                </div>
            </body>
            </html>
        `
    },

    inValidUsernamePage: function() {
        return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Treasure Hunter</title>
                <link rel="stylesheet" type="text/css" href="style.css">
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;900&display=swap" rel="stylesheet">
            </head>
            <body>
                <h1>Sorry, the username is invalid!</h1>
                <a href="/">Click here to return</a>
            </body>
            </html>
        `
    },

    userPage: function(user) {
        const length = userInfo[user].guessTry.length
        return `
        <!doctype html>
        <html>
          <head>
            <title>Treasure Hunter</title>
            <link rel="stylesheet" type="text/css" href="style.css">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;900&display=swap" rel="stylesheet">
          </head>
          <body>
            <h1>
                Find the 'ONLY' treasure among the gold ignot below
            </h1>
            <div class="words-container">
                <div class="possible-words">
                    ${userInfo[user].possibleWords.map(word => 
                        `<div class="possible-word">${word}</div>`
                    ).join('')}
                </div>
            </div>

            <div class="display-panel">
                <div class="guess-container">
                    <div>Username: ${user}</div>
                    <div>Last Valid Guess: ${userInfo[user].lastValidGuess ? `'${userInfo[user].lastValidGuess}'` : "No valid guess yet"}</div>
                    <div>Attempts: ${userInfo[user].validAttempts}</div>
                    <div>Previous Guess: ${userInfo[user].guessTry.map(word => word).join(' ') || `No guess yet`}</div>
                    <div>Last Guess: ${userInfo[user].guessTry[length - 1] || ''}</div>
                    <div>${compare(userInfo[user].answer, userInfo[user].guessTry[length - 1])}</div>
                    <div>${userInfo[user].guessTry !== [] ? isValidGuess(user, userInfo[user].guessTry[length - 1]) : ""}</div>
                    <div class="winning-status">${compare(userInfo[user].answer, userInfo[user].lastValidGuess) == `Match: 5` ? `CONGRATS!!!! YOU FIND IT!!!!` : ''}</div>
                </div>
                <div class="control-panel">
                    <form action="/guess" method="POST">
                        <input 
                            name="word"
                            type="text"
                            placeholder="Update your word"
                            maxlength="25"
                            ${compare(userInfo[user].answer, userInfo[user].lastValidGuess) == `Match: 5` ? `disabled` : ''}
                        >
                    </form>

                    <form action="/new-game" method="POST">
                        <button type="submit" class="submit-button">New Game</button>
                    </form>
                    <form action="/logout" method="POST">
                        <button type="submit" class="logout-button">Log Out</button>
                    </form>
                </div>
            </div>
          </body>
        </html>
    `;
    },

    sessionInvalidPage: function() {
        return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Treasure Hunter - Invalid User</title>
                <link rel="stylesheet" type="text/css" href="style.css">
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;900&display=swap" rel="stylesheet">
            </head>
            <body>
                <h1>Invalid User</h1>
                <div class="display-panel">
                    <form action="/login" method="POST">
                        <input 
                            name="username"
                            type="text"
                            placeholder="Please input a username here to login"
                            maxlength="25"
                        >
                        <button type="submit" class="submit-button">Submit</button>
                    </form>
                </div>
            </body>
            </html>
        `
    }
};

module.exports = webPages;