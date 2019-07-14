import React, { Component } from "react";

class Qualifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qualifications: [],
      newQualification: {
        schoolOrAcademicProgramme: "",
        gradYear: 2000,
        qualificationLocation: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange = e => {
    const newQualification = { ...this.state.newQualification };
    newQualification[e.target.name] = e.target.value;
    this.setState({
      newQualification
    });
  };

  render() {
    return (
      <div>
        <h4>Qualifications</h4>
        <section> list of qualifications</section>
        <form onSubmit={this.handleSubmit}>
          <label>School/Academic Programme Name</label>
          <br />
          <input
            onChange={this.handleChange}
            value={this.state.schoolOrAcademicProgramme}
            name="schoolOrAcademicProgramme"
          />
          <br />
          <label>Graduation Year</label>
          <br />
          <input
            onChange={this.handleChange}
            value={this.state.gradYear}
            name="gradYear"
          />
          <br />
          <label>Qualification Location</label>
          <br />
          <input
            onChange={this.handleChange}
            value={this.state.qualificationLocation}
            name="qualificationLocation"
          />
          <br />
          <br />
          <input
            type="submit"
            value="Add Qualification"
            className="btn btn-dark"
          />
        </form>
      </div>
    );
  }
}

export default Qualifications;
