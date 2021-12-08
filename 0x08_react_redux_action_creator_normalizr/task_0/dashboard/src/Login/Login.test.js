import 'jsdom-global/register';
import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('<Login />', () => {
  it('test that Login renders without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('Verify that the components renders 3 input tags and 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input').length).toEqual(3);
    expect(wrapper.find('label').length).toEqual(2);
  });

  it('Verify that the input submit button is disabled by default', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input').at(2).prop('disabled')).toEqual(true);
  });

  it('Verify that after changing the value of the two inputs, the button is enabled', () => {
    const wrapper = shallow(<Login />);
    wrapper.find('input').at(0).simulate('change', { target: { value: 'test' } });
    wrapper.find('input').at(1).simulate('change', { target: { value: 'test' } });
    expect(wrapper.find('input').at(2).prop('disabled')).toEqual(false);
  });
});