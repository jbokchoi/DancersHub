import React, { Component } from "react";
import { getNewsPost, editNewsPost } from "../../utils/newsPostService";
import NavBar from "../../components/NavBar/NavBar";

class EditNewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      body: ""
    };
  }

  componentDidMount() {
    var id = this.props.match.params.id;
    var self = this;

    getNewsPost(id).then(function(newsPost) {
      self.setState({
        id: newsPost._id,
        title: newsPost.title,
        body: newsPost.body
      });
    });
  }

  handleSubmit = e => {
    var self = this;
    e.preventDefault();
    editNewsPost(this.state).then(function(json) {
      self.props.history.push(`/newsPosts/${self.state.id}`);
    });
  };

  handleTitle = e => {
    this.setState({ title: e.target.value });
  };

  handleBody = e => {
    this.setState({ body: e.target.value });
  };

  render() {
    return (
      <div>
        <NavBar handleLogOut={this.handleLogOut} />
        <h4>Edit News Post</h4>
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
            value="Edit News Post"
          />
        </form>
      </div>
    );
  }
}

export default EditNewsPage;
