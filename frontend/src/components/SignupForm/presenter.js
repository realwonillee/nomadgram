import React from "react";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons";
import formStyles from "shared/formStyles.scss";

const SignupForm = (props, context) => (
  <div className={formStyles.formComponent}>
    <h3 className={formStyles.signupHeader}>{context.t("Sign up to see photos and videos from your friends.")}</h3>
    <button className={formStyles.button}>
      {" "}
      <Ionicon icon="logo-facebook" fontSize="20px" color="#fff" />
      {context.t("Log in with Facebook")}
    </button>
    <span className={formStyles.divider}>{context.t("or")}</span>
    <form className={formStyles.form} onSubmit={props.handleSubmit}>
      <input type="email" placeholder={context.t("Email")} className={formStyles.textInput} onChange={props.handleInputChange} name="email" value={props.emailValue} />
      <input type="text" placeholder={context.t("Full Name")} className={formStyles.textInput} onChange={props.handleInputChange} name="full_name" value={props.full_nameValue} />
      <input type="username" placeholder={context.t("Username")} className={formStyles.textInput} onChange={props.handleInputChange} name="username" value={props.usernameValue} />
      <input type="password" placeholder={context.t("Password")} className={formStyles.textInput} onChange={props.handleInputChange} name="password" value={props.passwordValue} />
      <input type="submit" value={context.t("Sign up")} className={formStyles.button} />
    </form>
    <p className={formStyles.terms}>
      {context.t("By signing up, you agree to our")} <span>{context.t("Terms & Privacy Policy")}</span>.
    </p>
  </div>
);

SignupForm.propsTypes = {
  emailValue: PropTypes.string.isRequired,
  full_nameValue: PropTypes.string.isRequired,
  usernameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

SignupForm.contextTypes = {
  t: PropTypes.func.isRequired
};

export default SignupForm;
