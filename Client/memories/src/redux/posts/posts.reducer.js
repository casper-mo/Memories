import PostsTypes from "./posts.types";

const initialState = [];

const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PostsTypes.FETCH_ALL_POSTS:
      console.log("payload", payload);
      return payload;
    case PostsTypes.CREATE_POST:
      return [...state, payload];
    case PostsTypes.UPDATE_POST:
    case PostsTypes.LIKEPOST:
      return state.map((post) => {
        console.log("payload._id=>", payload);
        console.log("post=>", post);
        if (post._id === payload._id) {
          return payload;
        } else return post;
      });

    case PostsTypes.DELETEPOST:
      return state.filter((post) => post._id !== payload);
    default:
      return state;
  }
};
export default postsReducer;
