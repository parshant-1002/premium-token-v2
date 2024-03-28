import { CREATE_AIRDROP_REQUEST, GET_BLOCKCHAIN_DATA, GET_CONTENT_REQUEST, GET_WINNERS_LIST, SET_BLOCKCHAIN_DATA, SET_CONTENT_REQUEST, SET_SOCKET_DATA } from "../constants";

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

export const getBlockChainData = (callback) =>({
    type: GET_BLOCKCHAIN_DATA,
    callback,
}
)

export const setSocketData = (data) => ({
    type: SET_SOCKET_DATA,
    data
}
)

export const setBlockChainData = (data) => ({
    type: SET_BLOCKCHAIN_DATA,
    data
}
)