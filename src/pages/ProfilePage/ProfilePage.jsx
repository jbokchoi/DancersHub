import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import userService from "../../utils/userService";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      profile: []
    };
  }

  componentDidMount() {
    var self = this;
    userService.getProfile().then(function(json) {
      console.log(json);
      console.log(json.profile[0].about);
      self.setState({ profile: json.profile[0] });
    });
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        <NavBar handleLogOut={this.props.handleLogOut} />
        <h1>hi from profile page</h1>
        <table className="table">
          <tr>
            <th>About</th>
            <td>{this.state.profile.about}</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>{this.state.profile.gender}</td>
          </tr>
          <tr>
            <th>Job Title</th>
            <td>{this.state.profile.jobTitle}</td>
          </tr>
          {/* <tr>
            <th>City</th>
            <td>{this.state.profile.location.city}</td>
          </tr>
          <tr>
            <th>Country</th>
            <td>{this.state.location.country}</td>
          </tr> */}
        </table>

        <br />
        <hr />
        <Link to="/editProfile">Edit Profile</Link>
      </div>
    );
  }
}

export default ProfilePage;
