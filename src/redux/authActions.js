import {SIGN_IN_USER, SIGN_OUT_USER} from './authConstants';
//import firebase from '../../app/config/firebase';
//import {APP_LOADED} from '../../app/async/asyncReducer';
import {dataFromSnapshot, getUserProfile} from '../firebase/firestoreService';
import {listenToCurrentUserProfile} from './profileActions';
import auth from '@react-native-firebase/auth';

export function signInUser(user) {
  return {
    type: SIGN_IN_USER,
    payload: user,
  };
}
//listen to the firebase auth state, this isn't an async function
export function verifyAuth() {
  return function (dispatch) {
    //can we move this to firestoreService
    return auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(signInUser(user));
        const profileRef = getUserProfile(user.uid);
        profileRef.onSnapshot((snapshot) => {
          dispatch(listenToCurrentUserProfile(dataFromSnapshot(snapshot)));
        });
      } else {
        dispatch(signOutUser());
      }
    });
  };
}

export function signOutUser() {
  return {
    type: SIGN_OUT_USER,
  };
}
