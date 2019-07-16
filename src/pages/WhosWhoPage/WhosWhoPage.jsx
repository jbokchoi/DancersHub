import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import userService from "../../utils/userService";
import { Link } from "react-router-dom";

class WhosWhoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    var self = this;
    console.log("USERS :");
    userService.getAllUsers().then(function(json) {
      self.setState({
        users: json
      });
    });
  }

  render() {
    var users = this.state.users.map((user, idx) => {
      return (
        <li key={idx}>
          <Link to={`/whoswho/${user._id}`}>{user.name}</Link>
          <p>{user.profile[0].jobTitle}</p>
          <p>{user.profile[0].city}</p>
        </li>
      );
    });
    return (
      <div>
        <NavBar />
        <h1>hello from WhosWhoPage</h1>
        <ul>{users}</ul>
      </div>
    );
  }
}

export default WhosWhoPage;
