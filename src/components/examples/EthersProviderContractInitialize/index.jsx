import { ExampleCard } from "@components";

/* --- Component --- */
const EthersCoreSetup = props => {
  return (
    <ExampleCard>
      <Atom.Box sx={{ p: 3 }}>
        <Atom.Heading as="h5" xxl>
          Initialize Contracts
        </Atom.Heading>
        <Atom.Paragraph>
          Pass in contracts (abi, bytecode and address) to initialize contracts
          on application start.
        </Atom.Paragraph>
      </Atom.Box>
      <Molecule.CodeHighlight>
        {`
import { EthersProvider } from "ethers-react-system";
import ERC20 from "@contracts/ERC20";

// Contract Initialization Array
const contracts = [
  {
    address: "0x...", 
    abi: ERC20.bytecode,
    bytecode: ERC20.bytecode
  }
];
const Application = ({ children }) => (
    <EthersProvider contracts={contracts}>
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
