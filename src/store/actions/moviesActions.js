import ACTIONS_TYPES from "./actionsTypes";

//* get all
export const recieveMoviesAction = () => {
  return {
    type: ACTIONS_TYPES.GET_MOVIES_ACTION,
  }
};
export const recieveMoviesRequest = () => {
  return {
    type: ACTIONS_TYPES.GET_MOVIES_REQUEST,
  }
};
export const recieveMoviesSuccess = () => {
  return {
    type: ACTIONS_TYPES.GET_MOVIES_ACTION,
  }
};
export const recieveMoviesError = () => {
  return {
    type: ACTIONS_TYPES.GET_MOVIES_ACTION,
  }
};