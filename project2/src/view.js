const errorView = (error) => {
    if(error === 'required-username') {
        return `<div class="error-warning">Please enter a valid username.</div>`;
    }
    else if (error === 'auth-insufficient') {
        return `<div class="error-warning">Sorry, you do not have the authority to access.</div>`
    }
    else if (error === 'network-error') {
        return `<div class="error-warning network-error">There is something wrong with your connection to the server. <div>Please try again later.</div></div>`
    }
    else if (error === 'required-message') {
        return `<div class="error-warning">Please enter message.</div>`
    }
    else return "";
}


const longinView = (error) => {
    return `
    <div class="login-container">
        <div class='greeting'>Chat Space</div>
        <div class='greeting'>Please Login first</div>
        <div class="login">
            <input type="text" class="login-input" placeholder="Enter Username">
            <button class="login-button">Log in</button>
        </div>
        <div>${error ? errorView(error) : ""}</div>
    </div>
    `
}

const activeUserView = (users) => {
    const activeUsers = ['<div class="users-online">Users Online</div>'];
    for(const user in users) {
        activeUsers.push(`
        <div class=${users[user].isLoggedIn ? 'active-user' : 'non-active-user'}>
            <div class='online-mark'></div>
            <div>${user}</div>
        </div>`);
    }
    return activeUsers.join('');
}

const messagesView = (messages) => {
    return messages.map( message => (`
        <div class="message-container">
            <div class="message-username">${message.username}</div>
            <div class="message-words">${message.message}</div>
        </div>
    `)).join('');
}

const messageInputView = (error) => {
    return `
    <form class="message-input-form">
        <input type="text" class="message-input" placeholder="Enter message here. Press Enter to send.">
    </form>
    <div>${error ? errorView(error) : ""}</div>
    `
}

const chatView = (state) => {
    return `
    <div class="chat-view">
        <div class="user-info">
            <div>${state.username}</div>
            <button class="logout-button">Logout</button>
        </div>
        <div class="chat-room">
            <div class="active-users">
                ${activeUserView(state.users)}
            </div>
            <div class="messages">${messagesView(state.messages)}</div>
            <div id="message-input-container">${messageInputView(state.error)}</div>
        </div>
    </div>
    `
}

const render = (state) => {
    if(state.error === 'network-error') return errorView(state.error);
    if(state.hasValidSession) {
        return `${chatView(state)}`;
    } else {
        return `${longinView(state.error)}`;
    }
}

export { messagesView, render, messageInputView, activeUserView };