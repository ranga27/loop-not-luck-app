import {createStore, combineReducers, applyMiddleware} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import booksReducer from '../redux/booksReducer';
import authReducer from '../redux/authReducer';
import {verifyAuth} from '../redux/authActions';
import profileReducer from '../redux/profileReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['bookmarks'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  books: persistReducer(persistConfig, booksReducer),
  profile: profileReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
export const persistor = persistStore(store);

export function configureStore() {
  store.dispatch(verifyAuth());
  return store;
}
