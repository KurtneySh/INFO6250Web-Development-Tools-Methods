import { useState, useEffect } from 'react';
import Account from './Account';
import Login from './Login';
import { fetchSession } from './services';

import './App.css';


function App() {
  const [userState, setUserState] = useState({
    username: '',
    isLoggedIn: false,
    error: ''
  });

  useEffect(
    () => {
      fetchSession()
      .then( response => {
        // use session data to set state
        setUserState({
          username: response.username,
          isLoggedIn: true,
          error: ''
        })
      })
      .catch( err => {
        // use error data to set state        
        setUserState({
          userData: {},
          isLoggedIn: false,
          error: ''
        });
      });
    },
    []
  );

  function onLogin(username) {
    setUserState({
      username,
      isLoggedIn: true,
      error: ''
    })

  }

  function onLogout() {
    setUserState({
      username: '',
      isLoggedIn: false,
      error: ''
    })
  }


  return (
    <div className="App">
      <h1>Digital Wallet - Your best asset management expert</h1>

      <div className='display-panel'>
        {
          userState.isLoggedIn ? 
            <Account 
              user={userState.username}
              setUserState={setUserState}
              onLogout={onLogout}
            /> : <Login
              setUserState={setUserState}
              onLogin={onLogin}
            />
        }

        <div className='error'>
          {userState.error}
        </div>
      </div>

      <footer>All rights reserved</footer>
    </div>
  );
}

export default App;
