import { takelatest } from 'redux-saga/effects';

import ACTIONS_TYPES from '../store/actions/actionsTypes';
import { 
  createActorSaga, 
  deleteActorSaga, 
  getAllActorsSaga, 
  updateActorSaga
} from './actorSagas';
import { 
  createDirectorSaga, 
  deleteDirectorSaga, 
  getAllDirectorsSaga, 
  updateDirectorSaga
} from './directorSagas';
import { 
  createMovieSaga, 
  deleteMovieSaga, 
  getAllMoviesSaga, 
  updateMovieSaga
} from './moviesSagas';
import { 
  createStudioSaga, 
  deleteStudioSaga, 
  getAllStudiosSaga, 
  updateStudioSaga 
} from './studioSagas';


function* rootSaga(){
  //* movies
  yield takelatest(ACTIONS_TYPES.GET_MOVIES_ACTION, getAllMoviesSaga);
  yield takelatest(ACTIONS_TYPES.POST_MOVIE_ACTION, createMovieSaga);
  yield takelatest(ACTIONS_TYPES.PUT_MOVIE_ACTION, updateMovieSaga);
  yield takelatest(ACTIONS_TYPES.DELETE_MOVIE_ACTION, deleteMovieSaga);
  //* actors
  yield takelatest(ACTIONS_TYPES.GET_ACTORS_ACTION, getAllActorsSaga);
  yield takelatest(ACTIONS_TYPES.POST_ACTOR_ACTION, createActorSaga);
  yield takelatest(ACTIONS_TYPES.PUT_ACTOR_ACTION, updateActorSaga);
  yield takelatest(ACTIONS_TYPES.DELETE_ACTOR_ACTION, deleteActorSaga);
  //* directors
  yield takelatest(ACTIONS_TYPES.GET_DIRECTORS_ACTION, getAllDirectorsSaga);
  yield takelatest(ACTIONS_TYPES.POST_DIRECTOR_ACTION, createDirectorSaga);
  yield takelatest(ACTIONS_TYPES.PUT_DIRECTOR_ACTION, updateDirectorSaga);
  yield takelatest(ACTIONS_TYPES.DELETE_DIRECTOR_ACTION, deleteDirectorSaga);
  //* studios
  yield takelatest(ACTIONS_TYPES.GET_STUDIOS_ACTION, getAllStudiosSaga);
  yield takelatest(ACTIONS_TYPES.POST_STUDIO_ACTION, createStudioSaga);
  yield takelatest(ACTIONS_TYPES.PUT_STUDIO_ACTION, updateStudioSaga);
  yield takelatest(ACTIONS_TYPES.DELETE_STUDIO_ACTION, deleteStudioSaga);

};

export default rootSaga;