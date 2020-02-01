/* --- Local --- */
import {
  BlockCurrent,
  ContractList,
  ContractSelectByAddress,
  ContractSelectByName
} from "@ethers-react/ui";

export default props => {
  return (
    <Atom.Flex column sx={{ p: 3 }}>
      <BlockCurrent as="h2" xl />
      <Atom.Flex>
        <Atom.Box sx={{ flex: 3, p: 3 }}>
          <Atom.Heading>Contract List</Atom.Heading>
          <ContractList />
        </Atom.Box>
        <Atom.Box sx={{ flex: 2, p: 3 }}>
          <Atom.Heading>Contract Select By Name</Atom.Heading>
          <ContractSelectByName contractName="MeshDevCoin" />
          <Atom.Heading>Contract Select By Address</Atom.Heading>
          <ContractSelectByAddress contractAddress="0x670261b2841a8101697C1336Ab17Af8864915a3d" />
        </Atom.Box>
      </Atom.Flex>
    </Atom.Flex>
  );
};
