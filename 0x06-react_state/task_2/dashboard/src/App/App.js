import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import propTypes from "prop-types";
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyCombination = this.handleKeyCombination.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.state = {
      displayDrawer: false
    };
  }

  handleDisplayDrawer() {
    this.setState({
      displayDrawer: true
    });
  }

  handleHideDrawer() {
    this.setState({
      displayDrawer: false
    });
  }

  handleKeyCombination(e) {
    if (e.key === 'h' && e.ctrlKey) {
      window.alert('Logging you out');
      this.props.logOut();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyCombination);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyCombination);
  }

  render() {
    const { isLoggedIn, logOut } = this.props;
    return (
      <div className={css(styles.general)}>
        <Notifications listNotifications={listNotifications} displayDrawer={this.state.displayDrawer} handleDisplayDrawer={this.handleDisplayDrawer} handleHideDrawer={this.handleHideDrawer}/>
        <div className={css(styles.app)}>
          <Header />
        </div>
        <div className={css(styles.body)}>
          {!isLoggedIn ? (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          )}
        </div>
        <div className={css(styles.bodyFeed)}>
          <BodySection title="News from the School">
            <p>Some Random Text</p>
          </BodySection>
        </div>

        <div className={css(styles.footer)}>
          <Footer />
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => { },
};

App.propTypes = {
  isLoggedIn: propTypes.bool,
  logOut: propTypes.func,
};

const cssVars = {
  mainColor: "#e01d3f",
};

const styles = StyleSheet.create({
  general: {
    fontFamily: "Roboto, sans-serif",
    margin: "0",
    padding: "0",
  },

  app: {
    borderBottom: `3px solid ${cssVars.mainColor}`,
  },

  body: {
    display: "flex",
    justifyContent: "center",
    paddingLeft: "2rem",
    paddingRight: "2rem",
  },

  bodyFeed: {
    paddingLeft: "2rem",
    paddingRight: "2rem",
  },

  footer: {
    borderTop: `3px solid ${cssVars.mainColor}`,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    position: "fixed",
    bottom: 0,
    fontStyle: "italic",
  },
});

export default App;
