import { REHYDRATE } from "redux-persist";
import {  SET_BLOCKCHAIN_DATA, SET_CONTENT_REQUEST, SET_SOCKET_DATA } from "../constants";

const initialState = {
    homePageContent: {},
    socketContentData : {},
    blockChainData:{}
};

const contentManagementReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONTENT_REQUEST:
            return {
                ...state,
                homePageContent: action.data
            };
        case SET_SOCKET_DATA:
            return {
                ...state,
                socketContentData: action.data
            };
        case SET_BLOCKCHAIN_DATA:
            return {
                ...state,
                blockChainData: action.data
            };
        case REHYDRATE:
            let persistedHomePageContent =
                ((action.payload || {}).contentManagementReducer || {}).homePageContent || initialState.homePageContent;
                
            return {
                ...state,
                homePageContent: persistedHomePageContent
            };
        default:
            return state;
    }
};

export default contentManagementReducer;
