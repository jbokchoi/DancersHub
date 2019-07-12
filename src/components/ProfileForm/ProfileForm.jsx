import React, { Component } from "react";
import { Link } from "react-router-dom";
import { createProfile } from "../../utils/profileService";

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      about: "",
      gender: "female",
      jobTitle: "",
      location: { city: "", country: "" }
    };
  }

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

  handleSubmit = e => {
    e.preventDefault();
    console.log("handle submit profile hit");
    createProfile(this.state).then(function() {
      window.location = "/profile";
    });
  };

  render() {
    return (
      <div>
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
          <button className="btn btn-default">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default ProfileForm;
