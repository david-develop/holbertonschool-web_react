import 'jsdom-global/register';
import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {

  it('test that NotificationItem renders without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('verify that NotificationItem renders a list item', () => {
    const wrapper = shallow(<NotificationItem type='default' value='New course available' />);
    expect(wrapper.find('li').length).toEqual(1);
  });

  it('Verify that by passing dummy type and value props, it renders the correct html', () => {
    const wrapper = shallow(<NotificationItem type='default' value='New course available' />);
    expect(wrapper.props()['data-priority']).toEqual('default');
    // expect(wrapper.html()).toEqual('<li data-priority="default">New course available</li>');
  });

  it('Verify that by passing dummy type and value props, it renders the correct html', () => {
    const wrapper = shallow(<NotificationItem type='urgent' html={{ __html: 'test' }} />);
    expect(wrapper.props()['data-priority']).toEqual('urgent');
    // expect(wrapper.html()).toEqual('<li data-priority="urgent">test</li>');
  });

  it('when calling the function markAsRead on an instance of the component, the spy is being called with the right message', () => {
    const id = 8;

    const markAsRead = jest.fn();
    const wrapper = shallow(
      <NotificationItem type='default' value='test' id={id} markAsRead={markAsRead} />
    );

    const listItem = wrapper.find('li').first();
    listItem.simulate('click');
    expect(markAsRead).toHaveBeenCalledWith(id);
    jest.restoreAllMocks();
  });
});