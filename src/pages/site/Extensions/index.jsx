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
    <Atom.Box sx={{ bg: "smoke", p: 3 }}>
      <Atom.Container>
        <Atom.Flex between>
          <Atom.Heading m0 xxl>
            Core System
          </Atom.Heading>
          <Atom.Span tag>@ethers-react/ui</Atom.Span>
        </Atom.Flex>
      </Atom.Container>
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
