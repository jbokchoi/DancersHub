import React from "react";

const Employment = props => {
  return (
    <div>
      <form className="form-horizontal" onSubmit={props.handleEmploymentSubmit}>
        <label>Year From</label>
        <br />
        <input
          className="form-control"
          autocomplete="off"
          onChange={props.handleEmploymentChange}
          value={props.employment.yearFrom}
          name="yearFrom"
          required="true"
        />
        <br />
        <label>Year To</label>
        <br />
        <input
          className="form-control"
          autocomplete="off"
          onChange={props.handleEmploymentChange}
          value={props.employment.yearTo}
          name="yearTo"
          required="true"
        />
        <br />
        <label>Name of Company</label>
        <br />
        <input
          className="form-control"
          autocomplete="off"
          type="text"
          onChange={props.handleEmploymentChange}
          value={props.employment.nameOfCompany}
          name="nameOfCompany"
          required="true"
        />
        <br />
        <label>Job Title</label>
        <br />
        <input
          className="form-control"
          autocomplete="off"
          type="text"
          onChange={props.handleEmploymentChange}
          value={props.employment.jobTitle}
          name="jobTitle"
          required="true"
        />
        <br />
        <label>Employment Location</label>
        <br />
        <input
          className="form-control"
          autocomplete="off"
          type="text"
          onChange={props.handleEmploymentChange}
          value={props.employment.employmentLocation}
          name="employmentLocation"
          required="true"
        />
        <br />
        <br />
        <input type="submit" value="Add Employment" className="btn btn-dark" />
      </form>
    </div>
  );
};

export default Employment;
