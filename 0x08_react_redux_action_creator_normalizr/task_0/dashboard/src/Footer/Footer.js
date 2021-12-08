import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import AppContext from "../App/AppContext";

function Footer() {
  return (
    <AppContext.Consumer>
      {(context) => {
        return (
          <footer>
            <div className="App-footer">
              <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
              {context.user.isLoggedIn && <p><a href="#">Contact us</a></p>}
            </div>
          </footer>)
      }}
    </AppContext.Consumer>
  );
}

export default Footer;
