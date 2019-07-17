import React, { Component } from "react";
import {
  getNewsPosts,
  upvoteNewsPost,
  createNewsPost
} from "../../utils/newsPostService";
import { Link } from "react-router-dom";
import "./NewsPage.css";

import NavBar from "../../components/NavBar/NavBar";
import CreateNews from "../../components/CreateNews/CreateNews";

class NewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      newsPosts: [],
      newsPost: {
        title: "",
        body: "",
        postedByUser: props.user
      }
    };
  }

  componentDidMount() {
    var self = this;
    getNewsPosts().then(function(json) {
      self.setState({
        newsPosts: json,
        newsPost: {
          title: "",
          body: "",
          postedByUser: self.state.user
        }
      });
    });
  }

  handleUpvote = (id, type) => {
    var self = this;

    upvoteNewsPost(id, type).then(function(json) {
      getNewsPosts().then(function(json) {
        self.setState({
          newsPosts: json,
          newsPost: {
            title: "",
            body: "",
            postedByUser: self.state.user
          }
        });
      });
    });
  };

  handleDownvote = (id, type) => {
    var self = this;

    upvoteNewsPost(id, type).then(function(json) {
      getNewsPosts().then(function(json) {
        self.setState({
          newsPosts: json,
          newsPost: {
            title: "",
            body: "",
            postedByUser: ""
          }
        });
      });
    });
  };

  handleNewsPostChange = e => {
    var newsPost = { ...this.state.newsPost };
    newsPost[e.target.name] = e.target.value;
    this.setState({ newsPost });
  };

  handleNewsSubmit = e => {
    var self = this;
    e.preventDefault();
    createNewsPost(this.state).then(function() {
      getNewsPosts().then(function(json) {
        self.setState({
          newsPosts: json,
          newsPost: {
            title: "",
            body: "",
            postedByUser: ""
          }
        });
      });
    });
  };

  render() {
    var newsPosts = this.state.newsPosts.map((newsPost, idx) => {
      return (
        <div key={idx} className="card" id="news-post-card">
          <div className="card-body">
            <Link className="news-post-link" to={`/newsPosts/${newsPost._id}`}>
              {newsPost.title}
            </Link>
            <p className="card-text">Posted by: {newsPost.postedByUser.name}</p>
            <p className="card-text">Likes: {newsPost.upvotes}</p>
            <div>
              <button
                onClick={() => this.handleUpvote(newsPost._id, "upvote")}
                className="btn btn-upvote"
              >
                <i className="fa fa-thumbs-up" />
              </button>
              <button
                onClick={() => this.handleDownvote(newsPost._id, "downvote")}
                className="btn btn-downvote"
              >
                <i className="fa fa-thumbs-down" />
              </button>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <NavBar handleLogOut={this.handleLogOut} />
        <div className="news-page-wrapper">
          <div className="news-page">
            <div className="createnews">
              <CreateNews
                handleNewsSubmit={this.handleNewsSubmit}
                newsPost={this.state.newsPost}
                handleNewsPostChange={this.handleNewsPostChange}
              />
            </div>
            <div className="newsfeed">
              <h1>Member News</h1>
              <br />
              <div className="news-posts">{newsPosts}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsPage;
