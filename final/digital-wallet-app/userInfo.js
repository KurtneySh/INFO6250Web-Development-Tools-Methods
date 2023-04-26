const users = {}; // {jack: {BTC: 1.0, ETH: 25.0, USDT: 30}}

function isValidUsername(username) {
  let isValid = true;
  isValid = !!username && username.trim();
  isValid = isValid && username.match(/^[A-Za-z0-9_]+$/);
  return isValid;
}

function getUserData(username) {
  return users[username];
}

function addUserData(username, userData) {
  users[username] = userData;
}

module.exports = {
  isValidUsername,
  getUserData,
  addUserData,
};