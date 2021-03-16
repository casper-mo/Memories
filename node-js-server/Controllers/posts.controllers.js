import { validationResult } from "express-validator";
import mongoose from "mongoose";
import PostMessage from "../Models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await PostMessage.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  if (!validationResult(req).array().length) {
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
      await newPost.save();
      res.status(201).json(newPost);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  } else {
    const errors = validationResult(req).array();
    res.status(400).json({ errors });
  }
};
export const updatePost = async (req, res) => {
  if (!validationResult(req).array().length) {
    const { id: _id } = req.params;
    const post = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).json("no post with that id");
    }
    const updatedPost = await PostMessage.findByIdAndUpdate(
      _id,
      { ...post, _id },
      {
        new: true,
      }
    );
    res.json(updatedPost);
  } else {
    const errors = validationResult(req).array();
    res.status(400).json({ errors });
  }
};

export const deletPost = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).json("no post with that id");
  try {
    await PostMessage.findByIdAndRemove(_id);
    console.log("deleted successfully");
    res.json("deleted successfully");
  } catch (error) {
    console.log("error when delete post", error.message);
  }
};

export const likePost = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).json("no post with that id");
  try {
    const post = await PostMessage.findById(_id);
    const updatePost = await PostMessage.findByIdAndUpdate(
      _id,
      { likeCount: post.likeCount + 1 },
      { new: true }
    );
    res.json(updatePost);
  } catch (error) {
    res.status(404).json({ message: error });
    console.log("error when update like Count", error.message);
  }
};
