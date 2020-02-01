/* --- Components --- */
import { ShowcaseHome } from "@views";

import {
  EthersProviderSetup,
  EthersProviderContractInitialize,
  EthersProviderExtensionsInitialize
} from "@components";

/* --- Components --- */
const HomePage = props => {
  return (
    <Atom.Box sx={{ width: "100%" }}>
      <ShowcaseHome />
      <Introduction />
      <Featured />
      <ExamplesPreview />
    </Atom.Box>
  );
};

const Introduction = props => {
  return (
    <Atom.Container sx={{ maxWidth: [600, 700, 700] }}>
      <Atom.Heading giga sx={{ textAlign: "center", my: 3 }}>
        Introduction
      </Atom.Heading>
      <Atom.Heading as="h5" normal md sx={{ textAlign: "center" }}>
        Mnageable Ethereum Decentralized Application Frontends
      </Atom.Heading>
      <Atom.Heading as="h4" xxl>
        What
      </Atom.Heading>
      <Atom.Paragraph>
        The EthersReact library wraps{" "}
        <a href="https://docs.ethers.io/ethers.js/html/">ethers.js</a> using{" "}
        <a href="https://reactjs.org/docs/hooks-intro.html"> React Hooks.</a>
      </Atom.Paragraph>
      <Atom.Heading as="h4" xxl>
        How
      </Atom.Heading>
      <Atom.Paragraph>
        The base module <strong>@ethers-react/system</strong> provides a set of
        standard hooks (<em>wallet, signatures, contracts, etc...</em>) to
        easily interact with the{" "}
        <a href="https://docs.ethers.io/ethers.js/html/">ethers.js</a> library.
      </Atom.Paragraph>
      <Atom.Paragraph>
        Features like <strong>reactiveness</strong> and{" "}
        <strong>global state</strong> can be added using extensions.
      </Atom.Paragraph>
      <Atom.Paragraph>
        New functionality can be added (hooks, state, reducers) to
        `@ethers-react/system` by passing in extensions to the top-level
        Provider. To learn more about how to build extensions please review the
        following Extensions documentation.
      </Atom.Paragraph>
      <Atom.Heading as="h4" xxl>
        Why
      </Atom.Heading>
      <Atom.Paragraph>
        <strong>
          React Hooks represent a significant shift in Frontend development.
        </strong>{" "}
        In a lot of ways simplifying the cognitive overhead required to build
        more complex applicaiton frontends.
      </Atom.Paragraph>
      <Atom.Paragraph>
        <strong>The Ethereum blockchain is a predictable platform.</strong>{" "}
        State changes either either accepted or rejected when a wallet
        dispatches a transaction request.
      </Atom.Paragraph>
      <Atom.Paragraph>
        <strong>
          <em>
            The simplicity of hooks and determinism of smart contract is an
            ideal combination.
          </em>
        </strong>
      </Atom.Paragraph>
    </Atom.Container>
  );
};

const Featured = props => {
  return (
    <Atom.Container sx={{ my: 5 }}>
      <Atom.Heading mega sx={{ textAlign: "center", my: 3 }}>
        Features
      </Atom.Heading>
      <Atom.Heading md sx={{ fontWeight: 400, textAlign: "center", my: 3 }}>
        Start Building Decentralized Applications with Ease
      </Atom.Heading>
      <Atom.Flex between sx={{ flexWrap: "wrap" }}>
        <FeatureCard
          title="State Management"
          content="Manage your decentralized application state with ease."
          image="https://image.flaticon.com/icons/png/512/1374/1374753.png"
        />
        <FeatureCard
          title="Global Hooks"
          content="Take full advantage of the latest React Hooks paradigm."
          image="https://image.flaticon.com/icons/png/512/975/975821.png"
        />
        <FeatureCard
          title="Flexible Components"
          content="A flexible design system to display important information."
          image="https://image.flaticon.com/icons/png/512/817/817737.png"
        />
      </Atom.Flex>
    </Atom.Container>
  );
};

const FeatureCard = props => {
  return (
    <Atom.Flex
      card
      column
      sx={{
        width: ["100%", "100%", "30%"]
      }}
    >
      {/* <Atom.Image src={props.image} sx={{maxWidth: 45, mb: 3}} /> */}
      <Atom.Heading as="h5" xl>
        {props.title}
      </Atom.Heading>
      <Atom.Paragraph>{props.content}</Atom.Paragraph>
    </Atom.Flex>
  );
};

const ExamplesPreview = props => {
  return (
    <Atom.Container>
      <Atom.Heading giga sx={{ textAlign: "center", my: 3 }}>
        Getting Started
      </Atom.Heading>
      <Atom.Heading as="h5" normal md sx={{ textAlign: "center" }}>
        Start building your Ethereum Decentralized Application Today
      </Atom.Heading>
      <Atom.Flex column>
        <EthersProviderSetup />
        <EthersProviderContractInitialize />
        <EthersProviderExtensionsInitialize />
      </Atom.Flex>
    </Atom.Container>
  );
};

export default HomePage;
