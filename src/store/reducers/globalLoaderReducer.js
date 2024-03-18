import { GLOBAL_LOADER } from "../constants/loader";

const initialState = {
    isLoading: false
};
  
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case GLOBAL_LOADER.START_LOADING:
        return {
          ...state,
          isLoading: true
        };
        case GLOBAL_LOADER.STOP_LOADING:
        return {
          ...state,
          isLoading: false
        };
      default:
        return state;
    }
  };
  
  export default counterReducer;
  