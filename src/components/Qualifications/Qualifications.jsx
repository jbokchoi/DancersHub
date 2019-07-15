import React from "react";

const Qualifications = props => {
  return (
    <div>
      <form onSubmit={props.handleQualificationSubmit}>
        <label>School/Academic Programme Name</label>
        <br />
        <input
          onChange={props.handleQualificationChange}
          value={props.qualification.schoolOrAcademicProgramme}
          name="schoolOrAcademicProgramme"
        />
        <br />
        <label>Graduation Year</label>
        <br />
        <input
          onChange={props.handleQualificationChange}
          value={props.qualification.gradYear}
          name="gradYear"
        />
        <br />
        <label>Qualification Location</label>
        <br />
        <input
          onChange={props.handleQualificationChange}
          value={props.qualification.qualificationLocation}
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
};

export default Qualifications;
