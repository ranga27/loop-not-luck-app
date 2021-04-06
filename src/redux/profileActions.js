import {
  LOAD_CURRENT_USER_PROFILE,
  LISTEN_TO_CURRENT_USER_PROFILE,
  LISTEN_TO_SELECTED_USER_PROFILE,
  UPDATE_USER_PROFILE,
  LOAD_USER_ERROR,
} from './profileConstants';
import {getUserProfile} from '../firebase/firestoreService';

export function loadCurrentUserProfile(user) {
  return async (dispatch) => {
    getUserProfile(user.uid)
      .then((profile) =>
        dispatch({type: LOAD_CURRENT_USER_PROFILE, payload: profile.data()}),
      )
      .catch((error) => console.error(error));
  };
}

//Continuously listen to the current user's profile from firestore and populate in redux store
export function listenToCurrentUserProfile(profile) {
  return {
    type: LISTEN_TO_CURRENT_USER_PROFILE,
    payload: profile,
  };
}

export function listenToSelectedUserProfile(profile) {
  return {
    type: LISTEN_TO_SELECTED_USER_PROFILE,
    payload: profile,
  };
}

export function updateUserProfile(dataToUpdate) {
  return {
    type: UPDATE_USER_PROFILE,
    payload: dataToUpdate,
  };
}

export const loadUserError = (message) => ({
  type: LOAD_USER_ERROR,
  payload: message,
});
