import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import createSensitiveStorage from "redux-persist-sensitive-storage";
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

import rootReducer from "../reducers";

let middleware = [thunk];

if (__DEV__) {
  const logger = createLogger({ collapsed: true });
  middleware = [...middleware, logger];
} else {
  middleware = [...middleware];
}

const persistConfig = {
  key: 'root', // key is required
  storage,
  whitelist: ['appData'],
  // blacklist: ['appData'] 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default (initialState = {}) => {
  const store = createStore(
    persistedReducer,
    initialState,
    compose(applyMiddleware(...middleware)),
  );

  const persistor = persistStore(store);

  return { store, persistor };
}
