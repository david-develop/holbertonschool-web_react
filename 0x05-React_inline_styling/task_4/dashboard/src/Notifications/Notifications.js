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
    const { displayDrawer, listNotifications } = this.props;

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
      <ul className={css(styles.ulSmallDevice)}>
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

const opacityKeyframes = {
  from: {
    opacity: 0.5,
  },
  to: {
    opacity: 1,
  },
};

const translateYKeyframes = {
  "0%": {
    transform: "translateY(0)",
  },
  "50%": {
    transform: "translateY(-5px)",
  },
  "75%": {
    transform: "translateY(5px)",
  },
  "100%": {
    transform: "translateY(0)",
  },
};

const borderKeyframes = {
  "0%": {
    border: `3px dashed deepSkyBlue`,
  },
  "100%": {
    border: `3px dashed ${cssVars.mainColor}`,
  },
};


const styles = StyleSheet.create({
  menuItem: {
    textAlign: "right",
    ":hover": {
      cursor: "pointer",
      animationName: [opacityKeyframes, translateYKeyframes],
      animationDuration: "1s, 0.5s",
      animationIterationCount: 3,
    },
  },

  notifications: {
    float: "right",
    border: `3px dashed ${cssVars.mainColor}`,
    padding: "10px",
    marginBottom: "20px",
    animationName: [borderKeyframes],
    ":hover": {
      border: `3px dashed deepSkyBlue`,
    },
    '@media (max-width: 728px)': {
      position: "fixed",
      bottom: 0,
      right: 0,
      top: 0,
      left: 0,
      overflow: "auto",
      width: "100%",
      height: "100%",
      zIndex: 5,
      background: "rgba(255, 255, 255)",
      padding: 0,
      fontSize: "20px",
      border: "none",
    },
  },

  ulSmallDevice: {
    '@media (max-width: 728px)': {
      padding: "0",
      margin: "0",
    },
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
