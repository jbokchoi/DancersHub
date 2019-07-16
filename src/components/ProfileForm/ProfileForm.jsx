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
      country: "",
      imageUrl: ""
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
      <div className="profilePage">
        <h1>Create your profile</h1>
        <div className="col-8 justify-content-center">
          <form className="form-horizontal" onSubmit={this.handleSubmit}>
            <label>About</label>
            <textarea
              className="form-control profile-forms"
              onChange={this.handleChange}
              name="about"
              value={this.state.about}
              autoComplete="off"
            />
            <br />
            <label>Gender</label>
            <select
              className="form-control profile-forms"
              value={this.state.gender}
              onChange={this.handleChange}
              name="gender"
            >
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
              <option value="prefer not to say">Prefer not to say</option>
            </select>
            <br />
            <label>Job Title</label>
            <input
              className="form-control profile-forms"
              value={this.state.jobTitle}
              onChange={this.handleChange}
              name="jobTitle"
              autoComplete="off"
            />
            <br />
            <label>City</label>
            <input
              className="form-control profile-forms"
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
              autoComplete="off"
            />
            <br />
            <label>Country</label>
            <input
              className="form-control profile-forms"
              name="country"
              value={this.state.country}
              onChange={this.handleChange}
            />
            <br />
            <label>Profile Image URL </label>
            <br />
            <input
              className="form-control profile-forms"
              onChange={this.handleChange}
              name="imageUrl"
              value={this.state.imageUrl}
              required={true}
            />
            <button className="btn btn-default submitBtn">Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ProfileForm;
