import React, { Component } from "react";

class ContactDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactDetails: [],
      newContactDetail: {
        name: "website",
        link: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange = e => {
    const newContactDetail = { ...this.state.newContactDetail };
    newContactDetail[e.target.name] = e.target.value;
    this.setState({
      newContactDetail
    });
  };

  render() {
    return (
      <div>
        <h4>Contact Details</h4>
        <section> list of Contact Details</section>
        <form onSubmit={this.handleSubmit}>
          <label>Type of Contact</label>
          <br />
          <input
            onChange={this.handleChange}
            value={this.state.name}
            name="name"
          />
          <br />
          <label>URL</label>
          <br />
          <input
            onChange={this.handleChange}
            value={this.state.link}
            name="link"
          />
          <br />
          <br />
          <input
            type="submit"
            value="Add Contact Detail"
            className="btn btn-dark"
          />
        </form>
      </div>
    );
  }
}

export default ContactDetail;
