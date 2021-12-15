import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';
import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginRequest, loginSuccess, loginFailure } from './uiActionCreators';
import fetchMock from 'fetch-mock';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Redux uiActionCreator Test', () => {
  it('login action. Calling the creator with email and password should return { type: LOGIN, user: { email, password } }', () => {
    const email = 'test@test.com';
    const password = 'test';
    const result = login(email, password);

    expect(result).toEqual({ type: LOGIN, user: { email, password } });
  });
  it('logout action. Calling the creator should return { type: LOGOUT }', () => {
    const result = logout();

    expect(result).toEqual({ type: LOGOUT });
  });

  it('displayNotificationDrawer action. Calling the creator should return { type: DISPLAY_NOTIFICATION_DRAWER }', () => {
    const result = displayNotificationDrawer();

    expect(result).toEqual({ type: DISPLAY_NOTIFICATION_DRAWER });
  });

  it('hideNotificationDrawer action. Calling the creator should return { type: HIDE_NOTIFICATION_DRAWER }', () => {
    const result = hideNotificationDrawer();

    expect(result).toEqual({ type: HIDE_NOTIFICATION_DRAWER });
  });
});

describe('Async loginRequest action Test', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('Verify that if the API returns the right response, the store received two actions LOGIN and LOGING_SUCCESS', () => {
    const store = mockStore({});
    fetchMock.restore();
    const email = 'test@test.com';
    const password = 'test';
    const mockUser = {
      email,
      password,
    };

    fetchMock.get('http://localhost:8564/login-success.json', '{}');

    return store.dispatch(loginRequest(mockUser.email, mockUser.password))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(login(mockUser.email, mockUser.password));
        expect(actions[1]).toEqual(loginSuccess());
      });
  });

  it('Verify that if the API query fails, the store received two actions LOGIN and LOGIN_FAILURE', () => {
    const store = mockStore({});
    fetchMock.restore();
    const email = 'test@test.com';
    const password = 'test';
    const mockUser = {
      email,
      password,
    };

    fetchMock.mock('http://localhost:8564/login-success.json', 500);

    return store
      .dispatch(loginRequest(mockUser.email, mockUser.password))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(login(mockUser.email, mockUser.password));
        expect(actions[1]).toEqual(loginFailure());
      });
  });
});