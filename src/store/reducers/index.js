import { combineReducers } from 'redux';
import globalLoaderReducer from './globalLoaderReducer';
import contentManagementReducer from './contentManagement';

const rootReducer = combineReducers({
  loader: globalLoaderReducer,
  contentManagementReducer: contentManagementReducer
});

export default rootReducer;
