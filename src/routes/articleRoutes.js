import express from "express";
import * as articleController from "../controllers/articleController.js";
import { verifyFirebaseToken } from "../middleware/verifyToken.js";

const router = express.Router();

// Route to recent articles
router.get("/articles/recent-articles", articleController.getRecentArticles);

// Route to get  articles by Category
router.get(
  "/articles/Category/:slug",

  articleController.articlesByCategory
);

// Route to get all articles
router.get("/articles", articleController.getAllArticles);

// Route to get single article by id
router.get(
  "/articles/:id",
  verifyFirebaseToken,
  articleController.getArticlesById
);

// Route to get  articles by email
router.get(
  "/my-articles/:email",
  verifyFirebaseToken,
  articleController.getAllArticlesByEmail
);

// Route to get  total likes by email
router.get(
  "/my-articles/total-likes/:email",
  verifyFirebaseToken,
  articleController.creatorTotalLikes
);

// Route to get  total Articles by email
router.get(
  "/my-articles/total-articles/:email",
  verifyFirebaseToken,
  articleController.creatorTotalArticles
);

// Route to get  total comments by email
router.get(
  "/my-articles/total-comments/:email",
  verifyFirebaseToken,
  articleController.creatorTotalComments
);

// Route to create article
router.post("/articles", verifyFirebaseToken, articleController.addNewArticle);

// Route to update
router.put(
  "/my-articles/:id",
  verifyFirebaseToken,
  articleController.updateArticle
);

// Route to like / Dislike
router.patch(
  "/articles/like/:id",
  verifyFirebaseToken,
  articleController.likeArticle
);

// Route to Comment
router.patch(
  "/articles/comment/:id",
  verifyFirebaseToken,
  articleController.commentArticle
);

// Route to delete  articles by email
router.delete(
  "/my-articles/:id",
  verifyFirebaseToken,
  articleController.deleteArticle
);

export default router;
