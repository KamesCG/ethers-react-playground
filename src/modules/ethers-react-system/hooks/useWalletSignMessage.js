/**
 * @function useWalletSendTransaction
 * @description Dispatch, Broadcast and Confirm Ethereum tranasctions.
 */

/* --- Global --- */
import { useState, useEffect } from "react";

/* --- Effect --- */
export const useWalletSignMessage = props => {
  const [messageUnsigned, setMessageUnsigned] = useState(undefined);
  const [messageSigned, setMessageSigned] = useState(undefined);
  const [wallet, setWallet] = useState(undefined);

  /* --- Error : State --- */
  const [messageSignedError, setMessageSignedError] = useState(undefined);

  /* --- Initialize --- */
  const init = (wallet, msg) => {
    setMessageUnsigned(msg);
    setWallet(wallet);
  };

  /* --- Reset --- */
  const reset = (wallet, msg) => {
    setMessageUnsigned(undefined);
    setMessageSigned(undefined);
    setWallet(undefined);
  };

  /* --- Sign Message :: Effect --- */
  useEffect(() => {
    if (messageUnsigned && !messageSigned && wallet) {
      (async () => {
        try {
          const messageSigned = await wallet.signMessage(messageUnsigned);
          setMessageSigned(messageSigned);
        } catch (error) {
          setMessageSignedError(error);
        }
      })();
    }
  }, [messageUnsigned, wallet]);

  /* --- Return : Complete --- */
  return {
    init,
    reset,
    messageSigned,
    messageUnsigned,
    error: messageSignedError
  };
};
