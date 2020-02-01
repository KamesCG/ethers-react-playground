import { PROVIDER_SET } from "../types";
export const providerSet = (state, dispatch) => ({ provider }) =>
  dispatch({
    type: PROVIDER_SET,
    payload: provider
  });
