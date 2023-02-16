const userInfo = {}; //key -> user; value -> word

function addUser(username) {
    userInfo[username] = "";
}

const loginData = {
    userInfo,
    addUser
};

module.exports = loginData;