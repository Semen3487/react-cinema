import { put } from 'redux-saga';
import { recieveMoviesError, recieveMoviesRequest, recieveMoviesSuccess } from '../store/actions/moviesActions';
import cinemaService from '../cinema-service';


export function* getMoviesSaga(){
  yield put(recieveMoviesRequest());
  try {
    const movies = yield cinemaService.get('/movies')
      .then(({data}) => data);
    yield put(recieveMoviesSuccess(movies));
  } catch (error) {
    yield put(recieveMoviesError(error));
  }
}