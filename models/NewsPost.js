const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    body: String,
    postedByUser: { type: Schema.Types.ObjectId, ref: "User" }
  },
  {
    timestamps: true
  }
);

const NewsPostSchema = new Schema(
  {
    title: String,
    body: String,
    upvotes: {
      type: Number,
      default: 0
    },
    comments: [commentSchema],
    postedByUser: { type: Schema.Types.ObjectId, ref: "User" }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("NewsPost", NewsPostSchema);
