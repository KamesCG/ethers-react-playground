/* --- Global --- */
import React from "react";
import { Router } from "@reach/router";

/* --- Local --- */
import { Site } from "@templates";
import { Home, Core, UserInterface, Extensions, Examples } from "@pages";

/* --- Component --- */
const IndexPage = () => (
  <Site>
    <Router
      primary={false}
      style={{ display: "flex", flex: 1, height: "100%", width: "100%" }}
    >
      <Home path="/" />
      <Core path="/core" />
      <Examples path="/examples/*" />
      <UserInterface path="/user-interface" />
      <Extensions path="/extensions/*" />
    </Router>
  </Site>
);

export default IndexPage;
