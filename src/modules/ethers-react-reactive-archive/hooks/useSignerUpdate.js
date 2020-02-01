/**
 * @function useSignerGet
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useEffect } from "react";

/* --- Local --- */
import { SIGNER_GET_SUCCESS, SIGNER_GET_FAILURE } from "../types";

/* --- Effect --- */
export const useSignerGet = (state, dispatch) => {
  useEffect(() => {
    const runEffect = async () => {
      if (state.address) {
        const provider = new state.instance.providers.Web3Provider(
          window.web3.currentProvider
        );
        const signer = await provider.getSigner(state.address);

        dispatch({
          type: SIGNER_GET_SUCCESS,
          payload: signer
        });
      } else {
        dispatch({
          type: SIGNER_GET_FAILURE,
          payload: undefined
        });
      }
    };
    runEffect();
  }, [state.address, state.injected]);

  return true;
};
