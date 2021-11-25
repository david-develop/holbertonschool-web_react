import 'jsdom-global/register';
import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe('<CourseList />', () => {
  let listCourses;
  it('test that CourseList Empty renders without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('Verify that CourseList renders the 5 different rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('CourseListRow').length).toEqual(3);
  });

  describe('CourseList containing elements', () => {
    beforeEach(() => {
      listCourses = [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ];
    });

    it('it renders the 5 different rows', () => {
      const wrapper = shallow(<CourseList listCourses={listCourses} />);
      wrapper.update();
      const item = wrapper.find('CourseListRow');

      expect(item).toHaveLength(5);

      expect(item.at(0).prop('textFirstCell')).toEqual('Available courses');
      expect(item.at(0).prop('isHeader')).toEqual(true);

      expect(item.at(1).prop('textFirstCell')).toEqual('Course name');
      expect(item.at(1).prop('textSecondCell')).toEqual('Credit');
      expect(item.at(1).prop('isHeader')).toEqual(true);

      expect(item.at(2).prop('textFirstCell')).toEqual('ES6');
      expect(item.at(2).prop('textSecondCell')).toEqual(60);
      expect(item.at(2).prop('isHeader')).toEqual(false);

      expect(item.at(3).prop('textFirstCell')).toEqual('Webpack');
      expect(item.at(3).prop('textSecondCell')).toEqual(20);
      expect(item.at(3).prop('isHeader')).toEqual(false);

      expect(item.at(4).prop('textFirstCell')).toEqual('React');
      expect(item.at(4).prop('textSecondCell')).toEqual(40);
      expect(item.at(4).prop('isHeader')).toEqual(false);
    });
  });
});