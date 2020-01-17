/**
 * @name RegionTop
 * @description Default top region for site template.
 */
/* --- Global --- */
// import {ColorMode} from 'common';

export default props => (
  <Atom.Flex alignCenter between sx={{ variant: "regions.header" }}>
    {/* Left */}
    <Atom.Flex alignCenter>
      <Atom.Flex>
        <Molecule.Link to="/">
          <Atom.Heading sx={{ mr: 3, mb: 0 }}>{GLOBAL.siteName}</Atom.Heading>
        </Molecule.Link>
      </Atom.Flex>

      {/* Menu */}
      <Atom.Flex alignCenter ml={4}>
        <Molecule.Menu
          sx={{
            m: 2,
            mx: 2
          }}
          items={[
            {
              label: "Core",
              to: "/core"
            },
            {
              label: "UI",
              to: "/components"
            },
            {
              label: "ERC20",
              to: "/erc20"
            },
            {
              label: "ERC721",
              to: "/erc721"
            },
            {
              label: "DeFi",
              to: "/erc721"
            },
            {
              label: "Examples",
              to: "/examples"
            },
            {
              label: "Documentation",
              to: "/documentation"
            }
          ]}
        />
      </Atom.Flex>
    </Atom.Flex>

    {/* Right */}
    <Atom.Flex alignCenter>
      <Atom.Box sx={{ mx: 3 }}>{/* <ColorMode /> */}</Atom.Box>
    </Atom.Flex>
  </Atom.Flex>
);
