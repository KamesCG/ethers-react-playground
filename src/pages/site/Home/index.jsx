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
      <Featured />
      <ExamplesPreview />
    </Atom.Box>
  );
};

const Featured = props => {
  return (
    <Atom.Container sx={{ my: 5 }}>
      <Atom.Heading mega sx={{ textAlign: "center", my: 3 }}>
        Features
      </Atom.Heading>
      <Atom.Heading md sx={{ fontWeight: 400, textAlign: "center", my: 3 }}>
        Start building decentralized applications with ease.
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
      <Atom.Flex column>
        <EthersProviderSetup />
        <EthersProviderContractInitialize />
        <EthersProviderExtensionsInitialize />
      </Atom.Flex>
    </Atom.Container>
  );
};

export default HomePage;
