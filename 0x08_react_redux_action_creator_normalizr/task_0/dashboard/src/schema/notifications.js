import * as notifications from '../../notifications.json';

export const getAllNotificationsByUser = (userId) => {
  return notifications.default
    .filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context);
};
