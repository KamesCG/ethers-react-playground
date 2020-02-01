/**
 *
 * @param {Object} provider
 */
export const providerSetStatus = (state, dispatch) => ({ provider }) =>
  dispatch({
    type: "PROVIDER_SET_STATUS",
    payload: provider
  });
