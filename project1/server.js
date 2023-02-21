const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const uuidv4 = require('uuid').v4;
const PORT = 3000;

app.use(cookieParser());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

const sessions = {};

const webPage = require('./web');
const { userInfo,
    isValidUsername,
    newGame,
    isValidGuess,
} = require('./data');

app.get('/', (req, res) => {
    const sid = req.cookies.sid;
    const username = sessions[sid]?.username;

    //if sid and user data exsist, pass the data to loginData to present user page
    //else present the login page
    if (sid && userInfo.hasOwnProperty(username)) {
        res.send(webPage.userPage(username));
    } else {
        res.send(webPage.loginPage());
    };
    return;
});

app.post('/login', (req, res) => {
    const username = req.body.username.trim();

    //pass the username to isValidUsername() function to check if it is a valid input
    if (!isValidUsername(username)) {
        res.status(401).send(webPage.inValidUsernamePage());
        return;
    } else {
        const sid = uuidv4();
        sessions[sid] = { username };
        res.cookie('sid', sid);
        if (userInfo.hasOwnProperty(username)) {
            res.send(webPage.userPage(username));
            return;
        } else {
            newGame(username);
            res.redirect('/');
        }
    }
});

app.post('/guess', (req, res) => {
    const { word } = req.body;
    const sid = req.cookies.sid;
    const sidUser = sessions[sid]?.username;

    //check for a valid session id
    if (!sidUser) {
        res.status(401).send(webPage.sessionInvalidPage());
        return;
    };

    userInfo[sidUser].guessTry.push(word);
    if (!isValidGuess(sidUser, word)) {
        userInfo[sidUser].validAttempts += 1;
        userInfo[sidUser].lastValidGuess = word;
    }

    res.redirect('/');
});

app.post('/new-game', (req, res) => {
    const sid = req.cookies.sid;
    const sidUser = sessions[sid]?.username;

    //check for a valid session id
    if (!sidUser) {
        res.status(401).send(webPage.sessionInvalidPage());
        return;
    };

    newGame(sidUser);

    res.redirect('/');
    console.log('username: ', userInfo[sidUser].name);
    console.log('secret word: ', userInfo[sidUser].answer);
});

app.post('/logout', (req, res) => {
    const sid = req.cookies.sid;
    delete sessions[sid];
    res.clearCookie('sid');
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});