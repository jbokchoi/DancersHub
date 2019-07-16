import React from "react";

const ContactDetail = props => {
  return (
    <div>
      <form
        className="form-horizontal"
        onSubmit={props.handleContactDetailSubmit}
      >
        <label>Type of Contact</label>
        <br />
        <input
          className="form-control"
          autocomplete="off"
          type="text"
          placeholder="ex. Website"
          onChange={props.handleContactDetailChange}
          value={props.contactDetail.name}
          name="name"
          required="true"
        />
        <br />

        <label>URL</label>
        <br />
        <input
          className="form-control"
          autocomplete="off"
          onChange={props.handleContactDetailChange}
          value={props.contactDetail.link}
          name="link"
          required="true"
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
