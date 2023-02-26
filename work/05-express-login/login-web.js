const loginWeb = {
    loginPage: function(loginData, user) {
        return `
        <!doctype html>
        <html>
          <head>
            <title>Login</title>
            <link rel="stylesheet" type="text/css" href="style.css">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;900&display=swap" rel="stylesheet">
          </head>
          <body>
            <h1>Hi, ${user}
                <div class="previous-words">Your previous words are: ${loginData.userInfo[user].map(word => word).join(', ')}</div>
            </h1>
            <div class="display-panel">
                <div class="words">Your last word is: ${loginData.userInfo[user][loginData.userInfo[user].length - 1] ? loginData.userInfo[user][loginData.userInfo[user].length - 1] : ''}</div>
                <form action="/changeword" method="POST">
                    <input 
                        name="word"
                        type="text"
                        placeholder="Update your word"
                        maxlength="25"
                    >
                </form>
                <form action="/logout" method="POST">
                    <button type="submit" class="logout-button">Log Out</button>
                </form>
            </div>
          </body>
        </html>
    `;
    },

    isValidUsername: function(username) {
        //use regular expression to match the string only consist of letters and numbers
        const regExp = /^[a-zA-Z0-9]+$/;
        const isValid = username.match(regExp);
        if (username === 'dog' || username === '' || !isValid) {
            return false;
        }

        return true;
    }
};

module.exports = loginWeb;