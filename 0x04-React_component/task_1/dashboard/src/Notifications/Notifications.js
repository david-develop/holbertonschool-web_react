import React from 'react';
import closeIcon from '../assets/close-icon.png';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import propTypes from 'prop-types';
import NotificationItemShape from "./NotificationItemShape";

const Notifications = (props) => {
  const displayDrawer = props.displayDrawer;
  const listNotifications = props.listNotifications;
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
      {listNotifications.length === 0 && (
        <NotificationItem value="No new notification for now" />
      )}
      {listNotifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          type={notification.type}
          value={notification.value}
          html={notification.html}
        />
      ))}
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
  displayDrawer: false,
  listNotifications: [],
}


Notifications.propTypes = {
  displayDrawer: propTypes.bool,
  listNotifications: propTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
