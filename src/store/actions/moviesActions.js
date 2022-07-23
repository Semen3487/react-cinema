import ACTIONS_TYPES from "./actionsTypes";

//* get all
export const getAllMoviesAction = () => {
  return {
    type: ACTIONS_TYPES.GET_MOVIES_ACTION,
  }
};
export const getAllMoviesRequest = () => {
  return {
    type: ACTIONS_TYPES.GET_MOVIES_REQUEST,
  }
};
export const getAllMoviesSuccess = (payload) => {
  return {
    type: ACTIONS_TYPES.GET_MOVIES_ACTION,
    payload
  }
};
export const getAllMoviesError = (payload) => {
  return {
    type: ACTIONS_TYPES.GET_MOVIES_ACTION,
    payload
  }
};

//* create
export const createMovieAction = (payload) => {
  return {
    type: ACTIONS_TYPES.POST_MOVIE_ACTION,
    payload
  }
};
export const createMovieRequest = () => {
  return {
    type: ACTIONS_TYPES.POST_MOVIE_REQUEST,
  }
};
export const createMovieSuccess = (payload) => {
  return {
    type: ACTIONS_TYPES.POST_MOVIE_SUCCESS,
    payload
  }
};
export const createMovieError = (payload) => {
  return {
    type: ACTIONS_TYPES.POST_MOVIE_ERROR,
    payload
  }
};

//* update
export const updateMovieAction = (payload) => {
  return {
    type: ACTIONS_TYPES.POST_MOVIE_ACTION,
    payload
  }
};
export const updateMovieRequest = () => {
  return {
    type: ACTIONS_TYPES.POST_MOVIE_REQUEST,
  }
};
export const updateMovieSuccess = (payload) => {
  return {
    type: ACTIONS_TYPES.POST_MOVIE_SUCCESS,
    payload
  }
};
export const updateMovieError = (payload) => {
  return {
    type: ACTIONS_TYPES.POST_MOVIE_ERROR,
    payload
  }
};

//* delete
export const deleteMovieAction = (payload) => {
  return {
    type: ACTIONS_TYPES.DELETE_MOVIE_ACTION,
    payload
  }
};
export const deleteMovieRequest = () => {
  return {
    type: ACTIONS_TYPES.DELETE_MOVIE_REQUEST,
  }
};
export const deleteMovieSuccess = (payload) => {
  return {
    type: ACTIONS_TYPES.DELETE_MOVIE_SUCCESS,
    payload
  }
};
export const deleteMovieError = (payload) => {
  return {
    type: ACTIONS_TYPES.DELETE_MOVIE_ERROR,
    payload
  }
};