import React, { useState } from 'react';
import propTypes from 'prop-types';
import { StyleSheet, css } from "aphrodite";

const rowStyle = { backgroundColor: "#f5f5f5ab" };
const headerRwStyle = { backgroundColor: "#deb5b545" };

const CourseListRow = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const isHeader = props.isHeader || false;
  const textFirstCell = props.textFirstCell || 'required';
  const textSecondCell = props.textSecondCell || 'null';

  let isHeaderStyle;
  let element;

  const tableItemStyle = css(
    isHeader ? styles.CourseListTh : styles.CourseListTd,
    isChecked && styles.rowChecked
  );

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  if (isHeader === true) {
    isHeaderStyle = headerRwStyle;
    if (textSecondCell === 'null') {
      element = <th colSpan="2">{textFirstCell}</th>;
    } else {
      element = [<th className={tableItemStyle} key="1">{textFirstCell}</th>, <th className={tableItemStyle} key="2">{textSecondCell}</th>];
    }
  } else {
    isHeaderStyle = rowStyle;
    element = [
      <td key="1" className={tableItemStyle}>
        <input type="checkbox" onClick={handleCheckbox}></input>
        {textFirstCell}
      </td>,
      <td key="2" className={tableItemStyle}>
        {textSecondCell}
      </td>
    ];
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

const cssVars = {
  borderTcolor: "rgb(170, 170, 170);",
};

const styles = StyleSheet.create({
  CourseListTh: {
    borderTop: `1px solid ${cssVars.borderTcolor}`,
    borderBottom: `1px solid ${cssVars.borderTcolor}`,
    textAlign: "left",
    fontSize: "18px",
  },

  CourseListTd: {
    textAlign: "left",
  },

  rowChecked: {
    backgroundColor: "#e6e4e4",
  },
});

export default CourseListRow;