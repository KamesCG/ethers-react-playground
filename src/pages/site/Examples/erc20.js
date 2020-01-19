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
} from "ethers-react-ui";

const TransactionDemo = props => {
  return (
    <>
      <Atom.Flex center column>
        <Atom.Heading xl sx={{ my: 3 }}>
          Transaction
        </Atom.Heading>
        <Atom.Span>Initialize a standard wallet transaction.</Atom.Span>
      </Atom.Flex>
      <Atom.HorizontalRule sx={{ my: 3 }} />
      <Atom.Flex>
        <Atom.Box sx={{ flex: 1, p: 4 }}>
          <Atom.Heading>Local Component State</Atom.Heading>
          <Atom.Paragraph>
            The transaction state will only managed in the component.
          </Atom.Paragraph>
          <Atom.HorizontalRule sx={{ my: 3 }} />
          <TransactionLocal />
        </Atom.Box>
        <Atom.Box sx={{ flex: 1, p: 4 }}>
          <Atom.Heading>Global Application State</Atom.Heading>
          <Atom.Paragraph>
            The transaction state will be accessible to the entire application.
          </Atom.Paragraph>
          <Atom.HorizontalRule sx={{ my: 3 }} />
          <TransactionGlobal />
        </Atom.Box>
      </Atom.Flex>
    </>
  );
};

const TokenDeployExample = props => {
  return (
    <Atom.Container>
      <Atom.Flex center column>
        <Atom.Heading xl sx={{ my: 3 }}>
          ERC20 Deploy
        </Atom.Heading>
        <TokenDeploy
          contractAbi={ERC20.abi}
          contractBytecode={ERC20.bytecode}
        />
      </Atom.Flex>
    </Atom.Container>
  );
};

const ERC20Demo = props => {
  return (
    <>
      <Atom.Flex center column>
        <Atom.Heading xl sx={{ my: 3 }}>
          ERC20 Examples
        </Atom.Heading>
        <Atom.Span>Manage ERC20 interactions.</Atom.Span>
      </Atom.Flex>
      <Atom.HorizontalRule sx={{ my: 3 }} />

      <Atom.Flex>
        <Atom.Box sx={{ flex: 1, p: 4 }}>
          <Atom.Heading>Local Component State</Atom.Heading>
          <Atom.Paragraph>
            The transaction state will only managed in the component.
          </Atom.Paragraph>
          <Atom.HorizontalRule sx={{ my: 3 }} />

          <Atom.Heading>Transfer</Atom.Heading>
          <TransferLocal contractAddress={process.env.REACT_APP_TOKEN} />
          <Atom.Heading>Approve</Atom.Heading>
          <ApproveLocal />
        </Atom.Box>
        <Atom.Box sx={{ flex: 1, p: 4 }}>
          <Atom.Heading>Global Application State</Atom.Heading>
          <Atom.Paragraph>
            The transaction state will be accessible to the entire application.
          </Atom.Paragraph>
          <Atom.HorizontalRule sx={{ my: 3 }} />
        </Atom.Box>
      </Atom.Flex>
    </>
  );
};
