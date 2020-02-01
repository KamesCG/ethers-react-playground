/**
 * @function useNetworkOnChange
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useEffect } from "react";

/* --- Effect --- */
export const useAccountOnChange = (state, dispatch) => {
  /* --- Account Change : Listen Event --- */
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("networkChanged", function(networkId) {
        console.log(networkId, "networkId");
      });
    }
    return true;
  }, []);
};
