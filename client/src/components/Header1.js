/** @format */

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header1 = () => {
  return (
    <Wrapper>
      <Link to="/">
        <HeaderWrapper>Home</HeaderWrapper>
      </Link>
      <Link to="/about">
        <HeaderWrapper>About</HeaderWrapper>
      </Link>{" "}
      <Link to="/contact">
        <HeaderWrapper>Contact</HeaderWrapper>
      </Link>
    </Wrapper>
  );
};

export default Header1;

const Wrapper = styled.span`
  display: flex;
  position: fixed;
  justify-content: flex-start;
  /* align-items: center; */
  width: 100%;
  height: 40px;
  border: 1px solid black;
  color: white;
  background-color: black;
  @media (max-width: 560px) {
    min-width: 560px;
  }
`;
const HeaderWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  color: white;

  @media (max-width: 560px) {
    min-width: 560px;
  }
`;
