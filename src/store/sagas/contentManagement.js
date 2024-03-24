import { all, put, takeEvery } from "redux-saga/effects";
import { API_METHODS, API_URLS, STATUS, STATUS_CODES } from "../../shared/constants";
import { startLoading, stopLoading } from "../actions/globalLoaderActions";
import { CREATE_AIRDROP_REQUEST, GET_BLOCKCHAIN_DATA, GET_CONTENT_REQUEST, GET_WINNERS_LIST } from "../constants";
import axios from "../../shared/apis/axiosInterceptor";
import { setContent } from "../actions/contentManagement";

function* getContent({ payload, callback = ()=>{} }) {
    try {
        yield put(startLoading());
        const { data, status } = yield axios({
            method: API_METHODS.GET,
            url: `${API_URLS.GET_CONTENT}`,
            // data: { ...payload }
        });
        if (status !== STATUS_CODES.SUCCESS) {
            yield put(stopLoading());
            callback(data.msg, STATUS.ERROR);
        } else {
            callback(data.data, STATUS.SUCCESS);
            // yield put(setContent(data.data));
            yield put(stopLoading());
        }
    } catch (error) {
        yield put(stopLoading());
        callback('SOMETHING WENT WRONG', STATUS.ERROR);
    } finally {
        yield put(stopLoading());
    }
}

function* getWinnerList({ payload, callback = () => { } }) {
    try {
        yield put(startLoading());
        const { data, status } = yield axios({
            method: API_METHODS.GET,
            url: `${API_URLS.GET_WINNER_LIST}`,
            params: { ...payload }
        });
        if (status !== STATUS_CODES.SUCCESS) {
            yield put(stopLoading());
            callback(data.msg, STATUS.ERROR);
        } else {
            callback(data.winner, STATUS.SUCCESS);
            yield put(stopLoading());
        }
    } catch (error) {
        yield put(stopLoading());
        callback('SOMETHING WENT WRONG', STATUS.ERROR);
    } finally {
        yield put(stopLoading());
    }
}
function* createAirDrop({ payload, callback = () => { } }) {
    try {
        yield put(startLoading());
        const { data, status } = yield axios({
            method: API_METHODS.POST,
            url: `${API_URLS.CREATE_AIRDROP_REQUEST}`,
            data: { ...payload }
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

function* getBlockChainData({  callback = () => { } }) {
    try {
        yield put(startLoading());
        const { data, status } = yield axios({
            method: API_METHODS.GET,
            url: `${API_URLS.GET_BLOCKCHAIN_DATA}`,
        });
        if (status !== STATUS_CODES.SUCCESS) {
            yield put(stopLoading());
            callback(data.msg, STATUS.ERROR);
        } else {
            callback(data.data, STATUS.SUCCESS);
            yield put(stopLoading());
        }
    } catch (error) {
        yield put(stopLoading());
        callback('SOMETHING WENT WRONG', STATUS.ERROR);
    } finally {
        yield put(stopLoading());
    }
}


function* ContentManagementSaga() {
    yield all([takeEvery(GET_CONTENT_REQUEST, getContent)]);
    yield all([takeEvery(GET_WINNERS_LIST, getWinnerList)]);
    yield all([takeEvery(CREATE_AIRDROP_REQUEST, createAirDrop)]);
    yield all([takeEvery(GET_BLOCKCHAIN_DATA, getBlockChainData)]);
}

export default ContentManagementSaga;