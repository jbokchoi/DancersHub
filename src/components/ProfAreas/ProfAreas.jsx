import React, { Component } from "react";
import { addProfArea } from "../../utils/profileService";

class ProfAreas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profArea: ""
      // newProfArea: ""
    };
  }

  componentDidMount = e => {
    console.log("component mounted", this.state);
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("pre add", this.state);
    addProfArea(this.state).then(function() {
      // console.log("post add", this.state);
      window.location = "/profile";
    });
  };

  handleChange = e => {
    console.log("pre change", e.target.name);
    console.log("pre change", e.target.value);
    this.setState({ profArea: e.target.value });
    console.log(this.state);
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
            value={this.state.profArea}
            name="profArea"
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
