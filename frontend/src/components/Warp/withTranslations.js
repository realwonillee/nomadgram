import React from "react";
import PropTypes from "prop-types";

const withTranslations = WarppedTranslations => {
  return class WithTranslations extends React.Component {
    static contextTypes = {
      t: PropTypes.func.isRequired
    };
    render() {
      return <WarppedTranslations {...this.props} t={this.context.t} />;
    }
  };
};

export default withTranslations;
