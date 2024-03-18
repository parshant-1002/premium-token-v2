// sagas/index.js
import { all } from 'redux-saga/effects';
import globalLoaderSaga from './globalLoaderSaga';
import AuthSaga from './auth';
import ContentManagementSaga from './contentManagement';

function* rootSaga() {
  yield all([
    globalLoaderSaga(),
    AuthSaga(),
    ContentManagementSaga()
    // Add more sagas here if you have them
  ]);
}

export default rootSaga;
