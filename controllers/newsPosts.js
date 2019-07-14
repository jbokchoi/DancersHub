const newsPost = require("../models/NewsPost");
const User = require("../models/User");

module.exports = {
  getAllNewsPosts,
  getOneNewsPost,
  createNewsPost,
  deleteNewsPost,
  updateNewsPost,
  upvoteNewsPost,
  addComment,
  // deleteComment,
  downvoteNewsPost
};

function updateNewsPost(req, res) {
  newsPost
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(function(newsPost) {
      res.status(200).json(newsPost);
    });
}

function deleteNewsPost(req, res) {
  newsPost.findByIdAndRemove(req.params.id).then(function(newsPost) {
    res.status(200).json(newsPost);
  });
}

function getOneNewsPost(req, res) {
  console.log("got a news story!");
  newsPost
    .findById(req.params.id)
    .populate("postedByUser")
    .populate("comments.postedByUser")
    .then(function(newsPost) {
      res.status(200).json(newsPost);
    });
}

function createNewsPost(req, res) {
  console.log("HELLO create controller hit", req.user);
  console.log(req.user._id);
  User.findById(req.user._id).exec(function(err, user) {
    console.log("user found");
    newsPost.create(req.body, function(err, newsPost) {
      newsPost.postedByUser = user._id;
      newsPost.save();
      res.status(201).json(newsPost);
    });
  });
}

function getAllNewsPosts(req, res) {
  console.log("HELLO");
  newsPost.find({}).then(function(newsPosts) {
    console.log(newsPosts);
    res.status(200).json(newsPosts);
  });
}

function upvoteNewsPost(req, res) {
  newsPost.findById(req.params.id).then(function(newsPost) {
    newsPost.upvotes += 1;
    newsPost.save(function(newsPost) {
      res.status(200).json(newsPost);
    });
  });
}

function downvoteNewsPost(req, res) {
  newsPost.findById(req.params.id).then(function(newsPost) {
    newsPost.upvotes -= 1;
    newsPost.save(function(newsPost) {
      res.status(200).json(newsPost);
    });
  });
}

function addComment(req, res) {
  newsPost.findById(req.params.id).then(function(newsPost) {
    newsPost.comments.unshift(req.body);
    newsPost.save(function(newsPost) {
      res.status(200).json(newsPost);
    });
  });
}

// function deleteComment(req, res) {
//   newsPost.findById(req.params.newsPostId).then(function(newsPost) {
//     newsPost.comments.id(req.params.commentId).remove();
//     newsPost.save(function(newsPost) {
//       res.status(200).json(newsPost);
//     });
//   });
// }
