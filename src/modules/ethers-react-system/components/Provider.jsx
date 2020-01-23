/**
 * @function Provider
 * @param {Array<React.Component>} children
 * @param {Array} contracts
 * @param {String} provider
 */

/* --- Global --- */

import React, { createContext, useContext, useReducer } from "react";
import { ethers } from "ethers";

/* --- Local --- */
import Context from "../Context";
import reducers from "../reducer";
import {
  combineReducers,
  enhanceActions,
  contractLoad,
  extensionsInitialize
} from "../middleware";

/* --- Component --- */
const Provider = ({ children, contracts = [], extensions }) => {
  const extensionsInitialState = extensions.map(({name, initialState}) => {
    return { name, initialState }
  })

  const extensionsReduced = extensionsInitialState.reduce((acc, cur) => {
    acc[cur.name] = cur.reducer;
    return acc;
  }, {});
  
  const context = createContext({
    instance: ethers,
    address: undefined,
    balance: undefined,
    network: undefined,
    nonce: undefined,
    providers: undefined,
    wallet: undefined,
    contracts: {},
    activity: {
      deploy: {},
      messages: {},
      signatures: {},
      transactions: {}
    },
    requests: {
      deploy: [],
      messages: [],
      signatures: [],
      transactions: []
    },
    library: {
      contracts: []
    },
    store: {
      contracts: []
    },
    enableRequest: () => {},
    // contractDeployRequest: () => {},
    // contractDeployFromBytecodeRequest: () => {},
    // contractInitializeRequest: () => {},
    // walletSendTransactionRequest: () => {},
    // walletSignMessageRequest: () => {},
    // walletSignMessageTypedRequest: () => {},
    // walletSignTransactionRequest: () => {},
    ...extensionsReduced
  })

  // console.log(extensions, "extensions");
  /* --- Ethers Context --- */
  const initialState = useContext(context);

  /* --- Reducer --- */
  const [state, dispatch] = useReducer(
    combineReducers({
      core: reducers
    }),
    initialState,
    contractLoad(contracts)
  );

  console.log(state, "state");

  /* --- Extensions : Initialize --- */
  extensionsInitialize(extensions, state, dispatch);

  /* --- Enhance Actions --- */
  const actions = enhanceActions(extensions, dispatch);

  /* --- Developer Messages --- */
  console.log(state, "Ethers Provider");

  return (
    <Context.Provider
      value={{
        ...state,
        ...actions
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
