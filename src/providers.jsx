/* --- Global --- */
import { ThemeProvider } from "theme-ui";
import { EthersProvider } from "ethers-react-system";

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

/* --- Component --- */
export default props => (
  <ThemeProvider theme={theme}>
    <EthersProvider contracts={contracts}>{props.children}</EthersProvider>
  </ThemeProvider>
);
