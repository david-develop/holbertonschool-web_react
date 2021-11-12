import React from 'react';
import closeIcon from '../assets/close-icon.png';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';


const Notifications = (props) => {
  const displayDrawer = props.displayDrawer;
  const msg = getLatestNotification();
  const element = <div className="Notifications">
    <button style={{
      background: "transparent",
      border: "none",
      position: "absolute",
      right: 20,
    }}
      aria-label="Close"
      onClick={() => console.log('Close button has been clicked')}>
      <img src={closeIcon} alt="close-icon" width="8px" />
    </button>
    <p>Here is the list of notifications</p>
    <ul>
      <NotificationItem type="urgent" value="New course available" />
      <NotificationItem type="urgent" value="New resume available" />
      <NotificationItem type="urgent" html={{__html: msg}} />
    </ul>
  </div>;
  return (
    <>
      <div className="menuItem">
        Your notifications
      </div>
      {displayDrawer === true && element}
    </>
  );
};

Notifications.defaultProps = {
  displayDrawer: false
}

export default Notifications;
