import { combineReducers } from "redux";
import PostsReducer from "./posts/posts.reducer";

const rootReducer = combineReducers({
  posts: PostsReducer,
});

export default rootReducer;
