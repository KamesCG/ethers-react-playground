/**
 * @function useWalletSendTransaction
 * @description Dispatch, Broadcast and Confirm Ethereum tranasctions.
 */

/* --- Global --- */
import { useState, useEffect } from "react";

/* --- Effect --- */
export const useWalletSignTypedMessageV3 = props => {
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
  const domain = [
    { name: "name", type: "string" },
    { name: "version", type: "string" },
    { name: "chainId", type: "uint256" },
    { name: "verifyingContract", type: "address" },
    { name: "salt", type: "bytes32" }
  ];
  const bid = [
    { name: "amount", type: "uint256" },
    { name: "bidder", type: "Identity" }
  ];
  const identity = [
    { name: "userId", type: "uint256" },
    { name: "wallet", type: "address" }
  ];

  const domainData = {
    name: "Horizin",
    version: "2",
    chainId: parseInt(web3.version.network, 10),
    verifyingContract: "0x1C56346CD2A2Bf3202F771f50d3D14a367B48070",
    salt: "0xf2d857f4a3edcb9b78b4d503bfe733db1e3f6cdc2b7971ee739626c97e86a558"
  };
  var message = {
    amount: 100,
    bidder: {
      userId: 323,
      wallet: "0x3333333333333333333333333333333333333333"
    }
  };

  const data = JSON.stringify({
    types: {
      EIP712Domain: domain,
      Bid: bid,
      Identity: identity
    },
    domain: domainData,
    primaryType: "Bid",
    message: message
  });

  /* --- Sign Message :: Effect --- */
  useEffect(() => {
    if (messageUnsigned && !messageSigned && wallet) {
      (async () => {
        wallet.provider.provider.sendAsync(
          {
            method: "eth_signTypedData_v3",
            params: [wallet._address, data],
            from: wallet._address
          },
          (err, result) => {
            if (err) {
              setMessageSignedError(err);
            } else {
              setMessageSigned(result);
            }
          }
        );
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
