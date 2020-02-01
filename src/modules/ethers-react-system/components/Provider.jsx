/**
 * @function Provider
 * @param {Array} contracts
 * @param {String} provider
 */

/* --- Global --- */
import React, { useContext, useReducer } from "react";

/* --- Local --- */
import Context from "../Context";
import reducer from "../reducer";
import {
  enhanceActions,
  contractLoad,
  extensionsInitialize
} from "../middleware";

import {
  combineExtensionInitialState,
  combineExtensionsReducers
} from "../utility";

import { useContractConnect, useWalletEnable } from "../system";

/* --- Component --- */
const Provider = ({ children, contracts, extensions }) => {
  /* --- Ethers Context --- */
  const initialState = useContext(Context);
  /* --- Reducer --- */
  const [state, dispatch] = useReducer(
    combineExtensionsReducers([{ name: "core", reducer }, ...extensions]),
    combineExtensionInitialState([
      { name: "core", initialState },
      ...extensions
    ]),
    contractLoad(contracts)
  );

  /* --- System --- */
  useContractConnect(state, dispatch);
  useWalletEnable(state);

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
