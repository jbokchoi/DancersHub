import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./NewsPage.css";

import NavBar from "../../components/NavBar/NavBar";

class NewsPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar />

        <h1>hi from newspage</h1>
      </div>
    );
  }
}

export default NewsPage;
