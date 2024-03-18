import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_REQUEST, SET_USER_DATA, UPDATE_USER_DATA } from "../constants";

  
  export const LoginRequest = (data, callback) => {
    return {
      type: LOGIN_REQUEST,
      data,
      callback,
    };
  };
  
  export const LogoutRequest = () => {
    return {
      type: LOGOUT_REQUEST,
    };
  };
  
  export const setUserData = (data) => {
    return {
      type: SET_USER_DATA,
      data,
    };
  };
  
  export const updateUserData = (data) => {
    return {
      type: UPDATE_USER_DATA,
      data,
    };
  };
  
  export const onLoginSuccess = (data) => {
    return {
      type: LOGIN_SUCCESS,
      data,
    };
  };
  

  