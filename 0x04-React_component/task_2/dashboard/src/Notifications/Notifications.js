import React from 'react';
import closeIcon from '../assets/close-icon.png';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import propTypes from 'prop-types';
import NotificationItemShape from "./NotificationItemShape";

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const {displayDrawer, listNotifications } = this.props;

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
            id={notification.id}
            type={notification.type}
            value={notification.value}
            html={notification.html}
            markAsRead={this.markAsRead}
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
  }
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
