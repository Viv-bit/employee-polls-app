import { hideLoading, showLoading } from "react-redux-loading";
import { RECEIVE_USERS, SET_USER_TO_QUESTION } from "./actionTypes";

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users,
  };
};

export const handleQuestionToUser = ({ author, id }) => {
  return {
    type: SET_USER_TO_QUESTION,
    id,
    author,
  };
};
