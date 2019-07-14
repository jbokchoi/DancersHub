import React, { Component } from "react";

class Employment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employment: [],
      newEmployment: {
        yearFrom: 2000,
        yearTo: 2000,
        nameOfCompany: "",
        jobTitle: "",
        employmentLocation: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange = e => {
    const newEmployment = { ...this.state.newEmployment };
    newEmployment[e.target.name] = e.target.value;
    this.setState({
      newEmployment
    });
  };

  render() {
    return (
      <div>
        <h4>Employment</h4>
        <section> list of employment</section>
        <form onSubmit={this.handleSubmit}>
          <label>Year From</label>
          <br />
          <input
            onChange={this.handleChange}
            value={this.state.yearFrom}
            name="yearFrom"
          />
          <br />
          <label>Year To</label>
          <br />
          <input
            onChange={this.handleChange}
            value={this.state.yearTo}
            name="yearTo"
          />
          <br />
          <label>Name of Company</label>
          <br />
          <input
            onChange={this.handleChange}
            value={this.state.nameOfCompany}
            name="nameOfCompany"
          />
          <br />
          <label>Job Title</label>
          <br />
          <input
            onChange={this.handleChange}
            value={this.state.jobTitle}
            name="jobTitle"
          />
          <br />
          <label>Employment Location</label>
          <br />
          <input
            onChange={this.handleChange}
            value={this.state.employmentLocation}
            name="employmentLocation"
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
    );
  }
}

export default Employment;
