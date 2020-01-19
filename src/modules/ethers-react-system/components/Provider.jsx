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
  combineReducers,
  enhanceActions,
  contractLoad,
  extensionsInitialize
} from "../middleware";

/* --- Component --- */
const Provider = ({ children, contracts = [], extensions }) => {
  // console.log(extensions, "extensions");
  /* --- Ethers Context --- */
  const initialState = useContext(Context);

  /* --- Reducer --- */
  const [state, dispatch] = useReducer(
    // reducers,
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
