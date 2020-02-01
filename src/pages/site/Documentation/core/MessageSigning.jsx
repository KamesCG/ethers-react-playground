/* --- Local --- */
import {
  SignedMessageLocal,
  SignedMessageTypedLocal,
  SignedMessageTypedLocalV3
} from "@ethers-react/ui";

export default props => {
  return (
    <Atom.Flex column sx={{ p: 3 }}>
      <SignedMessageLocal />
      <Atom.Heading>Typed Message</Atom.Heading>
      <SignedMessageTypedLocal />
      <Atom.Heading>Typed Message V3</Atom.Heading>
      <SignedMessageTypedLocalV3 />
    </Atom.Flex>
  );
};
