import React, { Component } from "react";
import { Link } from "react-router-dom";
import userService from "../../utils/userService";
import "./SignUpForm.css";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      passwordConf: ""
    };
  }

  handleChange = e => {
    // this.props.updateMessage("");
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      await userService.signup(this.state);
      console.log("signup worked");
      this.props.handleSignupOrLogin();
      console.log("handlesignup worked");
      // Successfully signed up - show GamePage
      // this.props.history.push("/");
      window.location = "/createProfile";
      console.log("window worked");
    } catch (err) {
      // Invalid user data (probably duplicate email)
      // this.props.updateMessage(err.message);
      console.log("shit broke");
    }
  };

  isFormInvalid() {
    return !(
      this.state.name &&
      this.state.email &&
      this.state.password === this.state.passwordConf
    );
  }

  render() {
    return (
      <div className="SignupPage">
        <h1>Sign Up Page</h1>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div>
              <input
                type="text"
                className="form-control Login-SignUpForm"
                placeholder="Name"
                value={this.state.name}
                name="name"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div>
              <input
                type="email"
                className="form-control Login-SignUpForm"
                placeholder="Email"
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
          </div>
          <div className="form-group">
            <div>
              <input
                type="password"
                className="form-control Login-SignUpForm"
                placeholder="Password"
                value={this.state.password}
                name="password"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div>
              <input
                type="password"
                className="form-control Login-SignUpForm"
                placeholder="Confirm Password"
                value={this.state.passwordConf}
                name="passwordConf"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button
                className="btn btn-default LogIn-SignUpBtn"
                disabled={this.isFormInvalid()}
              >
                Sign Up
              </button>
              &nbsp;&nbsp;
              <Link to="/" className="btn btn-default LogIn-SignUpBtn">
                Cancel
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
