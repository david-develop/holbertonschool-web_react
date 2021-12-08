import React from 'react';
import { shallow } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

describe('WithLogging HOC component', () => {
  it('Make sure console.log was called on mount and on unmount with Component when the wrapped element is pure html', () => {
    const spy = jest.spyOn(console, 'log');
    const Component = () => <div>Hello World</div>;
    const WrappedComponent = WithLogging(Component);
    const wrapper = shallow(<WrappedComponent />);
    expect(spy).toHaveBeenCalledWith('Component Component is mounted');
    wrapper.unmount();
    expect(spy).toHaveBeenCalledWith('Component Component is going to unmount');
    expect(spy).toHaveBeenCalledTimes(2);
    spy.mockRestore();
  });

  it('make sure console.log was called on mount and on unmount with the name of the component when the wrapped element is the Login component', () => {
    const spy = jest.spyOn(console, 'log');
    const WrappedComponent = WithLogging(Login);
    const wrapper = shallow(<WrappedComponent />);
    expect(spy).toHaveBeenCalledWith('Component Login is mounted');
    wrapper.unmount();
    expect(spy).toHaveBeenCalledWith('Component Login is going to unmount');
    expect(spy).toHaveBeenCalledTimes(2);
    spy.mockRestore();
  });
});
