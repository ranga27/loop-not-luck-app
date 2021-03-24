import {
  RESET_PASSWORD,
  SIGN_IN_USER,
  SIGN_OUT_USER, 
  VERIFY_EMAIL,
  PASSWORD_RESET,
  SET_AUTH_ROUTE,
} from './authConstants';
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
    //can we move this to authService.js
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

export function verifyEmail() {
  return {
    type: VERIFY_EMAIL,
  };
}
export function resetPassword() {
  return {
    type: RESET_PASSWORD,
  };
} //possibly combine the next two
export function passwordReset() {
  return {
    type: PASSWORD_RESET,
  };
}
export function setAuthRoute(route) {
  return {
    type: SET_AUTH_ROUTE,
    payload: route,
  };
}
