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
        <h1>{this.state.user.name}</h1>
        <table className="table">
          <thead>
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
        <table className="table">
          <thead>
            <tr>
              <th colSpan="2">Professional Areas</th>
            </tr>
          </thead>
          {this.state.professionalAreas.length <= 0 ? (
            <tbody>
              <tr>
                <td>No Professional Areas Listed </td>
              </tr>
            </tbody>
          ) : (
            <tbody>{profAreas}</tbody>
          )}
        </table>
        <br />
        <br />
        <table className="table">
          <thead>
            <tr>
              <th colSpan="2">Contact Details</th>
            </tr>
            <tr>
              <th>Type of Contact</th>
              <th>URL</th>
            </tr>
          </thead>
          {this.state.contactDetails.length <= 0 ? (
            <tbody>
              <tr>
                <td>No Contact Details</td>
              </tr>
            </tbody>
          ) : (
            <tbody>{contactDetails}</tbody>
          )}
        </table>
        <br />
        <br />
        <table className="table">
          <thead>
            <tr>
              <th colSpan="2">Qualification Details</th>
            </tr>
            <tr>
              <th>School/Academic Programme Name</th>
              <th>Graduation Year</th>
              <th>Qualification Location</th>
            </tr>
          </thead>
          {this.state.qualifications.length <= 0 ? (
            <tbody>
              <tr>
                <td>No Qualification Details</td>
              </tr>
            </tbody>
          ) : (
            <tbody>{qualifications}</tbody>
          )}
        </table>
        <br />
        <br />
        <table className="table">
          <thead>
            <tr>
              <th colSpan="2">Employment Details</th>
            </tr>
            <tr>
              <th>Year From</th>
              <th>Year To</th>
              <th>Name of Company</th>
              <th>Job Title</th>
              <th>Employment Location</th>
            </tr>
          </thead>
          {this.state.employments.length <= 0 ? (
            <tbody>
              <tr>
                <td>No Employment Details</td>
              </tr>
            </tbody>
          ) : (
            <tbody>{employments}</tbody>
          )}
        </table>
      </div>
    );
  }
}

export default UserShowPage;
