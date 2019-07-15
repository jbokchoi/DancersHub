import React from "react";

const ContactDetail = props => {
  return (
    <div>
      <form onSubmit={props.handleContactDetailSubmit}>
        <label>Type of Contact</label>
        <br />
        <input
          onChange={props.handleContactDetailChange}
          value={props.contactDetail.name}
          name="name"
        />
        <br />
        <label>URL</label>
        <br />
        <input
          onChange={props.handleContactDetailChange}
          value={props.contactDetail.link}
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
};

export default ContactDetail;
