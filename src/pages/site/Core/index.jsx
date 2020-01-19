/* --- Components --- */
import {
  EthersProviderSetup,
  EthersProviderContractInitialize,
  EthersProviderExtensionsInitialize
} from "@components";

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
          Core System
        </Atom.Heading>
        <Atom.Span tag>@ethers-react/system</Atom.Span>
      </Atom.Flex>
    </Atom.Box>
  );
};

const Content = props => {
  return (
    <Atom.Container>
      <Atom.Flex column>
        <EthersProviderSetup />
        <EthersProviderContractInitialize />
        <EthersProviderExtensionsInitialize />
      </Atom.Flex>
    </Atom.Container>
  );
};

export default CorePage;
