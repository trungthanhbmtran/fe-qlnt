import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

  

// WHITELIST
const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['step','checked'] // only navigation will be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

const createdStore = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(createdStore)

export const initializeStore = (initialState = {}) => {
  return { createdStore, persistor}
};
