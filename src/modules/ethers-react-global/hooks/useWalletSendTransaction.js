/**
 * @function useWalletSendTransaction
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useEffect } from "react";

/* --- Local --- */
import {
  WALLET_SEND_TRANSACTION_SUCCESS,
  WALLET_SEND_TRANSACTION_FAILURE
} from "../types";

/* --- Effect --- */
export const useWalletSendTransaction = (state, dispatch) => {
  useEffect(() => {
    if (
      state.core.wallet &&
      state.core.requests.transactions &&
      state.core.requests.transactions.length > 0
    ) {
      const runEffect = async () => {
        const transaction = state.core.requests.transactions[0];
        const signature = await state.core.wallet.sendTransaction(
          transaction.payload
        );
        try {
          dispatch({
            type: WALLET_SEND_TRANSACTION_SUCCESS,
            payload: signature
          });
        } catch (error) {
          dispatch({
            type: WALLET_SEND_TRANSACTION_FAILURE,
            payload: error
          });
        }
      };
      runEffect();
    }
  }, [state.core.requests.transactions]);
};
