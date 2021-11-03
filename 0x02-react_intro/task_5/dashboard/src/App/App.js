import React from 'react';
import logo from '../assets/holberton_logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
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
      <footer>
        <div className="App-footer">
          <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
