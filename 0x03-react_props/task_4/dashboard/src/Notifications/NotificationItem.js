import React from 'react';
import './Notifications.css';


const NotificationItem = (props) => {
  const type = props.type;
  const html = props.html;
  const value = props.value;
  let element;

  element = <li data-priority={type}>{value}</li>
  if (html) element = <li
    data-priority={type}
    dangerouslySetInnerHTML={{ __html: html }}
  ></li>

  return (
    element
  );
};

export default NotificationItem;
