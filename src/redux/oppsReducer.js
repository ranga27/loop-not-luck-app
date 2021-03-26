import {FETCH_OPPS, RETAIN_STATE} from './oppsConstants';

const initialState = {
  opps: [],
  retainState: false,
};

export default function oppsReducer(state = initialState, {type, payload}) {
  switch (type) {
    case FETCH_OPPS:
      return {
        ...state,
        opps: payload,
      };
    case RETAIN_STATE:
      return {
        ...state,
        retainState: true,
      };
    default:
      return state;
  }
}
