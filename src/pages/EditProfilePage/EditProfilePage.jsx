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
      country: "",
      imageUrl: ""
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
        country: user.profile[0].country,
        imageUrl: user.profile[0].imageUrl
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
        <NavBar handleLogOut={this.handleLogOut} />
        <div className="profilePage">
          <h1>Edit Profile</h1>
          <hr />
          <div className="col-8 justify-content-center">
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
              <label>About</label>
              <textarea
                className="form-control profile-forms"
                onChange={this.handleChange}
                value={this.state.about}
                name="about"
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
                autoComplete="off"
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
              <br />
              <button className="btn btn-default submitBtn">Submit Edit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProfilePage;
