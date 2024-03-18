import { takeEvery, all, put } from 'redux-saga/effects';
import { updateAuthToken } from '../../shared/apis/axiosInterceptor';
import { API, API_METHODS, STATUS, STATUS_CODES } from '../../shared/constants';
import { onLoginSuccess, setUserData } from '../actions/auth';
import { startLoading, stopLoading } from '../actions/globalLoaderActions';
import { CHANGE_PASSWORD_REQUEST, FORGOT_PASSWORD_REQUEST, LOGIN_REQUEST } from '../constants';

//request to authenticate email and password
function* loginAuthentication({ payload, callback }) {
    try {
        yield put(startLoading());
        const { data, status } = yield axios({
            method: API_METHODS.POST,
            url: `${API.LOGIN}`,
            data: { ...payload }
        });
        if (status !== STATUS_CODES.SUCCESS) {
            yield put(stopLoading());
            callback(data.msg, STATUS.ERROR);
        } else {
            yield put(onLoginSuccess(data.token));
            yield put(setUserData(data.data));
            updateAuthToken(data.token);
            yield put(stopLoading());
        }
    } catch (error) {
        yield put(stopLoading());
        callback('SOMETHING WENT WRONG', STATUS.ERROR);
    } finally {
        yield put(stopLoading());
    }
}

// forgot password

function* forgotPassword({ payload, callback }) {
    try {
        yield put(startLoading());
        const { data, status } = yield axios({
            method: API_METHODS.POST,
            API: `${API.FORGOT_PASSWORD}`,
            DATA: { ...payload }
        });
        if (status !== STATUS_CODES.SUCCESS) {
            yield put(stopLoading());
            callback(data.msg, STATUS.ERROR);
        } else {
            callback(data.msg, STATUS.SUCCESS);
            yield put(stopLoading());
        }
    } catch (error) {
        yield put(stopLoading());
        callback('SOMETHING WENT WRONG', STATUS.ERROR);
    } finally {
        yield put(stopLoading());
    }
}

// change password

function* updatePassword({ payload, callback }) {
    try {
      yield put(startLoading());
      const { data, status } = yield axios({
        method: API_METHODS.PUT,
            API: `${API.UPDATE_PASSWORD}`,
            DATA: { ...payload }
      });
      if (status !== STATUS_CODES.SUCCESS) {
        yield put(stopLoading());
        callback(data.msg, STATUS.ERROR);
      } else {
        callback(data.msg, STATUS.SUCCESS);
        yield put(stopLoading());
      }
    } catch (error) {
      yield put(stopLoading());
      callback('SOMETHING WENT WRONG', STATUS.ERROR);
    }
  }
  

function* AuthSaga() {
    yield all([takeEvery(LOGIN_REQUEST, loginAuthentication)]);
    yield all([takeEvery(FORGOT_PASSWORD_REQUEST, forgotPassword)]);
    yield all([takeEvery(CHANGE_PASSWORD_REQUEST, updatePassword)]);
}

export default AuthSaga;
