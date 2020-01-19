/**
 * @function Provider
 * @param {Array<React.Component>} children
 * @param {Array} contracts
 * @param {String} provider
 */

/* --- Global --- */
import React, { useContext, useReducer } from "react";

/* --- Local --- */
import Context from "../Context";
import reducers from "../reducer";
import {
  enhanceActions,
  contractLoad,
  extensionsInitialize
} from "../middleware";

import * as GlobalEffects from "../requests";

/* --- Component --- */
const Provider = ({ children, contracts = [], extensions }) => {
  /* --- Ethers Context --- */
  const initialState = useContext(Context);

  /* --- Reducer --- */
  const [state, dispatch] = useReducer(
    reducers,
    initialState,
    contractLoad(contracts)
  );
  /* --- Enhance Actions --- */
  const actions = enhanceActions(state, dispatch);

  /* --- Global Effects --- */
  // Object.values(GlobalEffects).map(effect => effect(state, dispatch));

  extensionsInitialize(extensions, state, dispatch);

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
