import express from "express";
import { check } from "express-validator";
import {
  getPosts,
  createPost,
  updatePost,
  deletPost,
  likePost,
} from "../Controllers/posts.controllers.js";
const router = express.Router();

router.get("/", getPosts);
router.post(
  "/",
  check("creator").not().isEmpty().withMessage("creator is required"),
  check("title").not().isEmpty().withMessage("title is required"),
  check("message").not().isEmpty().withMessage("message is required"),
  check("tags").not().isEmpty().withMessage("tags is required"),
  check("selectedFile").not().isEmpty().withMessage("file is required"),
  createPost
);
router.patch(
  "/:id",
  check("creator").not().isEmpty().withMessage("creator is required"),
  check("title").not().isEmpty().withMessage("title is required"),
  check("message").not().isEmpty().withMessage("message is required"),
  check("tags").not().isEmpty().withMessage("tags is required"),
  check("selectedFile").not().isEmpty().withMessage("file is required"),
  updatePost
);
router.delete("/:id", deletPost);
router.patch("/:id/likePost", likePost);
export default router;
