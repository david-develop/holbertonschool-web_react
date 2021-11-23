import 'jsdom-global/register';
import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';

describe('<Notifications />', () => {
  let listNotifications;
  let latestNotification;

  it('test that Notifications renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('verify that Notifications renders none list items', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const element = wrapper.find('NotificationItem');
    expect(element.length).toEqual(1);
  });

  it('verify that the first NotificationItem element renders the right html', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const element = wrapper.find('NotificationItem');
    const child1 = element.at(0);
    expect(child1.html()).toEqual('<li data-priority="default">No new notification for now</li>');
  });

  it('verify that Notifications renders the correct text', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('p').contains('Here is the list of notifications')).toEqual(true);
  });

  it('verify that the menu item is being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    const element = wrapper.find('#menuItem');
    expect(element.length).toEqual(1);
  });

  it('verify that the div#Notifications is not being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    const element = wrapper.find('#Notifications');
    expect(element.length).toEqual(0);
  });

  it('verify that the div#Notifications is not being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const element = wrapper.find('#menuItem');
    expect(element.length).toEqual(1);
  });

  it('verify that the div#Notifications is not being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const element = wrapper.find('#Notifications');
    expect(element.length).toEqual(1);
  });

  describe('Notifications with listNotifications', () => {
    beforeEach(() => {
      latestNotification = getLatestNotification();
      listNotifications = [
        { id: 1, type: "default", value: 'New course available' },
        { id: 2, type: "urgent", value: 'New resume available' },
        { id: 3, type: "urgent", html: { __html: latestNotification } },
      ];
    });

    it('Notifications renders Notification Items and items have correct html', () => {
      const wrapper = shallow(
        <Notifications displayDrawer listNotifications={listNotifications} />
      );
      expect(wrapper.exists());
      wrapper.update();
      const listItems = wrapper.find('NotificationItem');
      expect(listItems).toBeDefined();
      expect(listItems).toHaveLength(3);
      expect(listItems.at(0).html()).toEqual(
        '<li data-priority="default">New course available</li>'
      );
      expect(listItems.at(1).html()).toEqual(
        '<li data-priority="urgent">New resume available</li>'
      );
      expect(listItems.at(2).html()).toEqual(
        `<li data-priority="urgent">${latestNotification}</li>`
      );
    });
  });

  describe('Notifications without listNotifications or empty listNotifications', () => {
    beforeEach(() => {
      listNotifications = [];
    });

    it('Notifications renders Notification Item correct with empty listNotifications', () => {
      const wrapper = shallow(
        <Notifications displayDrawer listNotifications={listNotifications} />
      );
      expect(wrapper.exists());
      wrapper.update();
      const listItems = wrapper.find('NotificationItem');
      expect(listItems).toHaveLength(1);
      expect(listItems.html()).toEqual(
        '<li data-priority="default">No new notification for now</li>'
      );
    });

    it('Notifications renders Notification Item correct without listNotifications', () => {
      const wrapper = shallow(<Notifications displayDrawer />);
      wrapper.update();
      const listItems = wrapper.find('NotificationItem');
      expect(listItems).toHaveLength(1);
      expect(listItems.html()).toEqual(
        '<li data-priority="default">No new notification for now</li>'
      );
    });
  });

  it('when calling the function markAsRead on an instance of the component, the spy is being called with the right message', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    console.log = jest.fn();
    const instance = wrapper.instance();

    const id = 3;
    instance.markAsRead(id);

    expect(console.log).toHaveBeenCalledWith(`Notification ${id} has been marked as read`);
    jest.restoreAllMocks();
  });

  describe('verify shouldComponentUpdate optimization', () => {
    let listNotificationsNext;
    beforeEach(() => {
      latestNotification = getLatestNotification();
      listNotifications = [
        { id: 1, type: "default", value: 'New course available' },
        { id: 2, type: "urgent", value: 'New resume available' },
        { id: 3, type: "urgent", html: { __html: latestNotification } },
      ];
      listNotificationsNext = [
        { id: 1, type: "default", value: 'New course available' },
        { id: 2, type: "urgent", value: 'New resume available' },
        { id: 3, type: "urgent", html: { __html: latestNotification } },
        { id: 4, type: "urgent", html: { __html: `${latestNotification} x2` } },
        { id: 5, type: "urgent", html: { __html: `${latestNotification} x3` } },
      ];
    });

    it('verify that when updating the props of the component with the same list, the component doesn’t rerender', () => {
      const wrapper = shallow(
        <Notifications displayDrawer listNotifications={listNotifications} />
      );
      const shouldComponentUpdate = jest.spyOn(
        Notifications.prototype,
        'shouldComponentUpdate'
      );
      wrapper.setProps({ listNotifications });
      expect(shouldComponentUpdate).toHaveBeenCalled();
      expect(shouldComponentUpdate).toHaveLastReturnedWith(false);

      jest.restoreAllMocks();
    });

    it(' verify that when updating the props of the component with a longer list, the component does rerender', () => {
      const wrapper = shallow(
        <Notifications displayDrawer listNotifications={listNotifications} />
      );
      const shouldComponentUpdate = jest.spyOn(
        Notifications.prototype,
        'shouldComponentUpdate'
      );
      wrapper.setProps({ listNotifications: listNotificationsNext });
      expect(shouldComponentUpdate).toHaveBeenCalled();
      expect(shouldComponentUpdate).toHaveLastReturnedWith(true);

      jest.restoreAllMocks();
    });

  });
});