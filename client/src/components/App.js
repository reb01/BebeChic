/** @format */

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  coversDot,
  coversFloral,
  coversOrganicCotton,
  blanketsAll,
} from "../data";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import GlobalStyles from "../GlobalStyles";
// import Header1 from "./Header1";
import Header2 from "./Header2";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Shop from "./Shop";
import BuyNow from "./BuyNow";
import Blankets from "./Blankets";
import Covers from "./Covers";
import OrgCovers from "./OrgCovers";
import styled from "styled-components";

let allCovs = {
  ...coversDot,
  ...coversFloral,
  ...coversOrganicCotton,
};

let CottonCovs = {
  ...coversDot,
  ...coversFloral,
};

let OrgCovs = {
  ...coversOrganicCotton,
};

let allProds = {
  ...coversDot,
  ...coversFloral,
  ...coversOrganicCotton,
  ...blanketsAll,
};

const App = () => {
  return (
    <Wrapper>
      <Router>
        <Navbar />
        <Header2 />
        <Switch>
          <Route exact path="/">
            <Homepage allProds={allProds} />
          </Route>
          <Route exact path="/shop">
            <Shop allProds={allProds} />
          </Route>
          <Route exact path="/covers/:ending">
            <Covers
              allCovs={allCovs}
              allProds={allProds}
              CottonCovs={CottonCovs}
              OrgCovs={OrgCovs}
              blanketsAll={blanketsAll}
            />
          </Route>
          <Route exact path="/orgcovers">
            <OrgCovers />
          </Route>
          <Route exact path="/blankets">
            <Blankets />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/covers/buyNow/:no">
            <BuyNow allProds={allProds} />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
        <GlobalStyles />
      </Router>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  box-sizing: border-box;
  max-width: 1400px;
  width: 95%;
  margin: 0 auto;
  min-height: calc(0.76 * 100vh);
  overflow: hidden;
  border-left: solid;
  border-right: solid;
  border-width: 1px;
  border-color: hsl(0, 0%, 93%);

  /* border-style: solid;
  border-width: 1px;
  border-color: black; */
`;
