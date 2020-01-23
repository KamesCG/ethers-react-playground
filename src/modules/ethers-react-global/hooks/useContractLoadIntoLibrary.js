/**
 * @function useContractLoadIntoLibrary
 * @description Load smart contract abi into applicaiton library to initialize for multiple addresses.
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useState, useEffect } from 'react';

/* --- Component --- */
export const useContractLoadIntoLibrary = (state, dispatch) => {
  const [isLoadedIntoLibrary, setLoadedIntoLibrary] = useState();

  useEffect(() => {
    if (state.core.store.library && state.core.store.library.length > 0) {
      const request = state.core.store.library[0];
      dispatch({
        type: 'LOAD_CONTRACT_INTO_LIBRARY_SUCCESS',
        id: request.id,
        payload: request.payload
      });
      setLoadedIntoLibrary(true);
    }
  }, [state.core.wallet, state.core.store.contracts]);

  return isLoadedIntoLibrary;
};
