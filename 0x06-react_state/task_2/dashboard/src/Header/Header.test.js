import 'jsdom-global/register';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';
import AppContext, { user, logOut } from "../App/AppContext";

describe('<Header />', () => {
  it('test that Header renders without crashing', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>);
    expect(wrapper.exists()).toEqual(true);
  });

  it('Verify that the components render img and h1 tags', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>);
    wrapper.update();
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('h1').length).toEqual(1);
  });

  it('test that mounts the Header component with a default context value. Verify that the logoutSection is not created', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>);
    wrapper.update();
    expect(wrapper.find('#logoutSection').length).toEqual(0);
  });

  it('test that mounts the Header component with a user defined (isLoggedIn is true and an email is set). Verify that the logoutSection is created', () => {
    const user = {
      isLoggedIn: true,
      email: 'tes@test.com',
      password: 'test'
    };
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>);
    wrapper.update();
    expect(wrapper.find('#logoutSection').length).toEqual(1);
  });

  it('test that mounts the Header component with a user defined (isLoggedIn is true and an email is set) and the logOut is linked to a spy. Verify that clicking on the link is calling the spy', () => {
    const user = {
      isLoggedIn: true,
      email: 'test@test.com',
      password: 'test'
    };
    const logOut = jest.fn();
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>);
    wrapper.update();
    wrapper.find('#logoutSection').find('span').simulate('click');
    expect(logOut).toHaveBeenCalled();
  });
});