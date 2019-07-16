import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import userService from "../../utils/userService";
import { Link } from "react-router-dom";

import "./WhosWho.css";

class WhosWhoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    var self = this;
    userService.getAllUsers().then(function(json) {
      self.setState({
        users: json
      });
    });
  }

  render() {
    var users = this.state.users.map((user, idx) => {
      return (
        <div key={idx} className="card" id="whos-who-card">
          <div className="card-body">
            <Link
              to={`/whoswho/${user._id}`}
              className="card-title WhosWhoLinks"
            >
              {user.name}
            </Link>{" "}
            <br />
            <br />
            <h5 className="card-subtitle mb-2 text-muted">
              {user.profile[0].jobTitle}
            </h5>
            <p className="card-text">{user.profile[0].city}</p>
          </div>
        </div>
      );
    });
    return (
      <div>
        <NavBar handleLogOut={this.handleLogOut} />
        <div className="whos-who-page">
          <h1>Dance Hub Members</h1>
          <div className="whos-who-cards">{users}</div>
        </div>
      </div>
    );
  }
}

export default WhosWhoPage;
