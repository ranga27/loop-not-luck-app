import {
  GET_SAVED_LIST,
  ADD_TO_SAVED_LIST,
  REMOVE_FROM_SAVED_LIST,
  GET_APPLIED_LIST,
  ADD_TO_APPLIED_LIST,
} from './favsActions';

const initialState = {
  saved: [],
  applied: [],
};

function favsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SAVED_LIST:
      return {...state, saved: action.payload};
    case ADD_TO_SAVED_LIST:
      return {...state, saved: [...state.saved, action.payload]};
    case REMOVE_FROM_SAVED_LIST:
      return {
        ...state,
        saved: state.saved.filter((opps) => opps.key !== action.payload.key),
      };
    case GET_APPLIED_LIST:
      return {...state, applied: action.payload};
    case ADD_TO_APPLIED_LIST:
      return {...state, applied: [...state.applied, action.payload]};
    default:
      return state;
  }
}

export default favsReducer;
