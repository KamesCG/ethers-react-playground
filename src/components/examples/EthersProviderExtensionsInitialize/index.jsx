import { ExampleCard } from "@components";

/* --- Component --- */
const EthersCoreSetup = props => {
  return (
    <ExampleCard>
      <Atom.Box sx={{ p: 3 }}>
        <Atom.Heading as="h5" xxl>
          Initialize Extensions
        </Atom.Heading>
        <Atom.Paragraph>
          Libraries like 3Box provide additional functionality by wrapping
          providers. Developers can easily enhance ethers-react with extensions.
        </Atom.Paragraph>
      </Atom.Box>
      <Molecule.CodeHighlight>
        {`
import { EthersProvider } from "@ethers-react/system";
import Box from "3box";
import { 
  useProfileRequest, 
  useProfilePublicSet 
  useProfilePrivateSet 
} from "ethers-react-3box";

// Extensions
const extensions = [
  {
    plugins: '3box-extension' 
    library: Box,
    initialize: {
      function: 'openBox'
      hooks [
        useProfileRequest,
        useProfilePublicSet,
        useProfilePrivateSet
      ]
    }
  }
];
const Application = ({ children }) => (
    <EthersProvider extensions={extensions}>
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
