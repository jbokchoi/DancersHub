import React, { Component } from "react";
// import { getPost, editPost } from "../services/api";
import userService from "../../utils/userService";
import tokenService from "../../utils/tokenService";

class EditProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      about: "",
      gender: "",
      jobTitle: "",
      location: { city: "", country: "" }
    };
  }

  componentDidMount() {
    var id = tokenService.getUserFromToken()._id;
    var self = this;

    userService.getProfile(id).then(function(user) {
      self.setState({
        id: user.profile[0]._id,
        about: user.profile[0].about,
        gender: user.profile[0].gender,
        jobTitle: user.profile[0].jobTitle,
        location: {
          city: user.profile[0].location.city,
          country: user.profile[0].location.country
        }
      });
    });
  }

  handleSubmit = e => {
    var self = this;
    e.preventDefault();
    userService.editProfile(this.state).then(function(json) {
      window.location = `/profile/${self.state.id}`;
    });
  };

  handleAbout = e => {
    this.setState({ about: e.target.value });
  };

  handleGender = e => {
    this.setState({ gender: e.target.value });
  };

  handleJobTitle = e => {
    this.setState({ jobTitle: e.target.value });
  };

  handleLocation = e => {
    const location = { ...this.state.location };
    location[e.target.name] = e.target.value;
    this.setState({
      location
    });
  };

  render() {
    return (
      <div>
        <h1>Edit Profile</h1>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <label>About</label>
          <textarea onChange={this.handleAbout} value={this.state.about} />

          <label>Gender</label>
          <select value={this.state.gender} onChange={this.handleGender}>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
            <option value="prefer not to say">Prefer not to say</option>
          </select>

          <label>Job Title</label>
          <input value={this.state.jobTitle} onChange={this.handleJobTitle} />

          <label>Location</label>
          <label>City</label>
          <input
            name="city"
            value={this.state.location.city}
            onChange={this.handleLocation}
          />
          <label>Country</label>
          <input
            name="country"
            value={this.state.location.country}
            onChange={this.handleLocation}
          />
          <button className="btn btn-default">Submit Edit</button>
        </form>
      </div>
    );
  }
}

export default EditProfilePage;
