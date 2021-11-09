import React from 'react';
import closeIcon from '../assets/close-icon.png';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';


const Notifications = () => {
  return (
    <div className="Notifications">
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
        <NotificationItem type="urgent" html={getLatestNotification()} />
      </ul>
    </div>
  );
};

export default Notifications;
