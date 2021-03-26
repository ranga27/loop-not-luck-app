import {
  LOAD_CURRENT_USER_PROFILE,
  LISTEN_TO_CURRENT_USER_PROFILE,
  LISTEN_TO_SELECTED_USER_PROFILE,
  UPDATE_USER_PROFILE,
} from './profileConstants';
import crashlytics from '@react-native-firebase/crashlytics';
import {getUserProfile} from '../firebase/firestoreService';

export function loadCurrentUserProfile(userId) {
  return async (dispatch) => {
    try {
      getUserProfile(userId).then((profile) =>
        dispatch({type: LOAD_CURRENT_USER_PROFILE, payload: profile.data()}),
      );
    } catch (error) {
      console.log(error);
      crashlytics().recordError(error);
    }
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
