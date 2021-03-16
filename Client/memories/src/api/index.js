import axios from "axios";
const URL = process.env.REACT_APP_API_URL;

export const fetchPosts = () => axios.get(URL);
export const createPost = (newPost) => axios.post(URL, newPost);
export const updatePost = (currentId, updatedPost) =>
  axios.patch(`${URL}/${currentId}`, updatedPost);

export const deletePost = (_id) => axios.delete(`${URL}/${_id}`);
export const likePost = (_id) => axios.patch(`${URL}/${_id}/likePost`);
