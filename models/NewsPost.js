var mongoose = require("mongoose");

var NewsPostSchema = new mongoose.Schema(
  {
    title: String,
    body: String,
    upvotes: {
      type: Number,
      default: 0
    },
    // comments: [commentSchema],
    postedByUser: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  },
  {
    timestamps: true
  }
);

var commentSchema = new mongoose.Schema(
  {
    body: String,
    postedByUser: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("NewsPost", NewsPostSchema);
