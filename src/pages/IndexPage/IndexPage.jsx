import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./IndexPage.css";

import NavBar from "../../components/NavBar/NavBar";

class IndexPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <h1>Main IndexPage</h1>
      </div>
    );
  }
}

export default IndexPage;
