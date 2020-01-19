/* --- Component --- */
const EthersCoreSetup = props => {
  return (
    <Molecule.CodeHighlight>{`
    /* --- Global --- */
import { ThemeProvider } from "theme-ui";
import { EthersProvider } from "@ethers-react/system";

/* --- Local --- */
import theme from "./assets/theme";

/* --- Component --- */
export default props => {
  return (
    <ThemeProvider theme={theme}>
      <EthersProvider>{props.children}</EthersProvider>
    </ThemeProvider>
  );
};

  `}</Molecule.CodeHighlight>
  );
};
export default EthersCoreSetup;
