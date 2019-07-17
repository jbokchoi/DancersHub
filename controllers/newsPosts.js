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
  deleteComment,
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
  newsPost
    .findById(req.params.id)
    .populate("postedByUser")
    .populate("comments.postedByUser")
    .then(function(newsPost) {
      res.status(200).json(newsPost);
    });
}

function createNewsPost(req, res) {
  User.findById(req.user._id).exec(function(err, user) {
    newsPost.create(req.body, function(err, newsPost) {
      newsPost.postedByUser = user._id;
      newsPost.save();
      res.status(201).json(newsPost);
    });
  });
}

function getAllNewsPosts(req, res) {
  newsPost
    .find({})
    .populate("postedByUser")
    .then(function(newsPosts) {
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
  User.findById(req.user._id).then(function(user) {
    newsPost.findById(req.params.id).then(function(newsPost) {
      req.body["postedByUser"] = user._id;
      newsPost.comments.unshift(req.body);
      newsPost.save(function(newsPost) {
        res.status(200).json(newsPost);
      });
    });
  });
}

function deleteComment(req, res) {
  newsPost.findById(req.params.newsPostId).then(function(newsPost) {
    newsPost.comments.forEach((c, i) => {
      if (c._id.toString() == req.params.commentId.toString()) {
        newsPost.comments.splice(i, 1);
        newsPost.save();
      }
    });

    newsPost.save(function(newsPost) {
      res.status(200).json(newsPost);
    });
  });
}
