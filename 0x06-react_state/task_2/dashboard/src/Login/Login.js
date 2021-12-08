import React from 'react';
import './Login.css';
import { StyleSheet, css } from 'aphrodite';
import propTypes from 'prop-types';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.logIn(email, password);
  };

  handleChangeEmail(e) {
    this.setState({ email: e.target.value });
    if (this.state.email !== '' && this.state.password !== '') this.setState({ enableSubmit: true });
    else this.setState({ enableSubmit: false });
  };

  handleChangePassword(e) {
    this.setState({ password: e.target.value });
    if (this.state.email !== '' && this.state.password !== '') this.setState({ enableSubmit: true });
    else this.setState({ enableSubmit: false });
  };

  render() {
    return (
      <form className={css(styles.login)} onSubmit={this.handleLoginSubmit}>
        <p>Login to access the full dashboard</p>
        <div className={css(styles.formElement)}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" className={css(styles.loginInput)} value={this.state.email} onChange={this.handleChangeEmail} />
        </div>
        <div className={css(styles.formElement)}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" className={css(styles.loginInput)} value={this.state.password} onChange={this.handleChangePassword} />
        </div>
        <input type="submit" value="OK" className={css(styles.loginButton)} disabled={!this.state.enableSubmit} />
      </form >
    );
  }
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
