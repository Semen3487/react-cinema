import ACTIONS_TYPES from '../actions/actionsTypes';

const initialState = {
  movies: [],
  isFetching: false,
  error: null,
};

export default function moviesReducer(state = initialState, {type, payload}){
  switch(type){
    case ACTIONS_TYPES.GET_MOVIES_SUCCESS: return {
      ...state, 
      movies: [...payload],
      isFetching: false
    };
    case ACTIONS_TYPES.POST_MOVIE_SUCCESS: return {
      ...state, 
      isFetching: false,
      movies: [...state.movies, payload]
    };
    case ACTIONS_TYPES.PUT_MOVIE_SUCCESS: return {
      ...state, 
      isFetching: false,
      movies: state.movies.map((movie) => movie.id === payload.id ? payload : movie)
    };
    case ACTIONS_TYPES.DELETE_MOVIE_SUCCESS: return {
      ...state, 
      isFetching: false,
      movies: state.movies.filter((movie) => movie.id !== payload)
    };
    case ACTIONS_TYPES.GET_MOVIES_REQUEST:
    case ACTIONS_TYPES.POST_MOVIE_REQUEST:
    case ACTIONS_TYPES.PUT_MOVIE_REQUEST:
    case ACTIONS_TYPES.DELETE_MOVIE_REQUEST: return {
      ...state,
      isFetching: true
    };
    case ACTIONS_TYPES.GET_MOVIES_ERROR:
    case ACTIONS_TYPES.POST_MOVIE_ERROR:
    case ACTIONS_TYPES.PUT_MOVIE_ERROR:
    case ACTIONS_TYPES.DELETE_MOVIE_ERROR: return {
      ...state,
      isFetching: false,
      error: payload
    };
    
    default: return state;
  };
};