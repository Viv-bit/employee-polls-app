import { RESET_AUTH_USER, SET_AUTH_USER } from "../actions/actionTypes";

const authUser = (state = null, action) => {
  switch (action.type) {
    case SET_AUTH_USER:
      return action.id;
    case RESET_AUTH_USER:
      return null;
    default:
      return state;
  }
};

export default authUser;
