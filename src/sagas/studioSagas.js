import { put } from 'redux-saga/effects';

import cinemaService from '../cinema-service';
import { 
  createStudioError,
  createStudioRequest,
  createStudioSuccess,
  deleteStudioError,
  deleteStudioRequest,
  deleteStudioSuccess,
  getAllStudiosError,
  getAllStudiosRequest, 
  getAllStudiosSuccess, 
  updateStudioError, 
  updateStudioRequest,
  updateStudioSuccess
} from '../store/actions/studioActions';



export function* getAllStudiosSaga(){
  yield put(getAllStudiosRequest());
  try {
    const studios = yield cinemaService.get('/studios')
      .then(({data}) => data);
    yield put(getAllStudiosSuccess(studios));
  } catch (error) {
    yield put(getAllStudiosError(error));
  }
};

export function* createStudioSaga({payload}){
  yield put(createStudioRequest());
  try {
    const newStudio = yield cinemaService.post(`/studios`, payload)
      .then(({data}) => data);
    yield put(createStudioSuccess(newStudio));
  } catch (error) {
    yield put(createStudioError(error));
  }
};

export function* updateStudioSaga({payload}){
  yield put(updateStudioRequest());
  try {
    const updatedStudio = yield cinemaService.put(`/studios/${payload.id}`, payload)
      .then(({data}) => data);
    yield put(updateStudioSuccess(updatedStudio));
  } catch (error) {
    yield put(updateStudioError(error));
  }
};

export function* deleteStudioSaga({payload}){
  yield put(deleteStudioRequest());
  try {
    yield cinemaService.delete(`/studios/${payload}`)
    yield put(deleteStudioSuccess(payload));
  } catch (error) {
    yield put(deleteStudioError(error));
  }
};