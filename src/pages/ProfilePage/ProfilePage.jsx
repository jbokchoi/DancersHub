import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import userService from "../../utils/userService";
import ProfAreas from "../../components/ProfAreas/ProfAreas";
import ContactDetails from "../../components/ContactDetails/ContactDetails";
import Qualifications from "../../components/Qualifications/Qualifications";
import Employment from "../../components/Employment/Employment";

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
      console.log(json.profile[0]);
      self.setState({ profile: json.profile[0] });
    });
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        <NavBar handleLogOut={this.props.handleLogOut} />
        <h1>hi from profile page</h1>
        <Link to="/editProfile">Edit Profile</Link>
        <table className="table">
          <tbody>
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
            <tr>
              <th>City</th>
              <td>{this.state.profile.city}</td>
            </tr>
            <tr>
              <th>Country</th>
              <td>{this.state.profile.country}</td>
            </tr>
          </tbody>
        </table>
        <br />
        <ProfAreas />
        <br />
        <hr />
        <ContactDetails />
        <br />
        <hr />
        <Qualifications />
        <br />
        <hr />
        <Employment />
        <hr />
      </div>
    );
  }
}

export default ProfilePage;
