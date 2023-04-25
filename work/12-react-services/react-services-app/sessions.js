const uuid = require('uuid').v4;

const sessions = {}; // {'asd12joas': {'jack'}}

function addSession(username) {
    const sid = uuid();
    sessions[sid] = {username};
    return sid;
};

function getSessionUser(sid) {
    return sessions[sid]?.username;
};

function deleteSession(sid) {
    delete sessions[sid];
};

module.exports = {
    addSession,
    getSessionUser,
    deleteSession,
};