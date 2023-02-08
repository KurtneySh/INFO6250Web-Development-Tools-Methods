const chatWeb = {
  chatPage: function(chat) {
    return `
      <!doctype html>
      <html>
        <head>
          <title>Chat Room</title>
          <link rel="stylesheet" href="chat.css">
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;900&display=swap" rel="stylesheet">
        </head>
        <body>
          <div id="chat-app">
              ${chatWeb.getUserList(chat)}
              ${chatWeb.getMessageList(chat)}
              ${chatWeb.getOutgoing(chat)}
          </div>
        </body>
      </html>
  `;
  },

  getMessageList: function(chat) {
    return `<ol class="messages">` +
      Object.values(chat.messages).map( message => `
        <li>
          <div class="chat-box">
            <span class="sender">${message.sender}</span>
            <span class="message">${message.text}</span>
          </div>
        </li>
      `).join('') +
      `</ol>`;
  },
  getUserList: function(chat) {
    return `<ul class="users">` +
    Object.values(chat.users).map( user => `
      <li>
        <div class="user">
          <span class="username">${user}</span>
        </div>
      </li>
    `).join('') +
    `</ul>`;
  },
  getOutgoing: function() {
    return  `
    <form class="outgoing" action="/chat" method="POST">
      <input name="text" placeholder="Enter message to send">
      <input name="username" type="hidden">
      <button type="submit">send</button>
    </form>
    `
  },
};
module.exports = chatWeb;
