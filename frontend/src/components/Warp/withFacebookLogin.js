import React from "react";
import PropTypes from "prop-types";

const withFacebookLogin = WarppedFacebookLogin => {
  return class WithTFacebookLogin extends React.Component {
    static propTypes = {
      facebookLogin: PropTypes.func.isRequired
    };
    render() {
      return <WarppedFacebookLogin {...this.props} t={this.context.t} />;
    }
  };
};

export default withFacebookLogin;
