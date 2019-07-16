import React from "react";

const CreateNews = props => {
  return (
    <div>
      <h4>Add a News Post</h4>
      <hr />
      <form className="news-form" onSubmit={props.handleNewsSubmit}>
        <label>Title</label>
        <br />
        <input
          onChange={props.handleNewsPostChange}
          value={props.title}
          name="title"
          className="form-control profile-forms"
          autoComplete="off"
          type="text"
          required={true}
        />
        <br />
        <br />

        <label>News</label>
        <br />
        <textarea
          onChange={props.handleNewsPostChange}
          value={props.body}
          name="body"
          className="form-control profile-forms"
          autoComplete="off"
          type="text"
          required={true}
        />
        <br />
        <br />
        <input
          type="submit"
          className="btn btn-default submitBtn"
          value="Submit News Post"
        />
      </form>
    </div>
  );
};

export default CreateNews;
