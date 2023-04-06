import { useState } from "react";

function LoginPage({ setIsLoggedIn, setUsername }) {
    const [error, setError] = useState('');
    const [inputValue, setInputValue] = useState('');

    function isValidUsername(username) {
        if (username === 'dog') {
            return false;
        }

        let isValid = true;
        isValid = isValid && username.trim();
        isValid = isValid && username.match(/^[A-Za-z0-9_]+$/);
        return isValid;
    }

    function onSubmitHandler() {
        if (isValidUsername(inputValue)) {
            setIsLoggedIn(true);
            setUsername(inputValue);
            setError('');
        } else {
            setIsLoggedIn(false)
            if (inputValue === 'dog') {
                setError('Error: Dog is not a valid user');
            } else {
                setError('Error: The username is not made up of valid characters')
            }
        }
    }

    return (
      <div className="login-page">
        <h1>Please Login</h1>
        <form onSubmit={(e) => {
            e.preventDefault();

            onSubmitHandler();
            setInputValue('')
        }}>
            <input
                value={inputValue}
                onInput={(e) => setInputValue(e.target.value)}
                placeholder="Please enter your username"
            />
            <button className="login-button">Login</button>
        </form>
        <div className="result error">{error}</div>
      </div>
    );
}
export default LoginPage;