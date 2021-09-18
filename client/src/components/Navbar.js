/** @format */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import styled from "styled-components";
import logo from "../assets/BBCBanner1.png";
import { useHistory } from "react-router-dom";
import { FcLikePlaceholder } from "react-icons/fc";
import logo4 from "../assets/new1.png";
import logo3 from "../assets/new5.png";
// import "./Navbar.css";

function Navbar() {
  const history = useHistory();
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <>
      <NavbarWrapper>
        {" "}
        <HeaderWrapper>
          <Img1
            src={logo}
            alt="Logo"
            width="185px"
            onClick={() => {
              history.push("/");
            }}
          />
        </HeaderWrapper>{" "}
        <NavMenu>
          <NavItem>
            <NavLinks to="/">Home</NavLinks>
          </NavItem>
          <NavItem onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <NavLinks to="/covers/all">Shop</NavLinks>
            {dropdown && <Dropdown />}
          </NavItem>
          <NavItem>
            <NavLinks to="/about">About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/contact">Contact Us</NavLinks>
          </NavItem>
        </NavMenu>{" "}
        {/* <HeaderWrapper>
          {" "} */}
        {/* <FcLikePlaceholder size="30" />{" "}
          <Link1 to={`/covers/${"allCovers"}`}>
            <RightNav>
              100% Oeko-Tex® Certified Cotton Breastfeeding Covers
            </RightNav> */}
        {/* <img src={logo3} alt="Logo" width="150px" /> */} {/* </Link1> */}
        {/* </HeaderWrapper>
        <HeaderWrapper>
          <FcLikePlaceholder size="30" />{" "}
          <Link1 to={`/covers/${"blanket"}`}>
            <RightNav>100% Organic Bamboo Cellular Blankets</RightNav>{" "}
          </Link1> */}
        {/* <img src={logo4} alt="Logo" width="130px" /> */}
        {/* </HeaderWrapper> */}
      </NavbarWrapper>
    </>
  );
}

export default Navbar;

const Img1 = styled.img`
  margin-left: 20px;
  margin-right: 40px;
  &:hover {
    cursor: pointer;
  }
`;
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 170px;
  width: 300px;
  color: black;
  @media (max-width: 560px) {
    min-width: 560px;
  }
`;
const NavbarWrapper = styled.div`
  width: 100vw;
  background: white;
  color: black;
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  padding-left: 60px;
  padding-right: 20px;
`;
const NavItem = styled.li`
  display: flex;
  align-items: center;
  height: 80px;
  font-weight: bolder;
`;
const NavLinks = styled(Link)`
  color: black;
  text-decoration: none;
  padding: 0.5rem 1rem;
  &:hover {
    color: black;

    background-color: #f2f2f2;
    border-radius: 4px;
    transition: all 0.2s ease-out;
  }
`;
const NavMenu = styled.li`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 85vw;
  justify-content: start;
  margin-right: 2rem;
  z-index: 1000;
`;
