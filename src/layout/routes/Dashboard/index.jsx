import { Dashboard } from "@templates";
import { Router } from "@reach/router";

import { Overview, BuyDomain } from "@pages";

const Introduction = props => {
  return <Atom.Flex>Hello World</Atom.Flex>;
};

const DashboardPage = props => (
  <Dashboard>
    <Router width="100%" style={{ height: "100%" }} primary={false}>
      <Overview path="/" />
      <BuyDomain path="/buy" />
    </Router>
  </Dashboard>
);

export default DashboardPage;
