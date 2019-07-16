import React from "react";

const CreateNews = props => {
  return (
    <div>
      <h4>Add a News Post</h4>
      <hr />
      <form onSubmit={props.handleNewsSubmit}>
        <label>Title</label>
        <br />
        <input
          onChange={props.handleNewsPostChange}
          value={props.title}
          name="title"
        />
        <br />
        <br />

        <label>News</label>
        <br />
        <textarea
          onChange={props.handleNewsPostChange}
          value={props.body}
          name="body"
        />
        <br />
        <br />
        <input
          type="submit"
          className="btn btn-primary"
          value="Submit News Post"
        />
      </form>
    </div>
  );
};

export default CreateNews;
