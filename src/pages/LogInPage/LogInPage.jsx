import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LogInPage.css";
import userService from "../../utils/userService";

class LoginPage extends Component {
  state = {
    email: "",
    pw: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      console.log("login worked");
      this.props.handleSignupOrLogin();
      console.log("handlelogin worked");
      // Successfully signed up - show GamePage
      this.props.history.push("/profile");
      console.log("hi calvin");
    } catch (err) {
      // Invalid user data (probably duplicate email)
      alert("Invalid Credentials!");
    }
  };

  render() {
    return (
      <div className="LoginPage">
        <div className="LoginPageDiv">
          <h1>Log In</h1>
          <br />
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <div className="col-sm-12 col-md-6 offset-md-3 col-lg-6 offset-lg-3">
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
              <div className="col-sm-12 col-md-6 offset-md-3 col-lg-6 offset-lg-3">
                <input
                  type="password"
                  className="form-control Login-SignUpForm"
                  placeholder="Password"
                  value={this.state.pw}
                  name="pw"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12 text-center">
                <button className="btn btn-default LogIn-SignUpBtn">
                  Log In
                </button>
                &nbsp;&nbsp;&nbsp;
                <Link className="btn btn-default LogIn-SignUpBtn" to="/">
                  Cancel
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
