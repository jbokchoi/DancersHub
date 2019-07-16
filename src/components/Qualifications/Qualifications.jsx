import React from "react";

const Qualifications = props => {
  return (
    <div>
      <form
        className="form-horizontal"
        onSubmit={props.handleQualificationSubmit}
      >
        <label>School/Academic Programme Name</label>
        <br />
        <input
          className="form-control"
          autocomplete="off"
          type="text"
          onChange={props.handleQualificationChange}
          value={props.qualification.schoolOrAcademicProgramme}
          name="schoolOrAcademicProgramme"
          required="true"
        />
        <br />
        <label>Graduation Year</label>
        <br />
        <input
          className="form-control"
          autocomplete="off"
          onChange={props.handleQualificationChange}
          value={props.qualification.gradYear}
          name="gradYear"
          required="true"
        />
        <br />
        <label>Qualification Location</label>
        <br />
        <input
          className="form-control"
          autocomplete="off"
          type="text"
          onChange={props.handleQualificationChange}
          value={props.qualification.qualificationLocation}
          name="qualificationLocation"
          required="true"
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
