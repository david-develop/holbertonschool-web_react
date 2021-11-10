import React from 'react';
import './Login.css';

function Login() {
  return (
    <>
      <div className="App-body">
        <div className="container">
          <p>Login to access the full dashboard</p>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" />
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" />
          <button>OK</button>
        </div>
      </div>
    </>
  );
}

export default Login;
