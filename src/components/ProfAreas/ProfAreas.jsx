import React from "react";

const ProfAreas = props => {
  return (
    <div>
      <button
        className="btn"
        type="button"
        data-toggle="collapse"
        data-target="#collapseProfAreas"
        aria-expanded="false"
        aria-controls="collapseProfAreas"
      >
        <i className="fa fa-plus-circle" />
      </button>
      <div className="collapse" id="collapseProfAreas">
        <form onSubmit={props.handleProfAreaSubmit}>
          <label>Add Area of Work</label>
          <br />
          <select
            className="form-control profile-forms"
            onChange={props.handleProfAreaChange}
            value={props.profArea}
            name="profArea"
          >
            <option value="" />
            <option value="Dancer">Dancer</option>
            <option value="Choreographer">Choreographer</option>
            <option value="Mass Movement">Mass Movement</option>
            <option value="Movement Director">Movement Director</option>
            <option value="Dance Teacher">Dance Teacher</option>
            <option value="Dance Lecturer">Dance Lecturer</option>
            <option value="Somatic Practitioner">Somatic Practitioner</option>
            <option value="Healthcare Practitioner">
              Healthcare Practitioner
            </option>
            <option value="Dance Scientist">Dance Scientist</option>
            <option value="Dance Critic">Dance Critic</option>
            <option value="Dance Admin">Dance Admin</option>
            <option value="Dance Management">Dance Management</option>
          </select>
          <br />
          <br />
          <input
            type="submit"
            value="Add Area of Work"
            className="btn btn-dark"
          />
        </form>
      </div>
    </div>
  );
};

export default ProfAreas;
