import { all, put, takeEvery } from "redux-saga/effects";
import { API_METHODS, API_URLS, STATUS, STATUS_CODES } from "../../shared/constants";
import { startLoading, stopLoading } from "../actions/globalLoaderActions";
import { GET_CONTENT_REQUEST } from "../constants";
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
            console.log(data,"data<><><><><")
            yield put(setContent(data.data));
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
}

export default ContentManagementSaga;