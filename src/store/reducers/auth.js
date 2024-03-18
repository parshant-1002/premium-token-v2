import { REHYDRATE } from "redux-persist";
import { updateAuthToken } from "../../shared/apis/axiosInterceptor";
import { LOGIN_SUCCESS, LOGOUT_REQUEST, SET_DEVICE_TOKEN, SET_USER_DATA, UPDATE_USER_DATA } from "../constants";
const initialCommonState = {
  access_token: null,
  isLoading: false,
  userData: {
    name: "",
    username: "",
    email: "",
    _id: ""
  },
  rememberUserData: {
    rememberMe: false,
    email: "",
    password: "",
  },
  deviceToken: "",
  specialCashback: false
};

const AuthReducer = (state = { ...initialCommonState }, action) => {
  switch (action.type) {
    case LOGOUT_REQUEST:
      return {
        ...state,
        access_token: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        access_token: action.data,
      };
    case SET_USER_DATA:
      return {
        ...state,
        userData: {
          ...state.userData,
          ...action.data,
          name: action.data.name,
          imagePath: action.data.imagePath
        },
      };

    case UPDATE_USER_DATA: {
      return {
        ...state,
        userData: {
          ...state.userData,
          notificationClearAt: action.data.notificationClearAt,
          name: action.data.name,
          imagePath: action.data.imagePath,
        },
      };
    }
    case SET_DEVICE_TOKEN:
      return {
        ...state,
        deviceToken: action.data,
      };
    case REHYDRATE:
      let common =
        ((action || {}).payload || {}).AuthReducer || initialCommonState;
      common.access_token && updateAuthToken(common.access_token || "");
      return {
        ...state,
        access_token: common.access_token,
        userData: common.userData,
        ...(action.payload || {}).common,
      };
    default:
      return state;
  }
};

export const getDeviceToken = (state) => state.AuthReducer.deviceToken;

export default AuthReducer;
