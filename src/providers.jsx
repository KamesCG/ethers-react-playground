/* --- Global --- */
import { ThemeProvider } from "theme-ui";
import { EthersProvider } from "@ethers-react/system";
import { extension as Reactive } from "@ethers-react/reactive";
import { extension as Global } from "@ethers-react/global";

/* --- Local --- */
import theme from "./assets/theme";

/* --- Module --- */
import { contracts } from "./blockchain";

Reactive.initialState.reactive.getAccountBalance = true;
Reactive.initialState.reactive.getAccountNonce = true;
Reactive.initialState.reactive.getAccountOnLoad = true;
Reactive.initialState.reactive.getProviderSigner = true;
Reactive.initialState.reactive.watchAccountOnChange = true;
Reactive.initialState.reactive.watchBlockCurrent = true;

/* --- Component --- */
export default props => (
  <ThemeProvider theme={theme}>
    <EthersProvider contracts={contracts} extensions={[Reactive, Global]}>
      {props.children}
    </EthersProvider>
  </ThemeProvider>
);
