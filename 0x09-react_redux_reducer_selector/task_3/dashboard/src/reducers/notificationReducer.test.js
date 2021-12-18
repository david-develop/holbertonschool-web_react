import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';
import notificationReducer from './notificationReducer';

describe('suite for notificationReducer', () => {
  it('Test that the default state returns initialState', () => {
    const state = notificationReducer(undefined, {});

    expect(state).toEqual({
      notifications: [],
      filter: NotificationTypeFilters.DEFAULT,
    });
  });

  it('Test that FETCH_NOTIFICATIONS_SUCCESS returns the data passed', () => {
    const exampleAction = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        {
          id: 1,
          type: "default",
          value: "New course available"
        },
        {
          id: 2,
          type: "urgent",
          value: "New resume available"
        },
        {
          id: 3,
          type: "urgent",
          value: "New data available"
        }
      ]
    };

    const expectedState = {
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

    const state = notificationReducer(undefined, exampleAction);

    expect(state).toEqual(expectedState);
  });

  it('Test that MARK_AS_READ returns the data passed', () => {
    const exampleAction = {
      type: MARK_AS_READ,
      index: 2
    };

    const expectedState = {
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
          isRead: true,
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

    const state = notificationReducer(initialStateExample, exampleAction);

    expect(state).toEqual(expectedState);
  });

  it('Test that SET_TYPE_FILTER returns the data passed', () => {
    const exampleAction = {
      type: SET_TYPE_FILTER,
      filter: "URGENT"
    };

    const expectedState = {
      filter: "URGENT",
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

    const state = notificationReducer(initialStateExample, exampleAction);

    expect(state).toEqual(expectedState);
  });
});