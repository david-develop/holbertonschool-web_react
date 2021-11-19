import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import propTypes from "prop-types";

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
];

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const isLoggedIn = this.props.isLoggedIn;
    let element = <Login />;
    if (isLoggedIn === true) element = <CourseList listCourses={listCourses} />;
    return (
      <>
        <div className="root-notifications">
          <Notifications listNotifications={listNotifications} />
        </div>
        <div className="App">
          <Header />
          {element}
          <Footer />
        </div>
      </>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: propTypes.bool,
};

export default App;
