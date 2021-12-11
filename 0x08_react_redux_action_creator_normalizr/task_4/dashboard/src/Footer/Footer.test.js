import 'jsdom-global/register';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer from './Footer';
import AppContext from "../App/AppContext";
import { user, logOut } from "../App/AppContext";

describe('<Footer />', () => {
  it('test that Footer renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('Verify that the components at the very least render the text “Copyright”', () => {
    const wrapper = mount(<Footer />);
    expect(wrapper.find("p").first()).toHaveLength(1);
    expect(wrapper.find("p").first().text()).toContain("Copyright");
  });

  it('Test to verify that the link is not displayed when the user is logged out within the context', () => {
    const wrapper = mount(
    <AppContext.Provider value={{ user, logOut }}>
      <Footer />
      </AppContext.Provider>);
    expect(wrapper.find("a").first()).toHaveLength(0);
  });

  it('Test to verify that the link is displayed when the user is logged in within the context', () => {
    const user = {
      isLoggedIn: true,
      email: 'tes@test.com',
      password: 'test'
    };
    const wrapper = mount(
    <AppContext.Provider value={{ user, logOut }}>
      <Footer />
      </AppContext.Provider>);
    expect(wrapper.find("a").first()).toHaveLength(1);
  });
});