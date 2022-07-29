import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from '@redux-saga/core';

import rootReducer from './reducers';
import rootSaga from '../sagas'


const sagaMiddleweare = createSagaMiddleware();

const middleweare = applyMiddleware(sagaMiddleweare, logger);

export default createStore(rootReducer, composeWithDevTools(middleweare));

sagaMiddleweare.run(rootSaga);