import { ENABLE_REQUEST, ENABLE_SUCCESS, ENABLE_FAILURE } from "./types";

const reducerActions = (state, action) => {
  switch (action.type) {
    /* ----------------------- */
    /*         Common          */
    /* ----------------------- */
    case ENABLE_REQUEST:
      return {
        ...state,
        isEnableRequested: true
      };
    case ENABLE_SUCCESS:
      return {
        ...state,
        isEnableSuccess: true,
        isEnableRequested: false
      };
    case ENABLE_FAILURE:
      return {
        ...state,
        isEnableRequested: false,
        isEnableSuccess: false
      };

    default:
      return state;
    // throw new Error(`No Reducer Type Set: ${type}`);
  }
};

export default reducerActions;
