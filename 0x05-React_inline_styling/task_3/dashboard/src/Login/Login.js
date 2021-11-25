import React from 'react';
import './Login.css';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <div className={css(styles.login)}>
      <p>Login to access the full dashboard</p>
      <div className={css(styles.formElement)}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" className={css(styles.loginInput)} />
      </div>
      <div className={css(styles.formElement)}>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" className={css(styles.loginInput)} />
      </div>
      <button className={css(styles.loginButton)}>
        OK
      </button>
    </div>
  );
}

const styles = StyleSheet.create({
  login: {
    margin: "2rem",
    flexGrow: 1,
    '@media (max-width: 728px)': {
      margin: "1rem",
      display: "flex",
      flexDirection: "column",
    },
  },

  formElement: {
    display: "inline-block",
    verticalAlign: "middle",
    marginBottom: "0.5rem",
  },

  loginInput: {
    marginLeft: ".5rem",
    marginRight: "2rem",
    '@media (max-width: 728px)': {
      marginLeft: 0,
      marginRight: 0,
    },
  },

  loginButton: {
    '@media (max-width: 728px)': {
      width: "35px",
      textAlign: "center",
    },
  },
});

export default Login;
