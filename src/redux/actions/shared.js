import { getInitData } from "../../utils/API";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { showLoading, hideLoading } from "react-redux-loading";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading());
    });
  };
}
