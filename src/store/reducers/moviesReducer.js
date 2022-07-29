import ACTIONS_TYPES from '../actions/actionsTypes';

const initialState = {
  movies: [
    // {
    //   id: 1,
    //   title: "Indiana Johns",
    //   directorId: 1,
    //   actorId: 1,
    //   studioId: 1,
    //   poster: "https://upload.wikimedia.org/wikipedia/ru/thumb/8/8b/IJandCrystalSkull.jpg/220px-IJandCrystalSkull.jpg"
    // },
    // {
    //   id: 2,
    //   title: "Alien",
    //   directorId: 2,
    //   actorId: 3,
    //   studioId: 2,
    //   poster: "https://upload.wikimedia.org/wikipedia/ru/thumb/c/c3/Alien_movie_poster.jpg/232px-Alien_movie_poster.jpg"
    // },
    
  ],
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