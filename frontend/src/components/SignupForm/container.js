import React, { Component } from "react";
import SignupForm from "./presenter";

class Container extends Component {
  state = {
    email: "",
    full_name: "",
    username: "",
    password: ""
  };
  render() {
    const { email, full_name, username, password } = this.state;
    return <SignupForm handleInputChange={this._handleInputChange} handleSubmit={this._handleSubmit} emailValue={email} full_nameValue={full_name} usernameValue={username} passwordValue={password} />;
  }
  _handleInputChange = event => {
    const {
      target: { value, name }
    } = event;
    this.setState({
      [name]: value
    });
  };
  _handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    // redux will be here
  };
}

export default Container;