import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
  // Profile Information
  displayName: {
    type: String,
    required: true,
    trim: true,
  },

  creatorEmail: {
    type: String,
    required: true,
    trim: true,
  },

  profilePhotoURL: {
    type: String,
    required: true,
    trim: true,
  },

  // Articles Information
  articleTitle: {
    type: String,
    required: true,
    trim: true,
  },

  articleContent: {
    type: String,
    required: true,
    trim: true,
  },

  articleThumbnail: {
    type: String,
    required: true,
    trim: true,
  },

  articleTags: {
    type: [String],
    required: true,
    default: [],
  },

  articleCategory: {
    type: String,
    required: true,
    enum: [
      "Artificial-Intelligence",
      "Cybersecurity",
      "Cloud-Computing",
      "Internet-of-Things",
      "Blockchain-Technology",
      "Augmented-Reality",
      "Robotics",
      "Software-Development",
      "Quantum-Computing",
    ],
  },

  articleLikes: {
    type: [
      {
        userEmail: { type: String, required: true, trim: true },
        LikeStatus: { type: Boolean, default: false, required: true },
      },
    ],
    default: [],
  },

  totalArticleLike: {
    type: Number,
    default: 0,
  },

  articleComments: {
    type: [
      {
        userEmail: { type: String, trim: true },
        userName: { type: String, trim: true },
        userAvatar: { type: String, trim: true },
        comment: { type: String, trim: true, trim: true },
        createdAt: { type: Date, default: Date.now },
      },
    ],
    default: [],
  },

  totalArticleComment: {
    type: Number,
    default: 0,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ArticleModel = mongoose.model("Article", articleSchema);
// Tags (comma-separated or multi-select)(optional)
// comments
export default ArticleModel;
