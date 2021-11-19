import React from 'react';
import './Notifications.css';
import propTypes from 'prop-types';

const NotificationItem = (props) => {
  const type = props.type;
  const html = props.html;
  const value = props.value;
  let element;

  element = <li data-priority={type}>{value}</li>
  if (html) element = <li
    data-priority={type}
    dangerouslySetInnerHTML={html}
  ></li>

  return (
    element
  );
};

NotificationItem.propTypes = {
  html: propTypes.shape({
    __html: propTypes.string
  }),
  type: propTypes.string.isRequired,
  value: propTypes.string
}

NotificationItem.defaultProps = {
  type: 'default'
}

export default NotificationItem;
