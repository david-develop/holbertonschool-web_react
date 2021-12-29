import { Map, fromJS } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';
import notificationReducer, { initialState } from '../reducers/notificationReducer';
import { notificationsNormalizer } from '../schema/notifications';

describe('Selectors tests', function () {
  it('test filterTypeSelected return correct filter', function () {
    const state = notificationReducer(undefined, {});
    const selected = filterTypeSelected(state);

    expect(selected).toEqual(initialState.filter);
  });

  it('test getNotifications returns correct data', function () {
    const initialStateExample = {
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available',
        },
        {
          id: 2,
          isRead: false,
          type: 'urgent',
          value: 'New resume available',
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available',
        },
      ],
    };

    initialStateExample.notifications = notificationsNormalizer(
      initialStateExample.notifications
    ).notifications;

    const state = notificationReducer(fromJS(initialStateExample), {});

    const selected = getNotifications(state);

    expect(state instanceof Map).toEqual(true);
    expect(selected.toJS()).toEqual(
      notificationsNormalizer(initialStateExample.notifications).notifications
    );
  });
  it('test getUnreadNotifications return the correct data', function () {
    const initialStateExample = {
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available',
        },
        {
          id: 2,
          isRead: false,
          type: 'urgent',
          value: 'New resume available',
        },
        {
          id: 3,
          isRead: true,
          type: 'urgent',
          value: 'New data available',
        },
      ],
    };

    const expectedResult = [
      {
        id: 3,
        isRead: true,
        type: 'urgent',
        value: 'New data available',
      },
    ];

    initialStateExample.notifications = notificationsNormalizer(
      initialStateExample.notifications
    ).notifications;

    const state = notificationReducer(fromJS(initialStateExample), {});

    const selected = getUnreadNotifications(state);

    expect(selected.toJS()).toEqual(
      notificationsNormalizer(expectedResult).notifications
    );
  });
});