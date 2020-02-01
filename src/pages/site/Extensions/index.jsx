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
            Extensions
          </Atom.Heading>
          <Atom.Span tag>@ethers-react/[insert-extension-name]</Atom.Span>
        </Atom.Flex>
      </Atom.Container>
    </Atom.Box>
  );
};

const Content = props => {
  return (
    <Atom.Container sx={{ py: 3 }}>
      <Atom.Flex between sx={{ flexWrap: "wrap" }}>
        <ExtenionCard
          title="3Box"
          content="Compose Authentication, Storage and Messaging."
          image="https://pbs.twimg.com/profile_images/1125210143484985344/6Kae1Al3_400x400.png"
        />
        <ExtenionCard
          title="Subspace"
          content="Simplified Blockchain Caching &amp; Streams."
          image="data:image/png;base64,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"
        />
        <ExtenionCard
          title="Decentralized Finance"
          content="Powering the Open Finance Blockchain Revolution."
          image="data:image/png;base64,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"
        />
      </Atom.Flex>

      <Atom.Box sx={{ mt: 4, textAlign: "center" }}>
        <Atom.Heading as="h4" xxl>
          Extend Ethers React Today
        </Atom.Heading>
        <Atom.Paragraph>
          Have a cool extension you want to build? Get rewarded for building it!
        </Atom.Paragraph>
        <Atom.Button white lg>
          Build Extension
        </Atom.Button>
      </Atom.Box>
    </Atom.Container>
  );
};

const ExtenionCard = props => {
  return (
    <Atom.Flex
      card
      column
      sx={{
        width: ["100%", "100%", "30%"]
      }}
    >
      <Atom.Image src={props.image} sx={{ maxWidth: 45, mb: 3 }} />
      <Atom.Heading as="h5" xl>
        {props.title}
      </Atom.Heading>
      <Atom.Paragraph>{props.content}</Atom.Paragraph>
    </Atom.Flex>
  );
};

export default CorePage;
