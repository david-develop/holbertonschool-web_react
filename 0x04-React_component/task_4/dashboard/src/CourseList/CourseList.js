import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import propTypes from 'prop-types';
import CourseShape from './CourseShape';

const CourseList = (props) => {
  const listCourses = props.listCourses;


  return (
    <table id="CourseList" className="container">
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        {listCourses.length === 0 && (
          <CourseListRow
            textFirstCell="No course available yet"
            isHeader={false}
          />
        )}

        {listCourses.map((course) => (
          <CourseListRow
            key={course.id}
            textFirstCell={course.name}
            textSecondCell={course.credit}
            isHeader={false}
          />
        ))}
      </tbody>
    </table>
  );
};

CourseList.defaultProps = {
  listCourses: [],
};

CourseList.propTypes = {
  listCourses: propTypes.arrayOf(CourseShape)
};

export default CourseList;