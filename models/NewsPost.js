var mongoose = require("mongoose");

var NewsPostSchema = new mongoose.Schema(
  {
    title: String,
    body: String,
    upvotes: {
      type: Number,
      default: 0
    },
    comments: [CommentSchema],
    postedByMember: { type: Schema.Types.ObjectId, ref: "MemberProfile" },
    postedByCompany: {
      type: Schema.Types.ObjectId,
      ref: "CompanyMemberProfile"
    }
  },
  {
    timestamps: true
  }
);

var CommentSchema = new mongoose.Schema(
  {
    body: String,
    postedByMember: { type: Schema.Types.ObjectId, ref: "MemberProfile" },
    postedByCompany: {
      type: Schema.Types.ObjectId,
      ref: "CompanyMemberProfile"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("NewsPost", NewsPostSchema);
