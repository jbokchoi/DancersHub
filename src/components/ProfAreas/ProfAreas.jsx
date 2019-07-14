import React, { Component } from "react";

class ProfAreas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profAreas: [],
      newProfArea: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <h4>Professional Areas of Work</h4>
        <section>list of professional areas</section>
        <form onSubmit={this.handleSubmit}>
          <label>Add Area of Work</label>
          <br />
          <select
            onChange={this.handleChange}
            value={this.state.newProfArea}
            name="newProfArea"
          >
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
    );
  }
}

export default ProfAreas;
