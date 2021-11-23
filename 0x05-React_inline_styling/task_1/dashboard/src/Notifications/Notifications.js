import React from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import propTypes from 'prop-types';
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from 'aphrodite';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const {displayDrawer, listNotifications } = this.props;

    const element = <div className={css(styles.notifications)} id="Notifications">
      <button style={{
        background: "transparent",
        border: "none",
        position: "absolute",
        right: 20,
      }}
        aria-label="Close"
        onClick={() => console.log('Close button has been clicked')}>
        <img src={closeIcon} alt="close-icon" className={css(styles.notificationsButtonImage)} />
      </button>
      <p className={css(styles.notificationsP)}>Here is the list of notifications</p>
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
        <div className={css(styles.menuItem)} id="menuItem">
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

const cssVars = {
  mainColor: "#e01d3f",
};

const styles = StyleSheet.create({
  menuItem: {
    textAlign: "right",
  },

  notifications: {
    float: "right",
    border: `3px dashed ${cssVars.mainColor}`,
    padding: "10px",
    marginBottom: "20px",
  },

  notificationsButtonImage: {
    width: "10px",
  },

  notificationsP: {
    margin: 0,
    marginTop: "15px",
  },
});

export default Notifications;
