import 'jsdom-global/register';
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';


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
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find('Login').length).toEqual(0);
    expect(wrapper.find('CourseList').length).toEqual(1);
  });

  it('Verify that when the keys control and h are pressed the logOut function, passed as a prop, is called and the alert function is called with the string Logging you out', () => {
    window.alert = jest.fn()
    const wrapper = mount(<App />);
    const logOut = jest.fn();
    wrapper.setProps({ logOut });
    const keysPress = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
    document.dispatchEvent(keysPress);
    expect(logOut).toHaveBeenCalledTimes(1);
    expect(window.alert).toHaveBeenCalledWith('Logging you out');
    jest.restoreAllMocks();
  });
});

