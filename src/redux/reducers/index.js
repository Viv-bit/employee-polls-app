import { combineReducers } from "redux";
import { loadingBarReducer as loadingBar } from "react-redux-loading";
import authenticatedUser from "./authUser";
import users from "./users";
import questions from "./questions";

export default combineReducers({
  authenticatedUser,
  users,
  questions,
  loadingBar,
});
