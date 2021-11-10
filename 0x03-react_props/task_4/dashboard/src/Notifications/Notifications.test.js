import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications />', () => {
  it('test that Notifications renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('verify that Notifications renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    const element = wrapper.find('NotificationItem');
    expect(element.length).toEqual(3);
  });

  it('verify that the first NotificationItem element renders the right html', () => {
    const wrapper = shallow(<Notifications />);
    const element = wrapper.find('NotificationItem');
    const child1 = element.at(0);
    expect(child1.html()).toEqual('<li data-priority="urgent">New course available</li>');
  });

  it('verify that Notifications renders the correct text', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('p').contains('Here is the list of notifications')).toEqual(true);
  });
});