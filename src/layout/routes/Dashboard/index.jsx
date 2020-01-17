import { Dashboard } from "@templates";
import { Router } from "@reach/router";

const Introduction = props => {
  return <Atom.Flex>Hello World</Atom.Flex>;
};

const DashboardPage = props => (
  <Dashboard>
    <Router width="100%" primary={false}>
      <Introduction path="/" />
    </Router>
  </Dashboard>
);

export default DashboardPage;
