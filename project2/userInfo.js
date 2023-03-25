const users = {}; // { "jack": { loginStatus: false }}

const messages = []; // [{ username: "jack", message: "hello" }, { username: "mary", message: "how are you" }]

const isValidUsername = (username) => {
    let isValid = true;
    isValid = isValid && username.trim();
    isValid = isValid && username.match(/^[A-Za-z0-9_]+$/);
    return isValid;
};

module.exports = {
    users,
    messages,
    isValidUsername,
};