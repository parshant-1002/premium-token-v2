import { combineReducers } from 'redux';
import globalLoaderReducer from './globalLoaderReducer';
import contentManagementReducer from './contentManagement';

const rootReducer = combineReducers({
  loader: globalLoaderReducer,
  homePageContent: contentManagementReducer
});

export default rootReducer;
