import 'jsdom-global/register';
import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('<CourseListRow />', () => {
  it('test that CourseListRow renders without crashing', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Available courses" textSecondCell="Credit" />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('verify that CourseListRow renders one cell with colspan = 2 when textSecondCell does not exist', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Available courses" />);
    expect(wrapper.find('th').props()).toHaveProperty('colSpan', '2');
  });

  it('Verify that  the component renders two cells when textSecondCell is present', () => {
    const textFirstCell = "Available courses";
    const textSecondCell ="Credit";
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell={textFirstCell} textSecondCell={textSecondCell} />);
    const element = wrapper.find('th');
    const child1 = element.at(0);
    const child2 = element.at(1);
    
    expect(element.length).toEqual(2);

    expect(child1.contains(textFirstCell)).toEqual(true);
    expect(child2.contains(textSecondCell)).toEqual(true);
  });

  it('Verify that  the component renders two cells when textSecondCell is present', () => {
    const textFirstCell = "Available courses";
    const textSecondCell ="Credit";
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell={textFirstCell} textSecondCell={textSecondCell} />);
    const element = wrapper.find('td');

    expect(element.length).toEqual(2);
  });
});