import React from 'react';
import './Notifications.css';
import propTypes from 'prop-types';

class NotificationItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this._reactInternalFiber.key);
    const { type, html, value, markAsRead, id } = this.props;
    let element;

    element = <li data-priority={type} onClick={() => markAsRead(id)}>{value}</li>
    if (html) element = <li
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

export default NotificationItem;
