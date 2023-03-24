import {
  RECEIVE_USERS,
  SET_QUESTION_ANSWER,
  SET_USER_TO_QUESTION,
} from "../actions/actionTypes";

const users = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case SET_QUESTION_ANSWER:
      const { authedUser, qid, answer } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer,
          },
        },
      };
    case SET_USER_TO_QUESTION:
      const { id, author } = action;
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat(id),
        },
      };

    default:
      return state;
  }
};

export default users;
