/**
 * @function useWalletSignMessage
 * @description Watch Browser window object for Etheruem selected address.
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useState, useEffect } from 'react';

/* --- Local --- */
import {
  WALLET_SIGN_TYPED_MESSAGE_REQUEST,
  WALLET_SIGN_MESSAGE_SUCCESS,
  WALLET_SIGN_MESSAGE_FAILURE
} from '../types';

/* --- Component --- */
export const useWalletSignMessage = (state, dispatch) => {
  useEffect(() => {
    if (
      state.core.provider &&
      state.core.wallet &&
      state.core.store.messages &&
      state.core.store.messages.length > 0
    ) {
      const runEffect = async () => {
        let signature;
        const messageRequest = state.core.store.messages[0];
        try {
          switch (messageRequest.type) {
            case WALLET_SIGN_TYPED_MESSAGE_REQUEST:
              signature = await state.core.provider.injected.send(
                'eth_signTypedData',
                [messageRequest.payload, state.core.address]
              );
              setRequested(true);
              break;
            default:
              signature = await state.core.wallet.signMessage(
                messageRequest.payload
              );
              break;
          }
          dispatch({
            type: WALLET_SIGN_MESSAGE_SUCCESS,
            id: messageRequest.id,
            payload: signature
          });
          setResponse(true);
        } catch (error) {
          dispatch({
            type: WALLET_SIGN_MESSAGE_FAILURE,
            id: messageRequest.id,
            payload: error
          });
          setResponse(false);
        }
      };
      runEffect();
    }
  }, [state.core.store.messages, state.core.provider, state.core.wallet]);
};
