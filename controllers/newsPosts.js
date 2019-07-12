const newsPost = require("../models/NewsPost");

module.exports = {
  getAllNewsPosts,
  getOneNewsPost,
  createNewsPost,
  deleteNewsPost,
  updateNewsPost,
  upvoteNewsPost,
  addComment,
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
  newsPost.findById(req.params.id).then(function(newsPost) {
    res.status(200).json(newsPost);
  });
}

function createNewsPost(req, res) {
  newsPost.create(req.body).then(function(newsPost) {
    res.status(201).json(newsPost);
  });
}

function getAllNewsPosts(req, res) {
  Post.find({}).then(function(newsPosts) {
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
    newsPost.comments.push(req.body);
    newsPost.save(function(newsPost) {
      res.status(200).json(newsPost);
    });
  });
}
