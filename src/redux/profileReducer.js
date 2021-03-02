import {
  LISTEN_TO_CURRENT_USER_PROFILE,
  LISTEN_TO_SELECTED_USER_PROFILE,
  UPDATE_USER_PROFILE,
} from './profileConstants';

const initialState = {
  currentUserProfile: null,
  onboardingOptions: null,
};

export default function profileReducer(state = initialState, {type, payload}) {
  switch (type) {
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
    default: {
      return state;
    }
  }
}
