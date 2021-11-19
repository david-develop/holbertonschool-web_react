import React from "react";
import propTypes from "prop-types";

class BodySection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, title } = this.props;
    return (
      <div className="bodySection">
        <h2>{title}</h2>
      </div>
    );
  }
}

BodySection.defaultProps = {
  title: '',
};

BodySection.propTypes = {
  title: propTypes.string,
};

export default BodySection;