import {
  LOAD_CURRENT_USER_PROFILE,
  LISTEN_TO_CURRENT_USER_PROFILE,
  LISTEN_TO_SELECTED_USER_PROFILE,
  UPDATE_USER_PROFILE,
  LOAD_USER_ERROR,
} from './profileConstants';

const initialState = {
  currentUserProfile: null,
  error: '',
};

export default function profileReducer(state = initialState, {type, payload}) {
  switch (type) {
    case LOAD_CURRENT_USER_PROFILE:
      return {
        ...state,
        currentUserProfile: payload,
        error: '',
      };
    case LISTEN_TO_CURRENT_USER_PROFILE:
      return {
        ...state,
        currentUserProfile: payload,
      };
    case LISTEN_TO_SELECTED_USER_PROFILE:
      return {
        ...state,
        selectedUserProfile: payload,
      };
    case UPDATE_USER_PROFILE:
      return {
        ...state,
        onboardingOptions: {...state.onboardingOptions},
      };
    case LOAD_USER_ERROR:
      return {...state, error: payload};
    default: {
      return state;
    }
  }
}
