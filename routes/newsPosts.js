var express = require("express");
var router = express.Router();
var newsPostsController = require("../controllers/newsPosts");

/* GET /api/posts */
router.get("/newsPosts", newsPostsController.getAllnewsPosts);
router.get("/newsPosts/:id", newsPostsController.getOneNewsPost);
router.post("/newsPosts", newsPostsController.createNewsPost);
router.put("/newsPosts/:id/upvote", newsPostsController.upvoteNewsPost);
router.put("/newsPosts/:id/downvote", newsPostsController.downvoteNewsPost);
router.delete("/newsPosts/:id", newsPostsController.deleteNewsPost);
router.put("/newsPosts/:id", newsPostsController.updateNewsPost);
router.post("/newsPosts/:id/comments", newsPostsController.addComment);

module.exports = router;
