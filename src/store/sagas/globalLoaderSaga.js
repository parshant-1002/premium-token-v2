import { takeLatest, all, put } from 'redux-saga/effects';
import { GLOBAL_LOADER } from '../constants/loader';
import { startLoading, stopLoading } from '../actions/globalLoaderActions';
import axios from '../../shared/apis/axiosInterceptor';
import { API, API_METHODS } from '../../shared/constants';

function* setLoader({ payload }) {
    if (payload) {
        yield put(startLoading());
        try {
            yield put(startLoading());
            const { data } = yield axios({
                method: API_METHODS.GET,
                url: API.GET_DATA,
                data: { ...payload }
            });
        } catch (error) {
            yield put(stopLoading());
        } finally {
            yield put(stopLoading());
        }
    }
}

function* globalLoaderSaga() {
    yield all([takeLatest(GLOBAL_LOADER.SET_LOADER, setLoader)]);
}

export default globalLoaderSaga;
