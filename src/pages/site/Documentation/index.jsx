/* --- Global --- */
import { Router } from "@reach/router";

/* --- Local --- */

/* --- Module --- */
import { EthersHookTransactionExample } from "./sections/common";

/* --- Views --- */
import Introduction from "./Introduction";
// Core
import Contracts from "./core/Contracts";
import MessageSigning from "./core/MessageSigning";
// Extensions
import ERC20 from "./extensions/ERC20";

/* --- Component : Main --- */
const HomePage = props => {
  return (
    <Atom.Flex column sx={{ flex: 1, width: "100%" }}>
      <Showcase />
      <Main />
    </Atom.Flex>
  );
};

const Showcase = props => {
  return (
    <Atom.Box
      sx={{ bg: "neutral", boxShadow: 0, color: "text", p: 3, zIndex: 1000 }}
    >
      <Atom.Flex between>
        <Atom.Heading m0 xxl>
          Examples
        </Atom.Heading>
      </Atom.Flex>
    </Atom.Box>
  );
};

const Main = props => {
  return (
    <Atom.Flex sx={{ height: "100%", flex: 1 }}>
      <MenuColletion />
      <Atom.Box
        sx={{
          flex: 10,
          p: 3
        }}
      >
        <Router primary={false} style={{ width: "100%" }}>
          <Introduction path="/" />
          <ExampleCommon path="/common" />
          <Contracts path="/contracts" />
          <MessageSigning path="/signatures" />
          <ExampleWallet path="/wallet" />
          <ERC20 path="/extension/erc20" />
        </Router>
      </Atom.Box>
    </Atom.Flex>
  );
};

const ExampleCommon = props => {
  return (
    <Atom.Box>
      <Atom.Flex alignCenter between>
        <Atom.Heading as="h3" xxl m0>
          Common
        </Atom.Heading>
        <Molecule.CodeHighlight>
          {`import { hooks } from "@ethers-react/system";`}
        </Molecule.CodeHighlight>
      </Atom.Flex>
      <Atom.HorizontalRule sx={{ mb: 4, mt: 2 }} />
      <EthersHookTransactionExample />
    </Atom.Box>
  );
};

const ExampleWallet = props => {
  return (
    <Atom.Box>
      <Atom.Heading as="h3" xxl>
        Wallet
      </Atom.Heading>
    </Atom.Box>
  );
};

const MenuColletion = props => {
  return (
    <Atom.Box
      sx={{
        bg: "neutral",
        flex: 2,
        p: 3
      }}
    >
      <Molecule.Menu
        direction="column"
        label="Hooks"
        sx={{
          m: 1,
          mx: 1,
          fontSize: 1
        }}
        items={[
          {
            label: "Common",
            to: "/examples/common"
          },
          {
            label: "Contract",
            to: "/examples/contracts"
          },
          {
            label: "Wallet",
            to: "/examples/wallet"
          },
          {
            label: "Signatures",
            to: "/examples/signatures"
          }
        ]}
      />
      <Molecule.Menu
        direction="column"
        label="Extensions"
        sx={{
          m: 1,
          mx: 1,
          fontSize: 1
        }}
        items={[
          {
            label: "Global",
            to: "/examples/extension/global"
          },
          {
            label: "Reactive",
            to: "/examples/extension/reactive"
          },
          {
            label: "ERC20",
            to: "/examples/extension/erc20"
          },
          {
            label: "ERC721",
            to: "/examples/extension/erc721"
          }
        ]}
      />
      {/* <Molecule.Menu
        direction="column"
        label="Globalize"
        sx={{
          m: 1,
          mx: 1,
          fontSize: 1
        }}
        items={[
          {
            label: "Transaction",
            to: "/examples/requests/transaction"
          },
          {
            label: "Signed Messages",
            to: "/examples/requests/contract"
          },
          {
            label: "Contract Interaction",
            to: "/examples/requests/contract"
          }
        ]}
      /> */}
      {/* <Molecule.Menu
        direction="column"
        label="State Management"
        sx={{
          m: 1,
          mx: 1,
          fontSize: 1
        }}
        items={[
          {
            label: "Component State",
            to: "/examples/component-state"
          },
          {
            label: "Application State",
            to: "/examples/application-state"
          },
          {
            label: "Subspace Caching",
            to: "/examples/application-caching"
          }
        ]}
      /> */}
    </Atom.Box>
  );
};

export default HomePage;
