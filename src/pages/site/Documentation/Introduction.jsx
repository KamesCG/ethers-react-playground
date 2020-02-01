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
      <Atom.Heading as="h4" xxl>
        Examples
      </Atom.Heading>
    </Atom.Flex>
  );
};
