import React from 'react';
import propTypes from 'prop-types';

const rowStyles = { backgroundColor: "#f5f5f5ab" };
const headerRowStyles = { backgroundColor: "#deb5b545" };

const CourseListRow = (props) => {
  const isHeader = props.isHeader || false;
  const textFirstCell = props.textFirstCell || 'required';
  const textSecondCell = props.textSecondCell || 'null';

  let isHeaderStyle;
  let element;

  if (isHeader === true) {
    isHeaderStyle = headerRowStyles;
    if (textSecondCell === 'null') {
      element = <th colSpan="2">{textFirstCell}</th>;
    } else {
      element = [<th key="1">{textFirstCell}</th>, <th key="2">{textSecondCell}</th>];
    }
  } else {
    isHeaderStyle = rowStyles;
    element = [<td key="1">{textFirstCell}</td>, <td key="2">{textSecondCell}</td>];
  }
  return (
    <tr style={isHeaderStyle}>{element}</tr>
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