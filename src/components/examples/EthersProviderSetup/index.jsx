import { ExampleCard } from "@components";

/* --- Component --- */
const EthersCoreSetup = props => {
  return (
    <ExampleCard>
      <Atom.Box sx={{ p: 3 }}>
        <Atom.Heading as="h5" xxl>
          Setup Provider
        </Atom.Heading>
        <Atom.Paragraph>
          The first step is to initialize ethers-react provider. The provider
          manages global state, provides blockchain selectors and enables other
          important functionality.
        </Atom.Paragraph>
      </Atom.Box>
      <Molecule.CodeHighlight>
        {`
import { EthersProvider } from "ethers-react-system";

const Application = ({ children }) => (
    <EthersProvider>
      {children}
    </EthersProvider>
  )

export default Application
  `}
      </Molecule.CodeHighlight>
    </ExampleCard>
  );
};
export default EthersCoreSetup;
