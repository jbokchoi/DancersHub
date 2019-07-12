import React, { Component } from "react";
// import { Switch, Route, Link } from "react-router-dom";
import "./IndexPage.css";

import NavBar from "../../components/NavBar/NavBar";

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user
    };
  }
  render() {
    return (
      <div>
        <NavBar handleLogOut={this.props.handleLogOut} />
        <h1>Main IndexPage</h1>
        <h2>hi</h2>
        <h3>{this.state.user.name}</h3>
        {console.log(this.state.user)}
      </div>
    );
  }
}

export default IndexPage;
