import { combineReducers } from 'redux';
import globalLoaderReducer from './globalLoaderReducer';

const rootReducer = combineReducers({
  loader: globalLoaderReducer
});

export default rootReducer;
