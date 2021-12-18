import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';
import notificationReducer, { initialState } from './notificationReducer';
import { Map, fromJS } from "immutable";
import { notificationsNormalizer } from "../schema/notifications";

describe('suite for notificationReducer', () => {
  it('Test that the default state returns initialState', () => {
    const state = notificationReducer(undefined, {});

    expect(state).toEqual(Map(initialState));
  });

  it('Test that FETCH_NOTIFICATIONS_SUCCESS returns the data passed', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        {
          id: 1,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          type: "urgent",
          value: "New data available",
        },
      ],
    };

    const data = [
      {
        id: 1,
        type: "default",
        value: "New course available",
      },
      {
        id: 2,
        type: "urgent",
        value: "New resume available",
      },
      {
        id: 3,
        type: "urgent",
        value: "New data available",
      },
    ];

    const normalizedData = notificationsNormalizer(data);

    const expectedData = {
      filter: "DEFAULT",
      ...normalizedData,
    };
    expectedData.notifications[1].isRead = false;
    expectedData.notifications[2].isRead = false;
    expectedData.notifications[3].isRead = false;

    const state = notificationReducer(undefined, action);

    expect(state.toJS()).toEqual(expectedData);
  });

  it('Test that MARK_AS_READ returns the data passed', () => {
    const exampleAction = {
      type: MARK_AS_READ,
      index: 2
    };

    const initialStateExample = {
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available"
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available"
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available"
        }
      ]
    };

    initialStateExample.notifications = notificationsNormalizer(
      initialStateExample.notifications
    ).notifications;

    const data = [
      {
        id: 1,
        type: "default",
        value: "New course available",
      },
      {
        id: 2,
        type: "urgent",
        value: "New resume available",
      },
      {
        id: 3,
        type: "urgent",
        value: "New data available",
      },
    ];

    const normalizedData = notificationsNormalizer(data);

    const expectedState = {
      filter: "DEFAULT",
      ...normalizedData,
    };
    expectedState.notifications[1].isRead = false;
    expectedState.notifications[2].isRead = true;
    expectedState.notifications[3].isRead = false;

    const state = notificationReducer(fromJS(initialStateExample), exampleAction);

    expect(state.toJS()).toEqual(expectedState);
  });

  it('Test that SET_TYPE_FILTER returns the data passed', () => {
    const initialStateExample = {
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available"
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available"
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available"
        }
      ]
    };

    initialStateExample.notifications = notificationsNormalizer(
      initialStateExample.notifications
    ).notifications;

    const exampleAction = {
      type: SET_TYPE_FILTER,
      filter: "URGENT"
    };

    const data = [
      {
        id: 1,
        isRead: false,
        type: "default",
        value: "New course available",
      },
      {
        id: 2,
        type: "urgent",
        isRead: false,
        value: "New resume available",
      },
      {
        id: 3,
        type: "urgent",
        isRead: false,
        value: "New data available",
      },
    ];

    const normalizedData = notificationsNormalizer(data);

    const expectedState = {
      filter: "URGENT",
      ...normalizedData,
    };


    const state = notificationReducer(fromJS(initialStateExample), exampleAction);

    expect(state.toJS()).toEqual(expectedState);
  });
});