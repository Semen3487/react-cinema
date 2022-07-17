import { takelatest } from 'redux-saga';
import ACTIONS_TYPES from '../store/actions/actionsTypes';
import { recieveMoviesAction } from '../store/actions/moviesActions';


function* rootSaga(){
  yield takelatest(ACTIONS_TYPES.GET_MOVIES_ACTION, recieveMoviesAction);
};

export default rootSaga;