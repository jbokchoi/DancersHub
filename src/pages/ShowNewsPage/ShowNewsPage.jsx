import React, { Component } from "react";
// import {
//   getNewsPost,
//   addComment,
//   upvoteNewsPost,
//   deleteNewsPost
// } from "../../utils/newsPostService";
// import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

class ShowNewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      body: "",
      //   postedByUser: "",
      postedOn: "",
      comments: [],
      commentBody: "",
      upvotes: ""
    };
  }

  // componentDidMount() {
  //   console.log(this.props);
  //   var id = this.props.match.params.id;
  //   var self = this;

  //   getNewsPost(id).then(function(newsPost) {
  //     self.setState({
  //       id: newsPost._id,
  //       title: newsPost.title,
  //       body: newsPost.body,
  //       postedOn: newsPost.timestamp,
  //       comments: newsPost.comment,
  //       commentBody: "",
  //       upvotes: newsPost.upvotes
  //     });
  //   });
  // }

  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

export default ShowNewsPage;
