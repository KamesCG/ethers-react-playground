import {
  SET_PROVIDER,
  SET_PROVIDER_MULTIPLE,
  SET_PROVIDER_STATUS,
  BALANCE_SET,
  NONCE_SET,
  NETWORK_SET,
  ENS_ADDRESS_SET,
  SET_ADDRESS,
  BLOCK_CURRENT_SET
} from "./types";

const reducerActions = (state, action) => {
  switch (action.type) {
    case BLOCK_CURRENT_SET:
      return {
        ...state,
        currentBlock: action.payload
      };
    case SET_PROVIDER:
      return {
        ...state,
        provider: action.payload
      };
    case SET_PROVIDER_MULTIPLE:
      return {
        ...state,
        providers: action.payload
      };
    case SET_PROVIDER_STATUS:
      return {
        ...state,
        providerStatus: action.payload
      };
    case SET_ADDRESS:
      return {
        ...state,
        address: action.payload
      };

    case BALANCE_SET:
      return {
        ...state,
        balance: action.payload
      };
    case NONCE_SET:
      return {
        ...state,
        nonce: action.payload
      };
    case NETWORK_SET:
      return {
        ...state,
        network: action.payload
      };
    case ENS_ADDRESS_SET:
      return {
        ...state,
        ensAddress: action.payload
      };

    default:
      return state;
  }
};

export default reducerActions;
