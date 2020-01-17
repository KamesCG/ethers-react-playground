/* --- Global --- */
import { ThemeProvider } from "theme-ui";
import { EthersProvider } from "ethers-react-system";

/* --- Local --- */
import theme from "./assets/theme";
import ERC20 from "@contracts/ERC20.json";

const contracts = [
  {
    address: "0xbD660796D0657B5D3Cc3fa81d1299cCba8904FF0", // Depending on contract deploy process the address is manually passed
    abi: ERC20.abi,
    bytecode: ERC20.bytecode,
    id: "DevToken",
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
