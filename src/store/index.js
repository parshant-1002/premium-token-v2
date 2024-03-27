import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers'; // Your root reducer
import rootSaga from './sagas'; // Your root saga

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure persist options
const persistConfig = {
  key: 'root',
  storage,
  // // Optionally, whitelist some reducers to be persisted (if not provided, all reducers will be persisted)
  whitelist: ['common', "contentManagementReducer"]
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Enable Redux DevTools extension
const composeEnhancers =  ( import.meta.env.NODE_ENV === "development" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null ) || compose;

// Create the Redux store
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

// Run the saga middleware
sagaMiddleware.run(rootSaga);

// Create the persistor object
const persistor = persistStore(store);

export { store, persistor };
