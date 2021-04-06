import {
  SIGN_IN_USER,
  SIGN_OUT_USER,
  RESET_PASSWORD,
  VERIFY_EMAIL,
  PASSWORD_RESET,
  SET_AUTH_ROUTE,
  SIGN_IN_USER_ERROR,
} from './authConstants';

const initialState = {
  authenticated: false,
  currentUser: null,
  resetPassword: false,
  authRoute: 'Welcome',
  error: '',
};

export default function authReducer(state = initialState, {type, payload}) {
  switch (type) {
    case SIGN_IN_USER:
      return {
        ...state,
        authenticated: true,
        currentUser: {
          email: payload.email,
          uid: payload.uid,
          displayName: payload.displayName,
          providerId: payload.providerData[0].providerId,
          emailVerified: payload.emailVerified,
        },
      };
    case SIGN_IN_USER_ERROR:
      return {...state, error: payload.message};
    case SIGN_OUT_USER:
      return {
        ...state,
        authenticated: false,
        currentUser: null,
      };
    case VERIFY_EMAIL:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          emailVerified: true,
        },
      };
    case RESET_PASSWORD:
      return {
        ...state,
        resetPassword: true,
      };
    case PASSWORD_RESET:
      return {
        ...state,
        resetPassword: false,
      };
    case SET_AUTH_ROUTE:
      return {
        ...state,
        authRoute: payload,
      };
    default:
      return state;
  }
}
