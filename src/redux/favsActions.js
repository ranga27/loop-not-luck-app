//TODO: Merge with oppsActions
import crashlytics from '@react-native-firebase/crashlytics';

// Define action types
export const GET_SAVED_LIST = 'GET_SAVED_LIST';
export const ADD_TO_SAVED_LIST = 'ADD_TO_SAVED_LIST';
export const REMOVE_FROM_SAVED_LIST = 'REMOVE_FROM_SAVED_LIST';
export const GET_APPLIED_LIST = 'GET_APPLIED_LIST';
export const ADD_TO_APPLIED_LIST = 'ADD_TO_APPLIED_LIST';

export const getSaved = (opps) => {
  return async (dispatch) => {
    try {
      if (opps) {
        dispatch({type: GET_SAVED_LIST, payload: opps});
      } else {
        console.log('No Saved List for current user');
      }
    } catch (error) {
      // Add custom logic to handle errors
      console.log(error);
      crashlytics().recordError(error);
    }
  };
};

export const getApplied = (opps) => {
  return async (dispatch) => {
    try {
      if (opps) {
        dispatch({type: GET_APPLIED_LIST, payload: opps});
      } else {
        console.log('No Applied List for current user');
      }
    } catch (error) {
      // Add custom logic to handle errors
      console.log(error);
      crashlytics().recordError(error);
    }
  };
};

export const addSaved = (opps) => (dispatch) => {
  dispatch({
    type: ADD_TO_SAVED_LIST,
    payload: opps,
  });
};

export const removeSaved = (opps) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_SAVED_LIST,
    payload: opps,
  });
};

export const addApplied = (opps) => (dispatch) => {
  dispatch({
    type: ADD_TO_APPLIED_LIST,
    payload: opps,
  });
};
