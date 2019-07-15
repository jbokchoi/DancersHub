import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import userService from "../../utils/userService";
import ProfAreas from "../../components/ProfAreas/ProfAreas";
import ContactDetails from "../../components/ContactDetails/ContactDetails";
import Qualifications from "../../components/Qualifications/Qualifications";
import Employment from "../../components/Employment/Employment";
import { addProfArea } from "../../utils/profileService";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      profile: [],
      profAreas: [],
      profArea: ""
    };
  }

  componentDidMount() {
    var self = this;
    userService.getProfile().then(function(json) {
      console.log(json);
      console.log(json.profile[0].professionalAreas);
      self.setState({
        profile: json.profile[0],
        profAreas: json.profile[0].professionalAreas
      });
    });
  }

  handleProfAreaSubmit = e => {
    var self = this;
    e.preventDefault();
    console.log("pre add", this.state);
    addProfArea(this.state).then(function() {
      userService.getProfile().then(function(json) {
        self.setState({
          profile: json.profile[0],
          profAreas: json.profile[0].professionalAreas,
          profArea: ""
        });
      });
    });
    console.log("HELLO: ", this.state.profile.professionalAreas);
  };

  handleProfAreaChange = e => {
    console.log("pre change", e.target.name);
    console.log("pre change", e.target.value);
    this.setState({ profArea: e.target.value });
    console.log(this.state);
  };

  // handleProfAreaDelete = profAreaId => {
  //   var self = this;
  //   console.log("DELETE", profAreaId);
  //   deleteProfArea(profAreaId).then(function() {
  //     userService.getProfile().then(function(json) {
  //       self.setState({
  //         profile: json.profile[0],
  //         profAreas: json.profile[0].professionalAreas,
  //         profArea: ""
  //       });
  //     });
  //   });
  // };

  render() {
    var profAreas = this.state.profAreas.map((profArea, profAreaId) => {
      return (
        <li key={profAreaId}>
          {profArea.profArea}
          <button>
            <i className="fa fa-trash" />
          </button>
        </li>
      );
    });
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
        <h4>Professional Areas of Work</h4>
        <section>
          <ul>{profAreas}</ul>
        </section>
        <ProfAreas
          profArea={this.state.profArea}
          handleProfAreaSubmit={this.handleProfAreaSubmit}
          handleProfAreaChange={this.handleProfAreaChange}
        />
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
