import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

class ProfilePage extends Component {
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
        <h1>hi from profile page</h1>
        <Link to="/createProfile">Create Profile</Link>
      </div>
    );
  }
}

export default ProfilePage;
