import { CREATE_AIRDROP_REQUEST, GET_CONTENT_REQUEST, GET_WINNERS_LIST, SET_CONTENT_REQUEST } from "../constants";

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

export const getWinners = (payload, callback) =>{
    console.log(payload,"payload<><><>>< in action ")
    return {
    type: GET_WINNERS_LIST,
    payload,
    callback,
}}

export const createAirDrop = (payload, callback) => (
    {
        type: CREATE_AIRDROP_REQUEST,
        payload,
        callback,
    }
)