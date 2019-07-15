import React from "react";

const Employment = props => {
  return (
    <div>
      <form onSubmit={props.handleEmploymentSubmit}>
        <label>Year From</label>
        <br />
        <input
          onChange={props.handleEmploymentChange}
          value={props.employment.yearFrom}
          name="yearFrom"
        />
        <br />
        <label>Year To</label>
        <br />
        <input
          onChange={props.handleEmploymentChange}
          value={props.employment.yearTo}
          name="yearTo"
        />
        <br />
        <label>Name of Company</label>
        <br />
        <input
          onChange={props.handleEmploymentChange}
          value={props.employment.nameOfCompany}
          name="nameOfCompany"
        />
        <br />
        <label>Job Title</label>
        <br />
        <input
          onChange={props.handleEmploymentChange}
          value={props.employment.jobTitle}
          name="jobTitle"
        />
        <br />
        <label>Employment Location</label>
        <br />
        <input
          onChange={props.handleEmploymentChange}
          value={props.employment.employmentLocation}
          name="employmentLocation"
        />
        <br />
        <br />
        <input type="submit" value="Add Employment" className="btn btn-dark" />
      </form>
    </div>
  );
};

export default Employment;
