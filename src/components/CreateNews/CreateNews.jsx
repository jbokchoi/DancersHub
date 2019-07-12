import React, { Component } from "react";
import { createNewsPost } from "../../utils/newsPostService";

class CreateNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      title: "",
      body: "",
      postedByUser: props.user
    };
  }

  handleTitle = e => {
    this.setState({ title: e.target.value });
  };

  handleBody = e => {
    this.setState({ body: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    createNewsPost(this.state).then(function() {
      window.location = "/news";
    });
  };

  render() {
    return (
      <div>
        <h4>Add a News Post</h4>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <label>Title</label>
          <br />
          <input onChange={this.handleTitle} value={this.state.title} />
          <br />
          <br />

          <label>News</label>
          <br />
          <textarea onChange={this.handleBody} value={this.state.body} />
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
  }
}

export default CreateNews;
