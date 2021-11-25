import 'jsdom-global/register';
import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('<BodySectionWithMarginBottom />', () => {
  it('checking that shallowing the component should render correctly a BodySection component and that the props are passed correctly to the child component', () => {
    const children = <p>test children node</p>;
    const wrapper = shallow(<BodySectionWithMarginBottom title='test title'>
      {children}
    </BodySectionWithMarginBottom>);

    expect(wrapper.find(BodySection).length).toBe(1);
    expect(wrapper.find(BodySection).props().title).toBe('test title');
    expect(wrapper.find(BodySection).props().children).toBe(children);
  });
});
