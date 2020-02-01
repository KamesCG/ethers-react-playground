/* --- Global --- */
import React from "react";
import { hooks, withEthers } from "@ethers-react/system";
import { Span } from "rapid-atoms";
/* ---  Component --- */
export const BlockCurrent = ({ sx, ...props }) => {
  const block = hooks.useBlockMined();
  return (
    <Span sx={sx} {...props}>
      <strong>Current Block: </strong>
      {block}
    </Span>
  );
};
