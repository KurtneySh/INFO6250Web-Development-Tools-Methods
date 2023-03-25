import { fetchSession, fetchLogin, logout, fetchMessages, postMessage } from "./services";
import state from "./state";
import { messagesView, render, messageInputView, activeUserView } from "./view";

const app = document.querySelector("#app");

app.addEventListener('click', (e) => {

    // login
    if(e.target.classList.contains('login-button')) {
        const username = document.querySelector('.login-input').value;
        fetchLogin(username)
        .then( response => {
            fetchMessages()
            .then( response => {
                state.updateValidSession(response);
                app.innerHTML = render(state);

                // keep messages element scroll to bottom
                const messagesEl = document.querySelector('.messages');
                messagesEl.scrollTop = messagesEl.scrollHeight;
            })
        })
        .catch( error => {
            state.updateError(error);
            app.innerHTML = render(state);
        })
    }

    // logout
    if(e.target.classList.contains('logout-button')) {
        logout()
        .then(response => {
            state.deleteValidSession();
            app.innerHTML = render(state);
        })
        .catch( error => {
            state.updateError(error);
            app.innerHTML = render(state);
        })
    }
})


// send new message
app.addEventListener('submit', (e) => {
    e.preventDefault();

    const messageInputEl = document.querySelector('#message-input-container');
    const messageEl = document.querySelector('.message-input');
    const message = messageEl.value;

    postMessage(message)
    .then( response => {
        state.updateMessages(response);
        const messagesEl = document.querySelector('.messages');
        messageEl.value = '';
        messagesEl.innerHTML = messagesView(state.messages);

        // keep messages element scroll to bottom & empty message input
        messagesEl.scrollTop = messagesEl.scrollHeight;
        messageInputEl.innerHTML = messageInputView(state.error);
    })
    .catch( error => {
        state.updateError(error);
        if(state.error === 'network-error') app.innerHTML = render(state);
        else messageInputEl.innerHTML = messageInputView(state.error);
    })
})


// runs on load
fetchSession()
.then( response => {
    fetchMessages()
    .then( response => {
        state.updateValidSession(response);
        app.innerHTML = render(state);

        // keep messages element scroll to bottom
        const messagesEl = document.querySelector('.messages');
        if(messagesEl) messagesEl.scrollTop = messagesEl.scrollHeight;

        // poll
        pollChats();
    })
})
.catch( error => {
    state.deleteValidSession();
    app.innerHTML = render(state);
})

function refreshChat() {
    fetchMessages()
    .then( response => {
        state.updateValidSession(response);
        const activeUsersEl = document.querySelector('.active-users');
        activeUsersEl.innerHTML = activeUserView(state.users);
        const messagesEl = document.querySelector('.messages');
        messagesEl.innerHTML = messagesView(state.messages);
        messagesEl.scrollTop = messagesEl.scrollHeight;
    })
    .catch( error => {
        state.deleteValidSession();
    })
}

function pollChats() {
    refreshChat()
    setTimeout(pollChats, 5000)
}