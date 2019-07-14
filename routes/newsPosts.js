var express = require("express");
var router = express.Router();
var newsPostsController = require("../controllers/newsPosts");

/* GET /api/posts */
router.get("/", newsPostsController.getAllNewsPosts);
router.get("/:id", newsPostsController.getOneNewsPost);
router.post("/", newsPostsController.createNewsPost);
router.put("/:id/upvote", newsPostsController.upvoteNewsPost);
router.put("/:id/downvote", newsPostsController.downvoteNewsPost);
router.delete("/:id", newsPostsController.deleteNewsPost);
router.put("/:id", newsPostsController.updateNewsPost);
router.post("/:id/comments", newsPostsController.addComment);
// router.delete("/:id/commentId", newsPostsController.deleteComment);

module.exports = router;
