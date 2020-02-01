/**
 * @function useWalletSendTransaction
 * @description Dispatch, Broadcast and Confirm Ethereum tranasctions.
 */

/* --- Global --- */
import { useState, useEffect } from "react";

/* --- Effect --- */
export const useWalletSignTypedMessage = props => {
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

  const msgParams = [
    {
      type: "string",
      name: "Message",
      value: "Hi, Alice!"
    },
    {
      type: "uint32",
      name: "A number",
      value: "1337"
    }
  ];

  /* --- Sign Message :: Effect --- */
  useEffect(() => {
    if (messageUnsigned && !messageSigned && wallet) {
      (async () => {
        try {
          wallet.provider.provider.sendAsync(
            {
              method: "eth_signTypedData",
              params: [messageUnsigned, wallet._address],
              from: wallet._address
            },
            (err, result) => {
              if (err) {
                console.log(err);
                setMessageSignedError(err);
              } else {
                setMessageSigned(result);
              }
            }
          );
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
