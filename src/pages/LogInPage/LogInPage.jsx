import React, { Component } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import "./LogInPage.css";

class LogInPage extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "" };
  }

  updateMessage = msg => {
    this.setState({ message: msg });
  };

  render() {
    return (
      <div className="LogInPage">
        <h1>Log in Page</h1>
      </div>
    );
  }
}

export default LogInPage;
