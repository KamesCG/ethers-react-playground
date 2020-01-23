/**
 * @function useAccountBalance
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useEffect } from 'react';

/* --- Local --- */
import { BALANCE_SET } from '../types';

/* --- Effect --- */
export const useAccountBalance = (state, dispatch) => {
  useEffect(() => {
    if (state.core.wallet) {
      const runEffect = async () => {
        try {
          const balance = await state.core.wallet.getBalance();
          dispatch({
            payload: {
              bigNumber: balance,
              wei: balance.toString(),
              eth: state.core.instance.utils.formatEther(balance),
              trimmed: state.core.instance.utils.formatEther(balance).substring(0, 5)
            },
            type: BALANCE_SET
          });
        } catch (error) {
          console.log(error);
        }
      };
      runEffect();
    }
  }, [state.core.wallet]);

  return true;
};
