import { all, put, takeEvery } from "redux-saga/effects";
import { API_METHODS, API_URLS, STATUS } from "../../shared/constants";
import { CHECK_IS_WINNER } from "../constants";
import { stopLoading } from "../actions/globalLoaderActions";
import axios from '../../shared/apis/axiosInterceptor';

function* checkIfUserIsWinner({ payload, callback = () => { } }) {
    console.log("in saga")
    try {
        yield put(startLoading());
        const { data, status } = yield axios({
            method: API_METHODS.GET,
            url: `${API_URLS.CHECK_IS_WINNER}`,
            params: { ...payload }
        });
        if (status !== STATUS_CODES.SUCCESS) {
            yield put(stopLoading());
            callback(data.msg, STATUS.ERROR);
        } else {
            callback(data, STATUS.SUCCESS);
            yield put(stopLoading());
        }
    } catch (error) {
        yield put(stopLoading());
        callback('SOMETHING WENT WRONG', STATUS.ERROR);
    } finally {
        yield put(stopLoading());
    }
}

function* WinnerSectionSaga() {
    yield all([takeEvery(CHECK_IS_WINNER, checkIfUserIsWinner)]);
}

export default WinnerSectionSaga;