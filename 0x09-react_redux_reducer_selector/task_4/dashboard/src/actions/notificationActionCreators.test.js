import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';
import { markAsAread, setNotificationFilter } from './notificationActionCreators';

describe('Redux notificationActionCreators Test', () => {
  it('test for the markAsAread action. Calling the creator with 1 as an argument should return: { type: MARK_AS_READ, index: 1 }', () => {
    const result = markAsAread(1);

    expect(result).toEqual({
      type: MARK_AS_READ,
      index: 1
    });
  });
  it('Test setNotificationFilter action. Calling the creator with one of the filters from NotificationTypeFilters as an argument should return: { type: SET_TYPE_FILTER, filter: "DEFAULT" }', () => {
    const result = setNotificationFilter(NotificationTypeFilters.DEFAULT);

    expect(result).toEqual({
      type: SET_TYPE_FILTER,
      filter: 'DEFAULT'
    });
  });
});
