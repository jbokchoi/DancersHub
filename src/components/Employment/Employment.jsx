import React from "react";

const Employment = props => {
  return (
    <div>
      <button
        className="btn"
        type="button"
        data-toggle="collapse"
        data-target="#collapseEmployment"
        aria-expanded="false"
        aria-controls="collapseEmployment"
      >
        <i className="fa fa-plus-circle" />
      </button>
      <div className="collapse" id="collapseEmployment">
        <form
          className="form-horizontal"
          onSubmit={props.handleEmploymentSubmit}
        >
          <label>Year From</label>
          <br />
          <input
            className="form-control profile-forms"
            autoComplete="off"
            onChange={props.handleEmploymentChange}
            value={props.employment.yearFrom}
            name="yearFrom"
            required={true}
          />
          <br />
          <label>Year To</label>
          <br />
          <input
            className="form-control profile-forms"
            autoComplete="off"
            onChange={props.handleEmploymentChange}
            value={props.employment.yearTo}
            name="yearTo"
            required={true}
          />
          <br />
          <label>Name of Company</label>
          <br />
          <input
            className="form-control profile-forms"
            autoComplete="off"
            type="text"
            onChange={props.handleEmploymentChange}
            value={props.employment.nameOfCompany}
            name="nameOfCompany"
            required={true}
          />
          <br />
          <label>Job Title</label>
          <br />
          <input
            className="form-control profile-forms"
            autoComplete="off"
            type="text"
            onChange={props.handleEmploymentChange}
            value={props.employment.jobTitle}
            name="jobTitle"
            required={true}
          />
          <br />
          <label>Employment Location</label>
          <br />
          <input
            className="form-control profile-forms"
            autoComplete="off"
            type="text"
            onChange={props.handleEmploymentChange}
            value={props.employment.employmentLocation}
            name="employmentLocation"
            required={true}
          />
          <br />
          <br />
          <input
            type="submit"
            value="Add Employment"
            className="btn btn-dark"
          />
        </form>
      </div>
    </div>
  );
};

export default Employment;
