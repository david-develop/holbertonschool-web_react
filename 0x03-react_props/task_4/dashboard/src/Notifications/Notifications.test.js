import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications />', () => {
  it('test that Notifications renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('verify that Notifications renders three list items', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    const element = wrapper.find('NotificationItem');
    expect(element.length).toEqual(3);
  });

  it('verify that the first NotificationItem element renders the right html', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    const element = wrapper.find('NotificationItem');
    const child1 = element.at(0);
    expect(child1.html()).toEqual('<li data-priority="urgent">New course available</li>');
  });

  it('verify that Notifications renders the correct text', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    expect(wrapper.find('p').contains('Here is the list of notifications')).toEqual(true);
  });

  it('verify that the menu item is being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    const element = wrapper.find('.menuItem');
    expect(element.length).toEqual(1);
  });

  it('verify that the div.Notifications is not being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    const element = wrapper.find('.Notifications');
    expect(element.length).toEqual(0);
  });

  it('verify that the div.Notifications is not being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    const element = wrapper.find('.menuItem');
    expect(element.length).toEqual(1);
  });

  it('verify that the div.Notifications is not being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    const element = wrapper.find('.Notifications');
    expect(element.length).toEqual(1);
  });
});