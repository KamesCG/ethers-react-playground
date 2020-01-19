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

const Featured = props => {
  return (
    <Atom.Container sx={{ my: 5 }}>
      <Atom.Flex column>
        <Atom.Heading xl sx={{ my: 3 }}>
          Enable
        </Atom.Heading>
        <Enable />

        <Atom.Heading xl sx={{ my: 3 }}>
          Acccount
        </Atom.Heading>
        <Atom.Span>
          Address: <Address />
        </Atom.Span>
        <Atom.Span>
          Balance: <AccountBalance trimmed />
        </Atom.Span>
        <Atom.Span>
          Nonce: <AccountNonce />
        </Atom.Span>

        <Atom.Heading xl sx={{ my: 3 }}>
          Network
        </Atom.Heading>
        <Atom.Span>
          <NetworkName /> (<NetworkID />)
        </Atom.Span>

        <TransactionDemo />

        <ERC20Demo />
      </Atom.Flex>
    </Atom.Container>
  );
};
