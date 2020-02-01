import { Transfer } from "@ethers-react/erc20";

export const ERC20SectionDemo = props => {
  return (
    <Atom.Box sx={{ p: 4 }}>
      <TransferDemo />
    </Atom.Box>
  );
};

export const TransferDemo = props => {
  return (
    <Atom.Box>
      <Transfer contractName="MeshDevCoin" />
      <Atom.HorizontalRule sx={{ my: 4 }} />
      <Transfer contractName="MeshDevCoins" />
    </Atom.Box>
  );
};
