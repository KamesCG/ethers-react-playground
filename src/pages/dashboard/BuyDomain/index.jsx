/* --- Components --- */
const DashboardBuyDomainPage = props => {
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
          Buy Sub-Domain
        </Atom.Heading>
        <Atom.Span tag>How It Works</Atom.Span>
      </Atom.Flex>
    </Atom.Box>
  );
};

const Content = props => {
  return (
    <Atom.Container>
      <Atom.Flex column sx={{ py: 3 }}>
        <Atom.Heading as="h3" xxl>
          Buy Sub-Domain
        </Atom.Heading>
      </Atom.Flex>
    </Atom.Container>
  );
};

export default DashboardBuyDomainPage;
