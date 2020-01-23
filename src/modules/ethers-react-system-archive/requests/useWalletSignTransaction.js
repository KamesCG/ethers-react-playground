/**
 * @function useWalletSignTransaction
 * @description Watch Browser window object for Etheruem selected address.
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useEffect } from 'react';

/* --- Local --- */
import {
  WALLET_SIGN_TRANSACTION_SUCCESS,
  WALLET_SIGN_TRANSACTION_FAILURE
} from '../types';

/* --- Component --- */
export const useWalletSignTransaction = (state, dispatch) => {
  useEffect(() => {
    if (
      state.core.provider &&
      state.core.wallet &&
      state.core.store.transactions &&
      state.core.store.transactions.length > 0
    ) {
      const runEffect = async () => {
        const transaction = state.core.store.transactions[0];
        try {
          dispatch({
            type: WALLET_SIGN_TRANSACTION_SUCCESS,
            id: messageRequest.id,
            payload: signature
          });
          setResponse(true);
        } catch (error) {
          dispatch({
            type: WALLET_SIGN_TRANSACTION_FAILURE,
            id: messageRequest.id,
            payload: error
          });
          setResponse(false);
        }
      };
      runEffect();
    }
  }, [state.core.store.transactions]);
};
