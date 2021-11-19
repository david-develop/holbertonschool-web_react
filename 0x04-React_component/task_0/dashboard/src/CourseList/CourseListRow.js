import React from 'react';
import propTypes from 'prop-types';

const CourseListRow = (props) => {
  const isHeadere = props.isHeader || false;
  const textFirstCell = props.textFirstCell || 'required';
  const textSecondCell = props.textSecondCell || 'null';

  let element;
  if (isHeadere === true) {
    if (textSecondCell === 'null') {
      element = <th colSpan="2">{textFirstCell}</th>;
    } else {
      element = [<th key="1">{textFirstCell}</th>, <th key="2">{textSecondCell}</th>];
    }
  } else {
    element = [<td key="1">{textFirstCell}</td>, <td key="2">{textSecondCell}</td>];
  }
  return (
    <tr>{element}</tr>
  );
};

CourseListRow.propTypes = {
  isHeader: propTypes.bool,
  textFirstCell: propTypes.string,
  textSecondCell: propTypes.oneOfType([
    propTypes.string,
    propTypes.number
  ])
};

export default CourseListRow;