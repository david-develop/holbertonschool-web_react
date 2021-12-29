import 'jsdom-global/register';
import React from 'react';
import { shallow, mount } from 'enzyme';
import App, { mapStateToProps } from './App';
import AppContext, { user, logOut } from "../App/AppContext";
import { getLatestNotification } from '../utils/utils';
import { fromJS } from "immutable";

describe('mapStateToProps', () => {
  it('test that verify that the function returns the right object when passing the state', () => {
    let state = fromJS({
      isUserLoggedIn: true
    });

    expect(mapStateToProps(state)).toEqual({
      isLoggedIn: true
    });
  });

  it('mapStateToProps returns the right displayDrawer state', () => {
    let state = fromJS({
      isNotificationDrawerVisible: true,
    });
    const result = mapStateToProps(state);

    expect(result).toEqual({ displayDrawer: true });
  });
});