const state = {
    hasValidSession: false,
    username: '',
    users: {},
    messages: [],
    error: '',
    updateValidSession(response) {
        this.hasValidSession = true;
        this.username = response.username;
        this.users = response.users;
        this.messages = response.messages;
        this.error = '';
    },
    deleteValidSession() {
        this.hasValidSession = false;
        this.username = '';
        this.users = {};
        this.messages = [];
        this.error = '';
    },
    updateMessages(response) {
        this.messages = response.messages;
        this.error = '';
    },
    updateError(error) {
        this.error = error.error;
    }
}

export default state;