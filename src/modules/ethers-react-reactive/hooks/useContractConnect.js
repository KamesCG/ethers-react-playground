/**
 * @function useContractConnect
 * @description Initialize Contracts
 */

/* --- Global --- */
import { useState, useEffect } from "react";
import { CONTRACT_INITIALIZE_SUCCESS } from "../types";
/* --- Effect --- */
export const useContractConnect = (state, dispatch) => {
  const [, set] = useState();

  /* --- Error : State --- */
  const [error, setError] = useState();

  /* --- Initialize --- */
  const init = () => {};

  /* --- Sign Message :: Effect --- */
  useEffect(() => {
    if (state.core.contracts && state.core.wallet) {
      const runEffect = async () => {
        try {
          Object.keys(state.core.contracts)
            .filter(contractId => {
              return state.core.contracts[contractId].address;
            })
            .map(contractId => {
              const contract = new state.core.instance.Contract(
                state.core.contracts[contractId].address,
                state.core.contracts[contractId].abi,
                state.core.wallet
              );
              dispatch({
                payload: contract,
                id: state.core.contracts[contractId].address,
                type: CONTRACT_INITIALIZE_SUCCESS
              });
            });
        } catch (error) {
          console.log(error);
          setError(error);
        }
      };
      runEffect();
    }
  }, [state.core.wallet]);

  /* --- Return : Complete --- */
  return {
    init,
    error: error
  };
};
