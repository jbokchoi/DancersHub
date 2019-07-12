import React, { Component } from "react";
import { getNewsPosts, upvoteNewsPost } from "../../utils/newsPostService";
import { Switch, Route, Link } from "react-router-dom";
import "./NewsPage.css";

import NavBar from "../../components/NavBar/NavBar";
import CreateNews from "../../components/CreateNews/CreateNews";

class NewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      newsPosts: []
    };
  }

  componentDidMount() {
    var self = this;
    getNewsPosts().then(function(json) {
      self.setState({ newsPosts: json });
    });
  }

  handleUpvote = (id, type) => {
    var self = this;

    upvoteNewsPost(id, type).then(function(json) {
      getNewsPosts().then(function(json) {
        self.setState({ newsPosts: json });
      });
    });
  };

  handleDownvote = (id, type) => {
    var self = this;

    upvoteNewsPost(id, type).then(function(json) {
      getNewsPosts().then(function(json) {
        self.setState({ newsPosts: json });
      });
    });
  };

  render() {
    var newsPosts = this.state.newsPosts.map((newsPost, idx) => {
      return (
        <li key={idx}>
          <Link to={`/newsPosts/${newsPost._id}`}>{newsPost.title}</Link>
          <p>Upvotes: {newsPost.upvotes}</p>
          <a
            href="#"
            onClick={() => this.handleUpvote(newsPost._id, "upvote")}
            className="btn btn-success"
          >
            Upvote
            <i className="fa fa-thumbs-up" />
          </a>
          &nbsp; &nbsp;
          <a
            href="#"
            onClick={() => this.handleDownvote(newsPost._id, "downvote")}
            className="btn btn-danger"
          >
            Downvote <i className="fa fa-thumbs-down" />
          </a>
        </li>
      );
    });
    return (
      <div>
        <NavBar />
        <CreateNews />
        <h2>Member News</h2>
        <br />
        <ul>{newsPosts}</ul>
      </div>
    );
  }
}

export default NewsPage;
