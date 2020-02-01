/**
 * @function useSignerGet
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useEffect } from "react";

/* --- Local --- */
import { SET_PROVIDER, SET_PROVIDER_STATUS } from "../types";

/* --- Effect --- */
export const useProviderWrapper = (state, dispatch) => {
  useEffect(() => {
    const runEffect = async () => {
      if (state.address) {
        state.address;
        const provider = await new state.instance.providers.Web3Provider(
          window.web3.currentProvider
        );

        dispatch({
          type: SET_PROVIDER,
          payload: provider
        });
      } else {
        dispatch({
          type: SET_PROVIDER_STATUS,
          payload: undefined
        });
      }
    };
    runEffect();
  }, [state.address]);

  return true;
};
