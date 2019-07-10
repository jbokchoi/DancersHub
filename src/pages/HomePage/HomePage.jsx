import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./HomePage.css";

class HomePage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="HomePage">
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
