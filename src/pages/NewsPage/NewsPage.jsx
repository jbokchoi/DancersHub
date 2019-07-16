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
            postedByUser: self.state.user
          }
        });
      });
    });
  };

  handleNewsPostChange = e => {
    var newsPost = { ...this.state.newsPost };
    console.log("newsPost: ", this.state.newsPost);
    newsPost[e.target.name] = e.target.value;
    this.setState({ newsPost });
  };

  handleNewsSubmit = e => {
    var self = this;
    console.log("create news submit hit");
    console.log("handle news submit:", this.state);
    e.preventDefault();
    createNewsPost(this.state).then(function() {
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

  render() {
    var newsPosts = this.state.newsPosts.map((newsPost, idx) => {
      return (
        <li key={idx}>
          <Link to={`/newsPosts/${newsPost._id}`}>{newsPost.title}</Link>
          <p>Upvotes: {newsPost.upvotes}</p>
          <button
            onClick={() => this.handleUpvote(newsPost._id, "upvote")}
            className="btn btn-success"
          >
            Upvote
            <i className="fa fa-thumbs-up" />
          </button>
          &nbsp; &nbsp;
          <button
            onClick={() => this.handleDownvote(newsPost._id, "downvote")}
            className="btn btn-danger"
          >
            Downvote <i className="fa fa-thumbs-down" />
          </button>
        </li>
      );
    });
    return (
      <div>
        <NavBar handleLogOut={this.handleLogOut} />
        <CreateNews
          handleNewsSubmit={this.handleNewsSubmit}
          newsPost={this.state.newsPost}
          handleNewsPostChange={this.handleNewsPostChange}
        />
        <h2>Member News</h2>
        <br />
        <ul>{newsPosts}</ul>
      </div>
    );
  }
}

export default NewsPage;
