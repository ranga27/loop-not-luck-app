import {data} from '../constants';
import crashlytics from '@react-native-firebase/crashlytics';

// Define action types
export const GET_SAVED_LIST = 'GET_SAVED_LIST';
export const ADD_TO_SAVED_LIST = 'ADD_TO_SAVED_LIST';
export const REMOVE_FROM_SAVED_LIST = 'REMOVE_FROM_SAVED_LIST';

// Define action creators

export const getBooks = () => {
  return async (dispatch) => {
    try {
      // TODO: get initial list from fireStore
      const saved = [];
      if (saved) {
        dispatch({
          type: GET_SAVED_LIST,
          payload: saved,
        });
      } else {
        console.log('Unable to fetch data ');
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
