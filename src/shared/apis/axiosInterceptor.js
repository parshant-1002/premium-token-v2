import axios from "axios";
import { toast } from 'react-toastify';

// consts
import { API, STATUS_CODES } from "../constants";


const defaultHeader = {
  headers: {
    "content-type": "application/json",
  },
};

const createInstance = (baseURL, headers) => {
  const instance = axios.create({
    baseURL,
    timeout: 15000,
    headers,
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === STATUS_CODES.UNAUTHOURISED) {
        try {
          // Unauthorized, log the user out
          updateAuthToken("");
        //   store.dispatch(resetReducerData());
        //   store.dispatch(resetWalletData());
        } catch (e) {
          console.log("error in interceptor:", e);
        }
      }
      if(error?.message){
        toast.error(error?.message);
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

const instance = createInstance(API.BASE_URL, defaultHeader.headers);

export const updateAuthToken = (token = "") => {
  instance.defaults.headers = {
    ...instance.defaults.headers,
    ...(token ? { authorization: token } : {}),
  };
  if (!token) {
    delete instance?.defaults?.headers?.authorization;
  }
};

export default instance;
