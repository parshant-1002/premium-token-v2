import { GLOBAL_LOADER } from '../constants/loader';

export const setLoader = (payload) => ({
    type: GLOBAL_LOADER.SET_LOADER,
    payload,
});
export const startLoading = () => ({
  type: GLOBAL_LOADER.START_LOADING,
});

export const stopLoading = () => ({
  type: GLOBAL_LOADER.STOP_LOADING,
});
