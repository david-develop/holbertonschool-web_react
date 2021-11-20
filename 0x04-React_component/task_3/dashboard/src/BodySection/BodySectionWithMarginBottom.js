import React from 'react';
import BodySection from './BodySection';
import './BodySectionWithMarginBottom.css';
import propTypes from 'prop-types';

class BodySectionWithMarginBottom extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bodySectionWithMargin">
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

export default BodySectionWithMarginBottom;