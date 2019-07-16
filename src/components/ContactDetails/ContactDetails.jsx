import React from "react";

const ContactDetail = props => {
  return (
    <div>
      <button
        className="btn"
        type="button"
        data-toggle="collapse"
        data-target="#collapseContactDetails"
        aria-expanded="false"
        aria-controls="collapseContactDetails"
      >
        <i className="fa fa-plus-circle" />
      </button>
      <div className="collapse" id="collapseContactDetails">
        <form
          className="form-horizontal"
          onSubmit={props.handleContactDetailSubmit}
        >
          <label>Type of Contact</label>
          <br />
          <input
            className="form-control profile-forms"
            autoComplete="off"
            type="text"
            placeholder="ex. Website"
            onChange={props.handleContactDetailChange}
            value={props.contactDetail.name}
            name="name"
            required={true}
          />
          <br />

          <label>URL</label>
          <br />
          <input
            className="form-control profile-forms"
            autoComplete="off"
            onChange={props.handleContactDetailChange}
            value={props.contactDetail.link}
            name="link"
            required={true}
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
    </div>
  );
};

export default ContactDetail;
