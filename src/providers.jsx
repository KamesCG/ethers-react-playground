/* --- Global --- */
import { ThemeProvider } from "theme-ui";
import { EthersProvider } from "@ethers-react/system";
import { hooks as hooksReactive } from "@ethers-react/reactive";
import {
  actions as actionsGlobal,
  hooks as hooksGlobal,
  types as typesGlobal
} from "@ethers-react/global";

/* --- Local --- */
import theme from "./assets/theme";
import ERC20 from "@contracts/ERC20.json";
import MeshDevCoin from "@contracts/MeshDevCoin.json";

/* --- Configuration --- */
const contracts = [
  MeshDevCoin,
  {
    address: "0xbD660796D0657B5D3Cc3fa81d1299cCba8904FF0",
    abi: ERC20.abi,
    bytecode: ERC20.bytecode,
    name: "DevToken",
    network: {
      chainId: 1,
      name: "mainnet"
    }
  },
  {
    abi: ERC20.abi,
    bytecode: ERC20.bytecode,
    id: "DevTokenFactory"
  }
];

const extensions = [
  {
    name: "ethers-react-reactive",
    hooks: hooksReactive,
    reducer: (state, action) => state,
    initialState: {hello: 'world'}
  },
  {
    name: "ethers-react-global",
    actions: actionsGlobal,
    hooks: hooksGlobal,
    types: typesGlobal,
    reducer: (state, action) => state,
    initialState: {}
  }
];

/* --- Component --- */
export default props => (
  <ThemeProvider theme={theme}>
    <EthersProvider contracts={contracts} extensions={extensions}>
      {props.children}
    </EthersProvider>
  </ThemeProvider>
);
