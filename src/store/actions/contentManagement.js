import { GET_CONTENT_REQUEST, SET_CONTENT_REQUEST } from "../constants";

export const getContent = (payload, callback)=>({
    type: GET_CONTENT_REQUEST,
        payload,
        callback,
})

export const setContent = (data, callback) => ({
    type: SET_CONTENT_REQUEST,
    data,
    callback,
})