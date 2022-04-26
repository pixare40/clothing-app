import { ROLODEX_TYPES } from "./rolodex.types";

const INITIAL_STATE = {
  rolodexData: null,
  isLoading: false,
  error: null,
};

export const rolodexReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ROLODEX_TYPES.ROLODEX_FETCH_SUCCESS:
      return { ...state, rolodexData: payload, isLoading: false };
    case ROLODEX_TYPES.ROLODEX_FETCH_FAILED:
      return { ...state, error: payload, isLoading: false };
    case ROLODEX_TYPES.START_ROLODEX_FETCH:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
