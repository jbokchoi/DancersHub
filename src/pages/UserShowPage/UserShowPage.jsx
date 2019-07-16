import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";

import userService from "../../utils/userService";

class UserShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      profile: {},
      professionalAreas: [],
      contactDetails: [],
      qualifications: [],
      employments: []
    };
  }

  componentDidMount() {
    var id = this.props.match.params.id;
    var self = this;

    userService.getUserProfile(id).then(function(userProfile) {
      self.setState({
        user: userProfile,
        profile: userProfile.profile[0],
        professionalAreas: userProfile.profile[0].professionalAreas,
        contactDetails: userProfile.profile[0].contactDetails,
        qualifications: userProfile.profile[0].qualifications,
        employments: userProfile.profile[0].employments
      });
    });
  }

  render() {
    var profAreas = this.state.professionalAreas.map((profArea, profAreaId) => {
      return (
        <tr key={profAreaId}>
          <td>{profArea.profArea}</td>
        </tr>
      );
    });
    var contactDetails = this.state.contactDetails.map(
      (contactDetail, contactDetailId) => {
        return (
          <tr key={contactDetailId}>
            <td>{contactDetail.name}</td>
            <td>{contactDetail.link}</td>
          </tr>
        );
      }
    );
    var qualifications = this.state.qualifications.map(
      (qualification, qualificationId) => {
        return (
          <tr key={qualificationId}>
            <td>{qualification.schoolOrAcademicProgramme}</td>
            <td>{qualification.gradYear}</td>
            <td>{qualification.qualificationLocation}</td>
          </tr>
        );
      }
    );
    var employments = this.state.employments.map((employment, employmentId) => {
      return (
        <tr key={employmentId}>
          <td>{employment.yearFrom}</td>
          <td>{employment.yearTo}</td>
          <td>{employment.nameOfCompany}</td>
          <td>{employment.jobTitle}</td>
          <td>{employment.employmentLocation}</td>
        </tr>
      );
    });
    return (
      <div>
        <NavBar handleLogOut={this.handleLogOut} />
        <div className="user-show-page">
          <h1>{this.state.user.name}</h1>
          <table className="col-8 justify-content-center table">
            <thead>
              {this.state.profile.imageUrl ? (
                <tr>
                  <td colSpan="2">
                    <img
                      className="col-4"
                      src={`${this.state.profile.imageUrl}`}
                      alt="profileImage"
                    />
                  </td>
                </tr>
              ) : (
                <td colSpan="2">
                  <img
                    className="profilePic"
                    src={"https://i.imgur.com/zJfbqxe.jpg"}
                    alt="profileImage"
                  />
                </td>
              )}
              <tr>
                <th colSpan="2">Basic Profile</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>About:</th>
                <td>{this.state.profile.about}</td>
              </tr>
              <tr>
                <th>Job Title:</th>
                <td>{this.state.profile.jobTitle}</td>
              </tr>
              <tr>
                <th>City:</th>
                <td>{this.state.profile.city}</td>
              </tr>
              <tr>
                <th>Country:</th>
                <td>{this.state.profile.country}</td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          {this.state.professionalAreas.length <= 0 ? (
            <div />
          ) : (
            <div>
              <h4>Professional Areas</h4>
              <table className="col-12 justify-content-center table">
                <tbody>{profAreas}</tbody>
              </table>
            </div>
          )}
          <br />
          <br />
          {this.state.contactDetails.length <= 0 ? (
            <div />
          ) : (
            <div>
              <h4>Contact Details</h4>
              <table className="col-12 justify-content-center table">
                <thead>
                  <tr>
                    <th>Type of Contact</th>
                    <th>URL</th>
                  </tr>
                </thead>

                <tbody>{contactDetails}</tbody>
              </table>
            </div>
          )}
          <br />
          <br />
          {this.state.qualifications.length <= 0 ? (
            <div />
          ) : (
            <div>
              <h4>Qualification Details</h4>
              <table className="col-12 justify-content-center table">
                <thead>
                  <tr>
                    <th>School/Academic Programme Name</th>
                    <th>Graduation Year</th>
                    <th>Qualification Location</th>
                  </tr>
                </thead>

                <tbody>{qualifications}</tbody>
              </table>
            </div>
          )}
          <br />
          <br />
          {this.state.employments.length <= 0 ? (
            <div />
          ) : (
            <div>
              <h4>Employment Details</h4>
              <table className="col-12 justify-content-center table">
                <thead>
                  <tr>
                    <th>Year From</th>
                    <th>Year To</th>
                    <th>Name of Company</th>
                    <th>Job Title</th>
                    <th>Employment Location</th>
                  </tr>
                </thead>
                <tbody>{employments}</tbody>
              </table>
            </div>
          )}
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default UserShowPage;
