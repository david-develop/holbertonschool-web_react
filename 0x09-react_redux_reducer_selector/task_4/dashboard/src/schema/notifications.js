import * as notifications from '../../notifications.json';
import { normalize, schema } from 'normalizr';


const user = new schema.Entity('users');
const message = new schema.Entity(
  'messages',
  {},
  {
    idAttribute: 'guid',
  }
);

const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

export const normalizedData = normalize(notifications.default, [notification]);

export const getAllNotificationsByUser = (userId) => {
  const notificationsData = normalizedData.entities.notifications;
  const messages = normalizedData.entities.messages;

  const result = [];
  for (let notificationId in notificationsData) {
    if (notificationsData[notificationId].author === userId) {
      result.push(messages[notificationsData[notificationId].context]);
    }
  }
  return result;
};

export const notificationsNormalizer = (data) => {
  const normalizedData = normalize(data, [notification]);
  return normalizedData.entities;
};
