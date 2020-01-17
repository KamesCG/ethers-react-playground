/* --- Components --- */
import { ShowcaseExamples } from "@views";
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

import ERC20 from "@contracts/ERC20Bank.json";

/* --- Components --- */
const HomePage = props => {
  return (
    <Atom.Box sx={{ width: "100%" }}>
      <ShowcaseExamples />
      <TokenDeployExample />
      <Featured />
    </Atom.Box>
  );
};

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
          <TransferLocal />
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

const showcase = {
  container: {
    bg: "blue",
    color: "white",
    flex: 1
  },
  containerWhite: {
    bg: "white",
    color: "blue",
    flex: 1
  },
  coverImage: {
    opacity: 0.6,
    ratio: 0.4
  },
  left: {
    flex: 5,
    p: 5,
    py: 6
  },
  right: {
    flex: 4
  },
  actions: { mx: 2 }
};

const FeaturedAdventure = props => {
  return (
    <Atom.Flex alignCenter sx={showcase.containerWhite}>
      <Atom.BackgroundImage
        ratio={0.3}
        src="https://images.unsplash.com/photo-1520695287272-b7f8af46d367?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
        sx={showcase.coverImage}
      />
      <Atom.Absolute sx={{ top: 0, left: 0, m: 5 }}>
        <Atom.Heading md>Featured Adventure</Atom.Heading>
      </Atom.Absolute>
      <Atom.Flex column sx={showcase.left}>
        <Atom.Box card>
          <Atom.Heading xxl heavy>
            Bankless Level-Up Guide
          </Atom.Heading>
          <Atom.Heading xl normal>
            Explore the world of DeFi
          </Atom.Heading>
          <Atom.Paragraph sx={{ fontSize: 0 }}>
            Vivamus tincidunt nibh facilisis metus finibus, laoreet aliquet
            lectus rutrum. Sed ex tortor, fermentum vel urna vitae, fermentum
            facilisis nulla. Maecenas at turpis quis metus sollicitudin
            placerat. Donec ipsum libero, tempus nec risus ut, iaculis gravida
            mi. Morbi sed lacinia dui. Duis id malesuada eros. Proin a sem sit
            amet sem tempus aliquam.
          </Atom.Paragraph>
          <Atom.Button sx={{}}>Start Adventure</Atom.Button>
        </Atom.Box>
      </Atom.Flex>
      <Atom.Flex center column sx={showcase.right}>
        <Atom.Box></Atom.Box>
      </Atom.Flex>
    </Atom.Flex>
  );
};

export default HomePage;
