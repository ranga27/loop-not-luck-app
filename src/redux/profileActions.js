import {
  LISTEN_TO_CURRENT_USER_PROFILE,
  LISTEN_TO_SELECTED_USER_PROFILE,
  UPDATE_USER_PROFILE,
} from './profileConstants';

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
