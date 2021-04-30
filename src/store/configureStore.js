import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import favsReducer from '../redux/favsReducer';
import authReducer from '../redux/authReducer';
import oppsReducer from '../redux/oppsReducer';
import {verifyAuth} from '../redux/authActions';
import profileReducer from '../redux/profileReducer';
import Reactotron from './../utils/ReactotronConfig';

//favourites
const favsConfig = {
  key: 'favs',
  storage: AsyncStorage,
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
  compose(applyMiddleware(thunk), Reactotron.createEnhancer()),
);

export const persistor = persistStore(store);

export function configureStore() {
  store.dispatch(verifyAuth());
  return store;
}
