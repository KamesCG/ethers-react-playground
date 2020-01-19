/* --- Components --- */
import { ExampleCard } from "@components";
import {
  EthersProviderSetup,
  EthersProviderContractInitialize,
  EthersProviderExtensionsInitialize
} from "@components";

import {
  Address,
  AccountBalance,
  AccountNonce,
  Enable,
  NetworkName,
  NetworkID,
  Providers,
  TransactionLocal,
  TransactionGlobal,
  TransferLocal,
  TokenDeploy,
  ApproveLocal
} from "@ethers-react/ui";

/* --- Components --- */
const CorePage = props => {
  return (
    <Atom.Box sx={{ width: "100%" }}>
      <Showcase />
      <Content />
    </Atom.Box>
  );
};

const Showcase = props => {
  return (
    <Atom.Box sx={{ bg: "neutral", boxShadow: 0, color: "text", p: 3 }}>
      <Atom.Flex between>
        <Atom.Heading m0 xxl>
          User Interface
        </Atom.Heading>
        <Atom.Span tag>@ethers-react/ui</Atom.Span>
      </Atom.Flex>
    </Atom.Box>
  );
};

const Content = props => {
  return (
    <Atom.Container>
      <Atom.Flex column sx={{ py: 3 }}>
        <BasicExamples />
      </Atom.Flex>
    </Atom.Container>
  );
};

const BasicExamples = props => {
  return (
    <>
      {/* Eanble : Example */}
      <ExampleCard>
        <Atom.Box sx={{ p: 3 }}>
          <Atom.Heading xl sx={{ my: 3 }}>
            Enable Web3
          </Atom.Heading>
          <Atom.Paragraph>Enable injected Web3 wallet.</Atom.Paragraph>
          <Enable />
        </Atom.Box>
        <Molecule.CodeHighlight>
          {`
import { Enable } from "@ethers-react/ui";

const Component = props => <Enable />
  `}
        </Molecule.CodeHighlight>
      </ExampleCard>

      {/* Account Details : Example */}
      <ExampleCard>
        <Atom.Box sx={{ p: 3 }}>
          <Atom.Heading xl sx={{ my: 3 }}>
            Account Details
          </Atom.Heading>
          <Atom.Paragraph>Access wallet/account information.</Atom.Paragraph>
          <Atom.Flex column>
            <Atom.Span>
              <strong>Address:</strong> <Address />
            </Atom.Span>
            <Atom.Span>
              <strong>Balance:</strong> <AccountBalance trimmed />
            </Atom.Span>
            <Atom.Span>
              <strong>Nonce:</strong> <AccountNonce />
            </Atom.Span>
            <Atom.Flex>
              <strong>Network:</strong>{" "}
              <Atom.Span sx={{ ml: 1 }}>
                <NetworkName /> (<NetworkID />)
              </Atom.Span>
            </Atom.Flex>
          </Atom.Flex>
        </Atom.Box>
        <Molecule.CodeHighlight>
          {`
import { Address, AccountBalace, AccountNonce } from "@ethers-react/ui";

const Component = props =>
<>
  <span>
    Address: <Address />
  </span>
  <span>
    Balance: <AccountBalance trimmed />
  </span>
  <span>
    Nonce: <AccountNonce />
  </span>
</>

  `}
        </Molecule.CodeHighlight>
      </ExampleCard>
    </>
  );
};

export default CorePage;
