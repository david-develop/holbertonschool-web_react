import React from 'react';
import { shallow } from 'enzyme';
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
    const wrapper = shallow(<App isLoggedIn={true}/>);
    expect(wrapper.find('Login').length).toEqual(0);
    expect(wrapper.find('CourseList').length).toEqual(1);
  });
});