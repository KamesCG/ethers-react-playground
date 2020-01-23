/**
 * @function useContractDeployMonitor
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useEffect } from "react";

/* --- Local --- */
import {
  CONTRACT_DEPLOY_MONITOR_SUCCESS,
  CONTRACT_DEPLOY_MONITOR_FAILURE
} from "../types";

import { CONTRACT_DEPLOY_SUBMITTED } from "../status";

/* --- Effect --- */
export const useContractDeployMonitor = (state, dispatch) => {
  useEffect(() => {
    if (filterTransaction(state.core.activity.deploy)) {
      const runEffect = async () => {
        const transactionRequest = Object.keys(state.core.activity.deploy).filter(
          tx => state.core.activity.deploy[tx].status === CONTRACT_DEPLOY_SUBMITTED
        )[0];
        const transactionConfirmation = await state.core.wallet.provider.waitForTransaction(
          state.core.activity.deploy[transactionRequest].payload.hash
        );
        console.log(transactionConfirmation, "contracttransactionConfirmation");
        try {
          dispatch({
            type: CONTRACT_DEPLOY_MONITOR_SUCCESS,
            payload: transactionConfirmation
          });
        } catch (error) {
          dispatch({
            type: CONTRACT_DEPLOY_MONITOR_FAILURE,
            payload: error
          });
        }
      };
      runEffect();
    }
  }, [state.core.activity.deploy]);
};

const filterTransaction = txList =>
  Object.keys(txList).filter(
    tx => txList[tx].status === CONTRACT_DEPLOY_SUBMITTED
  ).length > 0
    ? true
    : false;
