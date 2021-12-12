import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';

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