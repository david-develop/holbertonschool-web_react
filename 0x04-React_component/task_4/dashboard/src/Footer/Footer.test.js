import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('<Footer />', () => {
  it('test that Footer renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('Verify that the components at the very least render the text “Copyright”', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('p').text()).toMatch(/Copyright/i);
  });
});