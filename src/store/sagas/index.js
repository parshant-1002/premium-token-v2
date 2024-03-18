// sagas/index.js
import { all } from 'redux-saga/effects';
import globalLoaderSaga from './globalLoaderSaga';
import AuthSaga from './auth';

function* rootSaga() {
  yield all([
    globalLoaderSaga(),
    AuthSaga(),
    // Add more sagas here if you have them
  ]);
}

export default rootSaga;
