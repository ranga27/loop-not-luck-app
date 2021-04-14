import {
  RESET_PASSWORD,
  SIGN_IN_USER,
  SIGN_OUT_USER,
  VERIFY_EMAIL,
  PASSWORD_RESET,
  SET_AUTH_ROUTE,
  SIGN_IN_USER_ERROR,
} from './authConstants';
import {
  dataFromSnapshot,
  getUserProfileDocRef,
} from '../firebase/firestoreService';
import {listenToCurrentUserProfile} from './profileActions';
import auth from '@react-native-firebase/auth';
import {getSaved, getApplied} from './favsActions';

export function signInUser(user) {
  return {
    type: SIGN_IN_USER,
    payload: user,
  };
}
//listen to the firebase auth state, this isn't an async function
export function verifyAuth() {
  return function (dispatch) {
    //move this to authService.js
    return auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(signInUser(user));
        const profileRef = getUserProfileDocRef(user.uid);
        profileRef.onSnapshot((snapshot) => {
          const currentUserProfile = dataFromSnapshot(snapshot);
          dispatch(listenToCurrentUserProfile(currentUserProfile));
          dispatch(getSaved(currentUserProfile.saved));
          dispatch(getApplied(currentUserProfile.applied));
        });
      } else {
        dispatch(signOutUser());
      }
    });
  };
}

export function signOutUser() {
  // TODO: clear asyncstorage on logout
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
export const signInUserError = (message) => ({
  type: SIGN_IN_USER_ERROR,
  payload: message,
});
