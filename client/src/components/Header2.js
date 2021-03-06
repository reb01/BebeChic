/** @format */

import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/BBCBanner1.png";
import logo1 from "../assets/Amazon.png";
import logo2 from "../assets/MadeInUk3.jpg";
import logo3 from "../assets/label.jpg";

const Header2 = () => {
  const history = useHistory();
  return (
    <Wrapper>
      <HeaderWrapper>
        <Img1
          src={logo2}
          alt="Logo"
          width="120px"
          onClick={() => {
            history.push("/");
          }}
        />
      </HeaderWrapper>{" "}
      <HeaderWrapper>
        <Logo
          onClick={() => {
            window.location.href = `https://www.amazon.co.uk/s?me=AYYDT3IC5J99F&marketplaceID=A1F83G8C2ARO7P`;
          }}
        >
          <Img3 src={logo1} alt="Logo" width="220px" />
        </Logo>
      </HeaderWrapper>
      <HeaderWrapper>
        <Img2 src={logo3} alt="Logo" width="176px" />
      </HeaderWrapper>{" "}
    </Wrapper>
  );
};

export default Header2;

const Wrapper = styled.div`
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
  /* width: 100vw; */
  height: 140px;
  color: black;
  box-shadow: 2px 0px 2px 2px rgba(0, 0, 0, 0.03);
`;
const Img2 = styled.img`
  &:hover {
    box-shadow: 0px 0px 8px 7px rgba(230, 230, 230, 0.15);
    -webkit-box-shadow: 0px 0px 8px 7px rgba(230, 230, 230, 0.75);
    -moz-box-shadow: 0px 0px 8px 7px rgba(230, 230, 230, 0.75);
    transform: scale(1.5);
    transition: 0.3s all ease-in-out;
  }
  @media (max-width: 800px) {
    width: 120px;
  }
  @media (max-width: 580px) {
    width: 80px;
  }
`;
const Img1 = styled.img`
  @media (max-width: 800px) {
    width: 70px;
  }
  @media (max-width: 580px) {
    width: 40px;
  }
`;

const Img3 = styled.img`
  @media (max-width: 800px) {
    width: 140px;
  }
  @media (max-width: 580px) {
    width: 80px;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 170px;
  width: 33.3333333vw;
  color: black;
`;
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: white;
  &:hover {
    cursor: pointer;
  }
`;
