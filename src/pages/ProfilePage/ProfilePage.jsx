import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import userService from "../../utils/userService";
import ProfAreas from "../../components/ProfAreas/ProfAreas";
import ContactDetails from "../../components/ContactDetails/ContactDetails";
import Qualifications from "../../components/Qualifications/Qualifications";
import Employment from "../../components/Employment/Employment";
import {
  addProfArea,
  addContactDetail,
  addQualification,
  addEmployment,
  deleteProfArea,
  deleteContactDetail,
  deleteQualification,
  deleteEmployment
} from "../../utils/profileService";
import "./ProfilePage.css";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      profile: [],
      profAreas: [],
      profArea: "",
      contactDetails: [],
      contactDetail: {
        name: "",
        link: ""
      },
      qualifications: [],
      qualification: {
        schoolOrAcademicProgramme: "",
        gradYear: 2000,
        qualificationLocation: ""
      },
      employments: [],
      employment: {
        yearFrom: 2000,
        yearTo: 2000,
        nameOfCompany: "",
        jobTitle: "",
        employmentLocation: ""
      }
    };
  }

  componentDidMount() {
    var self = this;
    userService.getProfile().then(function(json) {
      self.setState({
        profile: json.profile[0],
        profAreas: json.profile[0].professionalAreas,
        profArea: "",
        contactDetails: json.profile[0].contactDetails,
        contactDetail: { name: "", link: "" },
        qualifications: json.profile[0].qualifications,
        qualification: {
          schoolOrAcademicProgramme: "",
          gradYear: 2000,
          qualificationLocation: ""
        },
        employments: json.profile[0].employments,
        employment: {
          yearFrom: 2000,
          yearTo: 2000,
          nameOfCompany: "",
          jobTitle: "",
          employmentLocation: ""
        }
      });
    });
  }

  handleProfAreaSubmit = e => {
    var self = this;
    e.preventDefault();
    addProfArea(this.state).then(function() {
      userService.getProfile().then(function(json) {
        self.setState({
          profile: json.profile[0],
          profAreas: json.profile[0].professionalAreas,
          profArea: "",
          contactDetails: json.profile[0].contactDetails,
          contactDetail: { name: "", link: "" },
          qualifications: json.profile[0].qualifications,
          qualification: {
            schoolOrAcademicProgramme: "",
            gradYear: 2000,
            qualificationLocation: ""
          },
          employments: json.profile[0].employments,
          employment: {
            yearFrom: 2000,
            yearTo: 2000,
            nameOfCompany: "",
            jobTitle: "",
            employmentLocation: ""
          }
        });
      });
    });
  };

  handleProfAreaChange = e => {
    this.setState({ profArea: e.target.value });
  };

  handleContactDetailSubmit = e => {
    var self = this;
    e.preventDefault();
    addContactDetail(this.state).then(function() {
      userService.getProfile().then(function(json) {
        self.setState({
          profile: json.profile[0],
          profAreas: json.profile[0].professionalAreas,
          profArea: "",
          contactDetails: json.profile[0].contactDetails,
          contactDetail: { name: "", link: "" },
          qualifications: json.profile[0].qualifications,
          qualification: {
            schoolOrAcademicProgramme: "",
            gradYear: 2000,
            qualificationLocation: ""
          },
          employments: json.profile[0].employments,
          employment: {
            yearFrom: 2000,
            yearTo: 2000,
            nameOfCompany: "",
            jobTitle: "",
            employmentLocation: ""
          }
        });
      });
    });
  };

  handleContactDetailChange = e => {
    var contactDetail = { ...this.state.contactDetail };
    contactDetail[e.target.name] = e.target.value;
    this.setState({
      contactDetail
    });
  };

  handleQualificationSubmit = e => {
    var self = this;
    e.preventDefault();
    addQualification(this.state).then(function() {
      userService.getProfile().then(function(json) {
        self.setState({
          profile: json.profile[0],
          profAreas: json.profile[0].professionalAreas,
          profArea: "",
          contactDetails: json.profile[0].contactDetails,
          contactDetail: { name: "", link: "" },
          qualifications: json.profile[0].qualifications,
          qualification: {
            schoolOrAcademicProgramme: "",
            gradYear: 2000,
            qualificationLocation: ""
          },
          employments: json.profile[0].employments,
          employment: {
            yearFrom: 2000,
            yearTo: 2000,
            nameOfCompany: "",
            jobTitle: "",
            employmentLocation: ""
          }
        });
      });
    });
  };

  handleQualificationChange = e => {
    var qualification = { ...this.state.qualification };
    qualification[e.target.name] = e.target.value;
    this.setState({
      qualification
    });
  };

  handleEmploymentSubmit = e => {
    var self = this;
    e.preventDefault();
    addEmployment(this.state).then(function() {
      userService.getProfile().then(function(json) {
        self.setState({
          profile: json.profile[0],
          profAreas: json.profile[0].professionalAreas,
          profArea: "",
          contactDetails: json.profile[0].contactDetails,
          contactDetail: { name: "", link: "" },
          qualifications: json.profile[0].qualifications,
          qualification: {
            schoolOrAcademicProgramme: "",
            gradYear: 2000,
            qualificationLocation: ""
          },
          employments: json.profile[0].employments,
          employment: {
            yearFrom: 2000,
            yearTo: 2000,
            nameOfCompany: "",
            jobTitle: "",
            employmentLocation: ""
          }
        });
      });
    });
  };

  handleEmploymentChange = e => {
    var employment = { ...this.state.employment };
    employment[e.target.name] = e.target.value;
    this.setState({
      employment
    });
  };

  handleProfAreaDelete = profAreaId => {
    var self = this;
    deleteProfArea(profAreaId).then(function() {
      userService.getProfile().then(function(json) {
        self.setState({
          profile: json.profile[0],
          profAreas: json.profile[0].professionalAreas,
          profArea: "",
          contactDetails: json.profile[0].contactDetails,
          contactDetail: { name: "", link: "" },
          qualifications: json.profile[0].qualifications,
          qualification: {
            schoolOrAcademicProgramme: "",
            gradYear: 2000,
            qualificationLocation: ""
          },
          employments: json.profile[0].employments,
          employment: {
            yearFrom: 2000,
            yearTo: 2000,
            nameOfCompany: "",
            jobTitle: "",
            employmentLocation: ""
          }
        });
      });
    });
  };

  handleContactDetailDelete = contactDetailId => {
    var self = this;
    deleteContactDetail(contactDetailId).then(function() {
      userService.getProfile().then(function(json) {
        self.setState({
          profile: json.profile[0],
          profAreas: json.profile[0].professionalAreas,
          profArea: "",
          contactDetails: json.profile[0].contactDetails,
          contactDetail: { name: "", link: "" },
          qualifications: json.profile[0].qualifications,
          qualification: {
            schoolOrAcademicProgramme: "",
            gradYear: 2000,
            qualificationLocation: ""
          },
          employments: json.profile[0].employments,
          employment: {
            yearFrom: 2000,
            yearTo: 2000,
            nameOfCompany: "",
            jobTitle: "",
            employmentLocation: ""
          }
        });
      });
    });
  };

  handleQualificationDelete = qualificationId => {
    var self = this;
    deleteQualification(qualificationId).then(function() {
      userService.getProfile().then(function(json) {
        self.setState({
          profile: json.profile[0],
          profAreas: json.profile[0].professionalAreas,
          profArea: "",
          contactDetails: json.profile[0].contactDetails,
          contactDetail: { name: "", link: "" },
          qualifications: json.profile[0].qualifications,
          qualification: {
            schoolOrAcademicProgramme: "",
            gradYear: 2000,
            qualificationLocation: ""
          },
          employments: json.profile[0].employments,
          employment: {
            yearFrom: 2000,
            yearTo: 2000,
            nameOfCompany: "",
            jobTitle: "",
            employmentLocation: ""
          }
        });
      });
    });
  };

  handleEmploymentDelete = employmentId => {
    var self = this;
    deleteEmployment(employmentId).then(function() {
      userService.getProfile().then(function(json) {
        self.setState({
          profile: json.profile[0],
          profAreas: json.profile[0].professionalAreas,
          profArea: "",
          contactDetails: json.profile[0].contactDetails,
          contactDetail: { name: "", link: "" },
          qualifications: json.profile[0].qualifications,
          qualification: {
            schoolOrAcademicProgramme: "",
            gradYear: 2000,
            qualificationLocation: ""
          },
          employments: json.profile[0].employments,
          employment: {
            yearFrom: 2000,
            yearTo: 2000,
            nameOfCompany: "",
            jobTitle: "",
            employmentLocation: ""
          }
        });
      });
    });
  };

  render() {
    var profAreas = this.state.profAreas.map((profArea, profAreaId) => {
      return (
        <tr key={profAreaId}>
          <td>
            {profArea.profArea}
            <button
              onClick={() => this.handleProfAreaDelete(profArea._id)}
              className="trashBtn"
            >
              <i className="fa fa-times" />
            </button>
          </td>
        </tr>
      );
    });
    var contactDetails = this.state.contactDetails.map(
      (contactDetail, contactDetailId) => {
        return (
          <tr key={contactDetailId}>
            <td>{contactDetail.name}</td>
            <td>{contactDetail.link} </td>
            <td>
              <button
                onClick={() =>
                  this.handleContactDetailDelete(contactDetail._id)
                }
                className="trashBtn"
              >
                <i className="fa fa-times" />
              </button>
            </td>
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
            <td>
              <button
                onClick={() =>
                  this.handleQualificationDelete(qualification._id)
                }
                className="trashBtn"
              >
                <i className="fa fa-times" />
              </button>
            </td>
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
          <td>
            <button
              onClick={() => this.handleEmploymentDelete(employment._id)}
              className="trashBtn"
            >
              <i className="fa fa-times" />
            </button>
          </td>
        </tr>
      );
    });
    return (
      <div>
        <NavBar handleLogOut={this.props.handleLogOut} />
        <div className="profilePage">
          <h1>Welcome, {this.props.user.name}!</h1>

          <table className="col-8 justify-content-center table table-bordered profileTable">
            <tbody>
              <tr>
                <th colSpan="2">About</th>
              </tr>
              <tr>
                <td colSpan="2">{this.state.profile.about}</td>
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
          <Link to="/editProfile" className="btn btn-default submitBtn">
            Edit Profile Details
          </Link>
          <br />
          <h4>Professional Areas of Work</h4>
          <table className="col-8 justify-content-center table profileTable">
            <tbody>{profAreas}</tbody>
          </table>
          <ProfAreas
            profArea={this.state.profArea}
            handleProfAreaSubmit={this.handleProfAreaSubmit}
            handleProfAreaChange={this.handleProfAreaChange}
          />
          <br />
          <hr />
          <h4>Contact Details</h4>
          <table className="col-8 justify-content-center table profileTable">
            <thead>
              <tr>
                <th>Type of Contact</th>
                <th>URL</th>
                <th />
              </tr>
            </thead>
            <tbody>{contactDetails}</tbody>
          </table>
          <ContactDetails
            contactDetail={this.state.contactDetail}
            handleContactDetailSubmit={this.handleContactDetailSubmit}
            handleContactDetailChange={this.handleContactDetailChange}
          />
          <br />
          <hr />
          <h4>Qualifications</h4>
          <table className="col-8 justify-content-center table profileTable">
            <thead>
              <tr>
                <th>School/Academic Programme Name</th>
                <th>Graduation Year</th>
                <th>Qualification Location</th>
                <th />
              </tr>
            </thead>
            <tbody>{qualifications}</tbody>
          </table>
          <Qualifications
            qualification={this.state.qualification}
            handleQualificationSubmit={this.handleQualificationSubmit}
            handleQualificationChange={this.handleQualificationChange}
          />
          <br />
          <hr />
          <h4>Employment</h4>
          <table className="col-8 justify-content-center table profileTable">
            <thead>
              <tr>
                <th>Year From</th>
                <th>Year To</th>
                <th>Name of Company</th>
                <th>Job Title</th>
                <th>Employment Location</th>
                <th />
              </tr>
            </thead>
            <tbody>{employments}</tbody>
          </table>
          <Employment
            employment={this.state.employment}
            handleEmploymentSubmit={this.handleEmploymentSubmit}
            handleEmploymentChange={this.handleEmploymentChange}
          />
          <hr />
        </div>
      </div>
    );
  }
}

export default ProfilePage;
