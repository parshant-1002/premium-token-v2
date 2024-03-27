import { REHYDRATE } from "redux-persist";
import {  SET_CONTENT_REQUEST } from "../constants";

const initialState = {
    homePageContent: {}
};

const contentManagementReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONTENT_REQUEST:
            return {
                ...state,
                homePageContent: action.data
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
