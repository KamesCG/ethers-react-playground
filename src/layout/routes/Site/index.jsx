/* --- Global --- */
import React from "react";
import { Router } from "@reach/router";

/* --- Local --- */
import { Site } from "@templates";
import { Home, Examples } from "@pages";

/* --- Component --- */
const IndexPage = () => (
  <Site>
    <Router primary={false} style={{ width: "100%" }}>
      <Home path="/" />
      <Examples path="/examples" />
    </Router>
  </Site>
);

export default IndexPage;
