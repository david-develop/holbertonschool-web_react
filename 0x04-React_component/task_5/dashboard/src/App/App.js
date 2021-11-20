import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import propTypes from "prop-types";
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';

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
    let element = <BodySectionWithMarginBottom title="Log in to continue">
      <Login />
    </BodySectionWithMarginBottom>;
    if (isLoggedIn === true) {
      element = <BodySectionWithMarginBottom title="Course list">
        <CourseList listCourses={listCourses} />
      </BodySectionWithMarginBottom>
    };
    return (
      <>
        <div className="root-notifications">
          <Notifications listNotifications={listNotifications} />
        </div>
        <div className="App">
          <Header />
          {element}
          <BodySection title="News from the School">
            <p>Loren ispsum randome text, Loren ispsum randome text, Loren ispsum randome text</p>
          </BodySection>
          <Footer />
        </div>
      </>
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

export default App;
