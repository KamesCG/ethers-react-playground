/**
 * @function useAddressSet
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useEffect, useState } from "react";

/* --- Local --- */
import { SET_ADDRESS } from "../types";

/* --- Effect --- */
export const useAddressOnChange = (state, dispatch) => {
  const [address, setAddress] = useState(undefined);

  /* --- Set Address : Effect --- */
  useEffect(() => {
    if (state.address !== address) {
      (async () => {
        try {
          if (address) {
            dispatch({
              payload: address,
              type: SET_ADDRESS
            });
          }
        } catch (error) {
          // TODO(@kames) handle errors
        }
      })();
    }
  }, [address]);

  /* --- Selected Address : Listen Event --- */
  useEffect(() => {
    if (window.ethereum && window.ethereum.selectedAddress)
      setAddress(window.ethereum.selectedAddress);
  }, []);

  /* --- Account Change : Listen Event --- */
  useEffect(() => {
    window.ethereum.on("accountsChanged", function(accounts) {
      if (accounts[0] !== address) {
        setAddress(accounts[0]);
      }
    });
  }, []);

  return true;
};
