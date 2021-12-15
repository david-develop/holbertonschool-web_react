import React from 'react';
import CourseListRow from './CourseListRow';
import propTypes from 'prop-types';
import CourseShape from './CourseShape';
import { StyleSheet, css } from 'aphrodite';


const CourseList = (props) => {
  const listCourses = props.listCourses;


  return (
    <table id="CourseList" className={css(styles.list)}>
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

const cssVars = {
  borderTableColor: "rgb(170, 170, 170);",
};

const styles = StyleSheet.create({
  list: {
    border: `1px solid ${cssVars.borderTableColor}`,
    borderCollapse: "collapse",
    width: "95%",
    margin: "40px auto 0 auto",
  },
});

export default CourseList;