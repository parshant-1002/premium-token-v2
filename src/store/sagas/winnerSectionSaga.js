import { all, put, takeEvery } from "redux-saga/effects";
import { API_METHODS, API_URLS, STATUS, STATUS_CODES } from "../../shared/constants";
import { CHECK_IS_WINNER, WINNER_CLAIM_PRIZE } from "../constants";
import { startLoading, stopLoading } from "../actions/globalLoaderActions";
import axios from '../../shared/apis/axiosInterceptor';

function* checkIfUserIsWinner({ payload, callback = () => { } }) {
    console.log(payload,"payload")
    try {
        yield put(startLoading());
        const { data, status } = yield axios({
            method: API_METHODS.GET,
            url: `${API_URLS.CHECK_IS_WINNER}`,
            params: { ...payload }
        });
        console.log(status,"in saga")
        if (status !== STATUS_CODES.SUCCESS) {
            yield put(stopLoading());
            callback(data.msg, STATUS.ERROR);
        } else {
            callback(data, STATUS.SUCCESS);
            yield put(stopLoading());
        }
    } catch (error) {
        console.log(error,"error")
        yield put(stopLoading());
        callback('SOMETHING WENT WRONG', STATUS.ERROR);
    } finally {
        yield put(stopLoading());
    }
}

function* winnerClaimPrize({ payload, callback = () => { } }) {
    try {
        yield put(startLoading());
        const { data, status } = yield axios({
            method: API_METHODS.POST,
            url: `${API_URLS.POST_PRIZE_SELECTION_DATA}`,
            data: { ...payload }
        });
        if (status !== STATUS_CODES.SUCCESS) {
            yield put(stopLoading());
            callback(data.message, STATUS.ERROR);
        } else {
            callback(data.message, STATUS.SUCCESS);
            yield put(stopLoading());
        }
    } catch (error) {
        console.log(error, "error")
        yield put(stopLoading());
        callback('SOMETHING WENT WRONG', STATUS.ERROR);
    } finally {
        yield put(stopLoading());
    }
}


function* WinnerSectionSaga() {
    yield all([takeEvery(CHECK_IS_WINNER, checkIfUserIsWinner)]);
    yield all([takeEvery(WINNER_CLAIM_PRIZE, winnerClaimPrize)]);
}

export default WinnerSectionSaga;