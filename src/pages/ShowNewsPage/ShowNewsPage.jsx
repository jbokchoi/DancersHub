import React, { Component } from "react";
import {
  getNewsPost,
  addComment,
  upvoteNewsPost,
  deleteNewsPost,
  deleteComment
} from "../../utils/newsPostService";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

class ShowNewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      id: "",
      title: "",
      body: "",
      postedByUser: "",
      postedOn: "",
      comments: [],
      commentBody: "",
      commentedOn: "",
      commentPostedBy: "",
      upvotes: ""
    };
  }

  componentDidMount() {
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
        commentPostedBy: newsPost.comments.postedByUser,
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
          commentPostedBy: newsPost.comments.postedByUser,
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

  handleCommentDelete = commentId => {
    var self = this;
    deleteComment(this.props.match.params.id, commentId).then(function() {
      self.props.history.push(`/news`);
    });
  };

  render() {
    var comments = this.state.comments.map((comment, idx) => {
      return (
        <div key={idx} className="card" id="comment-card">
          <div className="card-body news">
            <p className="card-text">{comment.body}</p>
            <div>
              <Link
                to={`/whoswho/${comment.postedByUser._id}`}
                className="user-profile-link"
              >
                {comment.postedByUser.name}
              </Link>{" "}
              <span className="card-subtitle mb-2 text-muted">
                {new Date(comment.createdAt).toLocaleDateString()}
              </span>
              {this.props.user._id === comment.postedByUser._id ? (
                <button
                  className="trashBtn"
                  onClick={() => this.handleCommentDelete(comment._id)}
                >
                  <i className="fa fa-times" />
                </button>
              ) : (
                <div />
              )}
            </div>
          </div>
          <hr />
        </div>
      );
    });
    return (
      <div>
        <NavBar handleLogOut={this.handleLogOut} />
        <div className="news-page-wrapper">
          <h4>{this.state.title}</h4>
          <Link
            className="user-profile-link"
            to={`/whoswho/${this.state.postedByUser._id}`}
          >
            Posted by: {this.state.postedByUser.name}{" "}
          </Link>{" "}
          <p>Posted on: {new Date(this.state.postedOn).toLocaleDateString()}</p>
          <br />
          <p className="col-8">{this.state.body}</p>
          <div>
            {this.props.user._id === this.state.postedByUser._id ? (
              <Link
                to={`/newsPosts/${this.state.id}/edit`}
                className="btn news-post-link"
              >
                Edit Post
              </Link>
            ) : (
              <div />
            )}
            {this.props.user._id === this.state.postedByUser._id ? (
              <button
                onClick={() => this.handleDelete(this.state.id)}
                className="btn news-post-link"
              >
                Delete Post
              </button>
            ) : (
              <div />
            )}
          </div>
          <br />
          <div className="col-8">
            <h3>Likes: {this.state.upvotes}</h3>
            <button
              onClick={() => this.handleUpvote(this.state.id, "upvote")}
              className="btn btn-upvote"
            >
              <i className="fa fa-thumbs-up" />
            </button>
            &nbsp; &nbsp;
            <button
              onClick={() => this.handleDownvote(this.state.id, "downvote")}
              className="btn btn-downvote"
            >
              <i className="fa fa-thumbs-down" />
            </button>
          </div>
          <br />
          <hr />
          {this.state.comments.length <= 0 ? (
            <h4>No Comments</h4>
          ) : (
            <div className="col-8">
              <h4>Comments</h4>
              <div>{comments}</div>
            </div>
          )}
          <br />
          <hr />
          <form className="col-8" onSubmit={this.handleSubmit}>
            <label>Add Comment</label>
            <br />
            <textarea
              onChange={this.handleCommentBody}
              value={this.state.CommentBody}
              className="form-control profile-forms"
              autoComplete="off"
              type="text"
              required={true}
            />
            <br />
            <input type="submit" value="Add Comment" className="btn btn-dark" />
          </form>
        </div>
      </div>
    );
  }
}

export default ShowNewsPage;
