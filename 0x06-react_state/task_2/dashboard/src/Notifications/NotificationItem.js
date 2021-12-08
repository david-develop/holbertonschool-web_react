import React from 'react';
import propTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { type, html, value, markAsRead, id } = this.props;
    let element;
    let typeStyle = css(type === "urgent" ? styles.urgent : styles.default);

    element = <li className={typeStyle} data-priority={type} onClick={() => markAsRead(id)}>{value}</li>
    if (html) element = <li
      className={typeStyle}
      data-priority={type}
      dangerouslySetInnerHTML={html}
      onClick={() => markAsRead(id)}
    ></li>

    return (
      element
    );
  }
};

NotificationItem.propTypes = {
  html: propTypes.shape({
    __html: propTypes.string
  }),
  type: propTypes.string.isRequired,
  value: propTypes.string,
  markAsRead: propTypes.func,
  id: propTypes.number,
}

NotificationItem.defaultProps = {
  type: 'default'
}

const styles = StyleSheet.create({
  default: {
    color: "blue",
    '@media (max-width: 728px)': {
      listStyle: "none",
      borderBottom: "1px solid black",
      padding: "10px 8px",
      width: "100%",
    },
  },

  urgent: {
    color: "red",
    '@media (max-width: 728px)': {
      listStyle: "none",
      borderBottom: "1px solid black",
      padding: "10px 8px",
      width: "100%",
    },
  },
});

export default NotificationItem;
