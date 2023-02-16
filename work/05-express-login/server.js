const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const uuidv4 = require('uuid').v4;
const PORT = 3000;

app.use(cookieParser());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

const sessions = {};

const loginWeb = require('./login-web');
const loginData = require('./login-data');

app.get('/', (req, res) => {
    const sid = req.cookies.sid;
    const username = sessions[sid]?.username;

    //if sid and user data exsist, pass the data to loginData to present user page
    //else present the login page
    if (sid && loginData.userInfo.hasOwnProperty(username)) {
        res.send(loginWeb.loginPage(loginData, username));
    } else {
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Login</title>
                <link rel="stylesheet" type="text/css" href="style.css">
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;900&display=swap" rel="stylesheet">
            </head>
            <body>
                <h1>Welcome! Please login</h1>
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
        `);
    };
});

app.post('/login', (req, res) => {
    const username = req.body.username.trim();

    //pass the username to isValidUsername function to check if it is a valid input
    if (!loginWeb.isValidUsername(username)) {
        res.status(401).send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Invalid Username</title>
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
        `);
        return;
    } else {
        const sid = uuidv4();
        sessions[sid] = { username };
        res.cookie('sid', sid);
        if (loginData.userInfo.hasOwnProperty(username)) {
            res.send(loginWeb.loginPage(loginData, username));
            return;
        } else {
            loginData.addUser(username);
            res.redirect('/');
        }
    }
});

app.post('/changeword', (req, res) => {
    const { word } = req.body;
    const sid = req.cookies.sid;
    const username = sessions[sid]?.username;
    if (word) {
        loginData.userInfo[username] = word;
    };
    res.redirect('/');
});

app.post('/logout', (req, res) => {
    const sid = req.cookies.sid;
    if (sid) {
        delete sessions[sid];
    }

    res.clearCookie('sid');
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});