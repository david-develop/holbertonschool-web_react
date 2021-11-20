import React from "react";
import propTypes from "prop-types";

class BodySection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, title } = this.props;
    return (
      <div className="bodySection" className="container">
        <h2>{title}</h2>
        {children}
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