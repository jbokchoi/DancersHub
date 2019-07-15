import React, { Component } from "react";
import {
  getNewsPost,
  addComment,
  upvoteNewsPost,
  deleteNewsPost
  // deleteComment
} from "../../utils/newsPostService";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

class ShowNewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      body: "",
      postedByUser: "",
      postedOn: "",
      comments: [],
      commentBody: "",
      commentedOn: "",
      commentPostedBy: props.user,
      upvotes: ""
    };
  }

  componentDidMount() {
    console.log(this.props);
    var id = this.props.match.params.id;
    var self = this;

    getNewsPost(id).then(function(newsPost) {
      self.setState({
        id: newsPost._id,
        title: newsPost.title,
        body: newsPost.body,
        postedByUser: newsPost.postedByUser,
        postedOn: newsPost.createdAt,
        comments: newsPost.comments,
        commentBody: "",
        commentedOn: newsPost.comments.createdAt,
        upvotes: newsPost.upvotes
      });
    });
  }

  handleSubmit = e => {
    var self = this;
    e.preventDefault();
    addComment(
      this.state.id,
      this.state.commentBody,
      this.state.commentPostedBy
    ).then(function(json) {
      getNewsPost(self.state.id).then(function(newsPost) {
        self.setState({
          id: newsPost._id,
          title: newsPost.title,
          body: newsPost.body,
          comments: newsPost.comments,
          commentBody: "",
          upvotes: newsPost.upvotes
        });
      });
    });
  };

  handleCommentBody = e => {
    this.setState({ commentBody: e.target.value });
  };

  handleUpvote = (id, type) => {
    var self = this;

    upvoteNewsPost(id, type).then(function(json) {
      getNewsPost(id).then(function(newsPost) {
        self.setState({
          id: newsPost._id,
          title: newsPost.title,
          body: newsPost.body,
          comments: newsPost.comments,
          commentBody: "",
          upvotes: newsPost.upvotes
        });
      });
    });
  };

  handleDownvote = (id, type) => {
    var self = this;

    upvoteNewsPost(id, type).then(function(json) {
      getNewsPost(id).then(function(newsPost) {
        self.setState({
          id: newsPost._id,
          title: newsPost.title,
          body: newsPost.body,
          comments: newsPost.comments,
          commentBody: "",
          upvotes: newsPost.upvotes
        });
      });
    });
  };

  handleDelete = id => {
    deleteNewsPost(id).then(function(json) {
      window.location = "/news";
    });
  };

  // handleCommentDelete = idx => {
  //   deleteComment(idx).then(function(json) {
  //     window.location = `/news/${newsPost._id}`;
  //   });
  // };

  render() {
    var comments = this.state.comments.map((comment, idx) => {
      return (
        <li key={idx}>
          <h4>Comment:</h4>
          <p>{comment.body}</p>
          <p>Commented On:</p>
          {comment.createdAt}
          <button>x</button>
        </li>
      );
    });
    return (
      <div>
        <NavBar />
        <h2>{this.state.title}</h2>
        <br />
        <p>{this.state.body}</p>
        {console.log(this.state)}
        <p>Posted by:{this.state.postedByUser.name}</p>
        <p>Posted on:{this.state.postedOn}</p>
        <Link
          to={`/newsPosts/${this.state.id}/edit`}
          className="btn btn-secondary"
        >
          Edit Post
        </Link>
        &nbsp; &nbsp;
        <a
          href="#"
          onClick={() => this.handleDelete(this.state.id)}
          className="btn btn-info"
        >
          Delete Post
          <i className="fa fa-trash" />
        </a>
        <br />
        <br />
        <br />
        <hr />
        <p>Upvotes: {this.state.upvotes}</p>
        <a
          href="#"
          onClick={() => this.handleUpvote(this.state.id, "upvote")}
          className="btn btn-success"
        >
          Upvote
          <i className="fa fa-thumbs-up" />
        </a>
        &nbsp; &nbsp;
        <a
          href="#"
          onClick={() => this.handleDownvote(this.state.id, "downvote")}
          className="btn btn-danger"
        >
          Downvote <i className="fa fa-thumbs-down" />
        </a>
        <br />
        <hr />
        {this.state.comments.length <= 0 ? (
          <h3>No Comments</h3>
        ) : (
          <ul>{comments}</ul>
        )}
        <br />
        <hr />
        <form onSubmit={this.handleSubmit}>
          <label>Add Comment</label>
          <br />
          <textarea
            onChange={this.handleCommentBody}
            value={this.state.CommentBody}
          />
          <br />
          <input
            type="hidden"
            value={this.state.commentPostedBy}
            name="postedByUser"
          />
          <input type="submit" value="Add Comment" className="btn btn-dark" />
        </form>
      </div>
    );
  }
}

export default ShowNewsPage;
