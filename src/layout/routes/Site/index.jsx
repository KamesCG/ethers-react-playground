/* --- Global --- */
import React from "react";
import { Router } from "@reach/router";

/* --- Local --- */
import { Site } from "@templates";
import {
  Home,
  GettingStarted,
  UserInterface,
  Extensions,
  Examples,
  Documentation
} from "@pages";

/* --- Component --- */
const IndexPage = () => (
  <Site>
    <Router
      primary={false}
      style={{ display: "flex", flex: 1, height: "100%", width: "100%" }}
    >
      <Home path="/" />
      <GettingStarted path="/started" />
      <Examples path="/examples/*" />
      <Documentation path="/documentation/*" />
      <UserInterface path="/user-interface" />
      <Extensions path="/extensions/*" />
    </Router>
  </Site>
);

export default IndexPage;
