import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./HomePage.css";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="HomePage">
        <img
          className="HomePageImg"
          src="https://i.imgur.com/W70jaOe.png"
          alt="DH Logo"
        />
        <Link className="HomePageLinks" to="/signup">
          Sign Up
        </Link>

        <Link className="HomePageLinks" to="/login">
          Log In
        </Link>
      </div>
    );
  }
}

export default HomePage;
