import React, { Component } from "react";

import userService from "../../utils/userService";
import tokenService from "../../utils/tokenService";

import NavBar from "../../components/NavBar/NavBar";

class EditProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      about: "",
      gender: "",
      jobTitle: "",
      city: "",
      country: ""
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
        city: user.profile[0].city,
        country: user.profile[0].country
      });
    });
  }

  handleSubmit = e => {
    var self = this;
    e.preventDefault();
    userService.editProfile(this.state).then(function(json) {
      self.props.history.push("/profile");
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <NavBar />
        <h1>Edit Profile</h1>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <label>About</label>
          <textarea
            onChange={this.handleChange}
            value={this.state.about}
            name="about"
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
          <button className="btn btn-default">Submit Edit</button>
        </form>
      </div>
    );
  }
}

export default EditProfilePage;
