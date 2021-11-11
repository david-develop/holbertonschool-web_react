import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

const App = (props) => {
  const isLoggedIn = props.isLoggedIn;
  let element = <Login />;
  if (isLoggedIn === true) element = <CourseList />;

  return (
    <>
      <div className="root-notifications">
        <Notifications />
      </div>
      <div className="App">
        <Header />
        {element}
        <Footer />
      </div>
    </>
  );
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
