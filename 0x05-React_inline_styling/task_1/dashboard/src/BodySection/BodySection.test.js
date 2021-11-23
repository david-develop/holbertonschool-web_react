import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('<BodySection />', () => {
  it('renders without crashing', () => {
    const children = <p>test children node</p>;
    const wrapper = shallow(<BodySection title='test title'>
      {children}
    </BodySection>);
  });

  it('BodySection should render correctly the children and one h2 element', () => {
    const children = <p>test children node</p>;
    const wrapper = shallow(<BodySection title='test title'>
      {children}
    </BodySection>);
    expect(wrapper.find('h2').contains('test title')).toEqual(true);
    expect(wrapper.find('p').contains('test children node')).toEqual(true);
  });
});