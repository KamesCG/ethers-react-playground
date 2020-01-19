/**
 * @name RegionTop
 * @description Default top region for site template.
 */
/* --- Global --- */
import { ColorMode } from "@components";

export default props => (
  <Atom.Flex alignCenter between sx={{ variant: "regions.header" }}>
    {/* Left */}
    <Atom.Flex alignCenter>
      <Atom.Flex>
        <Molecule.Link to="/">
          <Atom.Heading sx={{ mr: 3, mb: 2 }}>{GLOBAL.siteName}</Atom.Heading>
        </Molecule.Link>
      </Atom.Flex>

      {/* Menu */}
      <Atom.Flex alignCenter ml={4}>
        <Molecule.Menu
          sx={{
            m: 2,
            mx: 1,
            fontSize: 1
          }}
          items={[
            {
              label: "System",
              to: "/core"
            },
            {
              label: "UI",
              to: "/user-interface"
            },
            {
              label: "Examples",
              to: "/examples"
            },
            {
              label: "Extensions",
              to: "/extensions"
            },
            {
              label: "ERC20",
              to: "/extensions/erc20"
            },
            {
              label: "ERC721",
              to: "/extensions/erc721"
            },
            {
              label: "DeFi",
              to: "/extensions/defi"
            }
          ]}
        />
      </Atom.Flex>
    </Atom.Flex>

    {/* Right */}
    <Atom.Flex
      alignCenter
      sx={{ justifyContent: "flex-end", alignContent: "flex-end" }}
    >
      <Atom.Box sx={{ mx: 3 }}>
        <ColorMode />
      </Atom.Box>
      <Molecule.Link to="/documentation">
        <Atom.Span tag sm>
          Documentation
        </Atom.Span>
      </Molecule.Link>
    </Atom.Flex>
  </Atom.Flex>
);
