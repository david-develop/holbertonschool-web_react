import React from 'react';
import logo from '../assets/holberton_logo.jpg';
import { StyleSheet, css } from 'aphrodite';

function Header() {
  return (
    <div className={css(styles.header)}>
      <img src={logo} className={css(styles.headerImg)} alt="logo" />
      <h1>School dashboard</h1>
    </div>
  );
}

const cssVars = {
  mainColor: "#e01d3f",
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    color: cssVars.mainColor,
    fontSize: "20px",
  },

  headerImg: {
    width: "200px",
  },
});

export default Header;
