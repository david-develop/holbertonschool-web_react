import React from 'react';
import BodySection from './BodySection';
import propTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class BodySectionWithMarginBottom extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={css(styles.bodySectionWithMargin)}>
        <BodySection {...this.props} />
      </div>
    );
  }
}

BodySectionWithMarginBottom.defaultProps = {
  title: '',
};

BodySectionWithMarginBottom.propTypes = {
  title: propTypes.string,
};

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: "40px",
    width: "100%",
  },
});

export default BodySectionWithMarginBottom;