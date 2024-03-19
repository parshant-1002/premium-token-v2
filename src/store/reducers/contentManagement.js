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
        default:
            return state;
    }
};

export default contentManagementReducer;
