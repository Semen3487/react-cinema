import ACTIONS_TYPES from '../actions/actionsTypes';

const initialState = {
  actors: [],
  isFetching: false,
  error: null,
};

export default function actorsReducer(state = initialState, {type, payload}){
  switch(type){
    case ACTIONS_TYPES.GET_ACTORS_SUCCESS: return {
      ...state, 
      isFetching: false,
      actors: [...payload]
    };
    case ACTIONS_TYPES.POST_ACTOR_SUCCESS: return {
      ...state, 
      isFetching: false,
      actors: [...state.actors, payload]
    };
    case ACTIONS_TYPES.PUT_ACTOR_SUCCESS: return {
      ...state, 
      isFetching: false,
      actors: state.actors.map((actor) => actor.id === payload.id ? payload : actor)
    };
    case ACTIONS_TYPES.DELETE_ACTOR_SUCCESS: return {
      ...state, 
      isFetching: false,
      actors: state.actors.filter((actor) => actor.id !== payload)
    };
    case ACTIONS_TYPES.GET_ACTORS_REQUEST:
    case ACTIONS_TYPES.POST_ACTOR_REQUEST:
    case ACTIONS_TYPES.PUT_ACTOR_REQUEST:
    case ACTIONS_TYPES.DELETE_ACTOR_REQUEST: return {
      ...state,
      isFetching: true
    };
    case ACTIONS_TYPES.GET_ACTORS_ERROR:
    case ACTIONS_TYPES.POST_ACTOR_ERROR:
    case ACTIONS_TYPES.PUT_ACTOR_ERROR:
    case ACTIONS_TYPES.DELETE_ACTOR_ERROR: return {
      ...state,
      isFetching: false,
      error: payload
    };
    
    default: return state;
  };
};