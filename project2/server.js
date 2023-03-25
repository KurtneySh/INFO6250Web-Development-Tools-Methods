const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

const userInfo = require('./userInfo');
const sessions = require('./sessions');

app.use(cookieParser());
app.use(express.static('./public'));
app.use(express.json());

app.get('/api/session', (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getSessionUser(sid) : '';

    if (!sid || !username) {
        res.status(401).json({error: 'auth-missing'});
        return;
    }

    userInfo.users[username].isLoggedIn = true;

    res.json({ username, users: userInfo.users });
});

app.post('/api/session', (req, res) => {
    const { username } = req.body;

    if (!userInfo.isValidUsername(username)) {
        res.status(400).json({ error: 'required-username' });
        return;
    }

    if (username === 'dog') {
        res.status(403).json({ error: 'auth-insufficient' });
        return;
    }

    userInfo.users[username] = {
        isLoggedIn: true
    };

    const sid = sessions.addSession(username);
    res.cookie('sid', sid);

    res.json({ username, users: userInfo.users });
});

app.delete('/api/session', (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getSessionUser(sid) : '';

    if (sid) {
        res.clearCookie('sid');
    }

    if (username) {
        sessions.deleteSession(sid);
        userInfo.users[username].isLoggedIn = false;
    }

    res.json({wasLoggedIn: !!username});
});

app.get('/api/messages', (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getSessionUser(sid) : '';

    if (!sid || !username) {
        res.status(401).json({ error: 'auth-missing' });
        return;
    }

    userInfo.users[username].isLoggedIn = true;

    const users = userInfo.users;
    const messages = userInfo.messages;
    res.json({ username, users, messages });
});

app.post('/api/message', (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getSessionUser(sid) : '';

    if (!sid || !username) {
        res.status(401).json({ error: 'auth-missing' });
        return;
    }

    const { message } = req.body;
    const newMessage = { username, message };
    
    if (!message) {
        res.status(400).json({ error: 'required-message' });
        return;
    }

    userInfo.messages.push(newMessage);
    
    const messages = userInfo.messages;
    res.json({ username, messages });
})

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));