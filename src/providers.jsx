/* --- Global --- */
import { ThemeProvider } from "theme-ui";
import { EthersProvider } from "@ethers-react/system";
import { extension as Reactive } from "@ethers-react/reactive";
import { extension as Global } from "@ethers-react/global";

/* --- Local --- */
import theme from "./assets/theme";

/* --- Module --- */
import { contracts } from "./blockchain";

Reactive.initialState.reactive.watchAccountOnChange = true;
Reactive.initialState.reactive.watchBlockCurrent = false;

/* --- Component --- */
export default props => (
  <ThemeProvider theme={theme}>
    <EthersProvider contracts={contracts} extensions={[Reactive, Global]}>
      {props.children}
    </EthersProvider>
  </ThemeProvider>
);
