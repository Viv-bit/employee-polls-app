import { SET_AUTH_USER, RESET_USER } from "./actionTypes";

export const setAuthUser = (id) => {
  return {
    type: SET_AUTH_USER,
    id,
  };
};

export const handleSetAuthUser = () => {
  return {
    type: RESET_USER,
  };
};
