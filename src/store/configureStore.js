import {createStore, combineReducers, applyMiddleware} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import favsReducer from '../redux/favsReducer';
import authReducer from '../redux/authReducer';
import oppsReducer from '../redux/oppsReducer';
import {verifyAuth} from '../redux/authActions';
import profileReducer from '../redux/profileReducer';

const favsConfig = {
  key: 'favs',
  storage: AsyncStorage,
  whitelist: ['bookmarks'],
};

const authConfig = {
  key: 'auth',
  storage: AsyncStorage,
};

const profileConfig = {
  key: 'profile',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  opps: oppsReducer,
  auth: persistReducer(authConfig, authReducer),
  favs: persistReducer(favsConfig, favsReducer),
  profile: persistReducer(profileConfig, profileReducer),
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
