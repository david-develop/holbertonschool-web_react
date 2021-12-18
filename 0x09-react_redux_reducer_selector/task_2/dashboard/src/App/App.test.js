import 'jsdom-global/register';
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import AppContext, { user, logOut } from "../App/AppContext";
import { getLatestNotification } from '../utils/utils';


describe('<App />', () => {
  it('test that App renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('Verify that check that CourseList is not displayed', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('CourseList').length).toEqual(0);
  });

  it('Verify that when isLoggedIn is true verify that the Login component is not included', () => {
    const user = {
      isLoggedIn: true,
      email: 'test@test.com',
      password: 'test'
    };
    const wrapper = shallow(<App />);
    wrapper.setState({ user });
    expect(wrapper.find('Login').length).toEqual(0);
    expect(wrapper.find('CourseList').length).toEqual(1);
  });

  it('Verify that when the keys control and h are pressed the logOut function, passed as a prop, is called and the alert function is called with the string Logging you out', () => {
    window.alert = jest.fn()
    const wrapper = mount(<App />);
    const logOut = jest.fn();
    wrapper.setState({ logOut });
    const keysPress = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
    document.dispatchEvent(keysPress);
    expect(logOut).toHaveBeenCalledTimes(1);
    expect(window.alert).toHaveBeenCalledWith('Logging you out');
    jest.restoreAllMocks();
  });

  it('Verify that the default state for displayDrawer is false. Verify that after calling handleDisplayDrawer, the state should now be true', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('displayDrawer')).toEqual(false);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toEqual(true);
  });

  it('Add a test to verify that after calling handleHideDrawer, the state is updated to be false', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ displayDrawer: true });
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state('displayDrawer')).toEqual(false);
  });

  it('test to verify that the logIn function updates the state correctly', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );

    const userN = {
      isLoggedIn: true,
      email: 'test@test.com',
      password: 'test'
    };

    const instance = wrapper.instance();

    expect(wrapper.state().user).toEqual(user);

    instance.logIn(userN.email, userN.password);

    expect(wrapper.state().user).toEqual(userN);
  });

  it('test to verify that the logOut function updates the state correctly', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );

    const userN = {
      isLoggedIn: true,
      email: 'test@test.com',
      password: 'test'
    };

    const instance = wrapper.instance();

    expect(wrapper.state().user).toEqual(user);

    instance.logIn(userN.email, userN.password);

    expect(wrapper.state().user).toEqual(userN);

    instance.logOut();

    expect(wrapper.state().user).toEqual(user);
  });

  it("Verify that markNotificationAsRead change the state", () => {
    const listNotificationsInit = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
    ];

    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );

    const instance = wrapper.instance();

    expect(wrapper.state().listNotifications).toEqual(
      listNotificationsInit
    );

    instance.markNotificationAsRead(3);

    expect(wrapper.state().listNotifications).toEqual(
      listNotificationsInit.slice(0, 2)
    );

    instance.markNotificationAsRead(1);

    expect(wrapper.state().listNotifications.length).toEqual(1);
  });
});

