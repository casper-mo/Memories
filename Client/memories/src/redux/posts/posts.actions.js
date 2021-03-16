import postActionsTypes from "./posts.types";
import * as api from "../../api/index";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: postActionsTypes.FETCH_ALL_POSTS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: postActionsTypes.CREATE_POST, payload: data });
  } catch (error) {
    console.log("error when create post=>", error.message);
  }
};

export const updatePost = (currentId, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(currentId, post);
    dispatch({ type: postActionsTypes.UPDATE_POST, payload: data });
  } catch (error) {
    console.log("error when update post=>", error.message);
  }
};

export const deltetPost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: postActionsTypes.DELETEPOST, payload: id });
  } catch (error) {
    console.log("error when delete post=>", error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: postActionsTypes.LIKEPOST, payload: data });
  } catch (error) {
    console.log("error when update like post=>", error.message);
  }
};
