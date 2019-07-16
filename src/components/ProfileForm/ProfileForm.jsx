import React, { Component } from "react";
import userService from "../../utils/userService";

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      about: "",
      gender: "female",
      jobTitle: "",
      city: "",
      country: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    userService.createProfile(this.state).then(function() {
      window.location = "/profile";
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>About</label>
          <textarea
            onChange={this.handleChange}
            name="about"
            value={this.state.about}
          />

          <label>Gender</label>
          <select
            value={this.state.gender}
            onChange={this.handleChange}
            name="gender"
          >
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
            <option value="prefer not to say">Prefer not to say</option>
          </select>

          <label>Job Title</label>
          <input
            value={this.state.jobTitle}
            onChange={this.handleChange}
            name="jobTitle"
          />

          <label>City</label>
          <input
            name="city"
            value={this.state.city}
            onChange={this.handleChange}
          />
          <label>Country</label>
          <input
            name="country"
            value={this.state.country}
            onChange={this.handleChange}
          />
          <button className="btn btn-default">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default ProfileForm;
