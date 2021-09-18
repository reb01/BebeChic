/** @format */

import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import BlanketsDetails from "./BlanketsDetails";
import CoversDetails from "./CoversDetails";
import CoverBlanketDetails from "./CoverBlanketDetails";
import OrganicDetails from "./OrganicDetails";
import styled from "styled-components";
import logo from "../assets/squiggly.jpg";
import { useParams } from "react-router-dom";
import { FaBaby } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";

import {
  coversDot,
  coversFloral,
  CottonCovs,
  coversOrganicCotton,
  blanketsAll,
} from "../data";
import BuyNow from "./BuyNow";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Covers = ({ allCovs, allProds, CottonCovs, OrgCovs, blanketsAll }) => {
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);
  const { ending } = useParams();
  console.log(CottonCovs, "cottoncovs");
  console.log(coversDot, "coversDot");
  console.log(ending, "ending");
  console.log(Object.values(CottonCovs).map((item) => item.no));
  console.log(Object.values(CottonCovs).map((item) => item.avatarSrc));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!Object.values(allCovs).map((item) => item.amazonSrc)) {
    return <div>Loading...</div>;
  }
  if (!Object.values(allProds).map((item) => item.amazonSrc)) {
    return <div>Loading...</div>;
  }
  if (!Object.values(CottonCovs).map((item) => item.amazonSrc)) {
    return <div>Loading...</div>;
  }
  if (!Object.values(OrgCovs).map((item) => item.amazonSrc)) {
    return <div>Loading...</div>;
  }

  if (!Object.values(allProds).map((item) => item.amazonSrc)) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      {ending === "cotton" && (
        <>
          <Title>Cotton Breastfeeding Covers</Title>
          <Logo>
            <img src={logo} alt="Pic1" style={{ width: 130, marginTop: 20 }} />
          </Logo>
          <About>
            <TitleWrapper onClick={executeScroll}>
              <Title1>See Full Details</Title1>
              <IoIosArrowDropdown size="25" />
            </TitleWrapper>
          </About>
          <Photos>
            {Object.values(CottonCovs).map((item) => (
              <Div to={`buyNow/${item.no}`}>
                <WrapperInd>
                  <Avatar alt="avatar" src={item.avatarSrc} />{" "}
                  <Description>{item.description}</Description>
                  <Color>{item.color}</Color>
                  <Price>{item.price}</Price>
                </WrapperInd>
              </Div>
            ))}{" "}
            <div>
              {" "}
              <div ref={myRef}>
                <CoversDetails />
              </div>
            </div>
          </Photos>
        </>
      )}
      {ending === "organic" && (
        <>
          <Title>Organic Cotton Breastfeeding Covers</Title>
          <Logo>
            <img src={logo} alt="Pic1" style={{ width: 130, marginTop: 20 }} />
          </Logo>
          <About>
            <TitleWrapper onClick={executeScroll}>
              <Title1>See Full Details</Title1>
              <IoIosArrowDropdown size="25" />
            </TitleWrapper>
          </About>
          <Photos>
            {Object.values(OrgCovs).map((item) => (
              <Div to={`buyNow/${item.no}`}>
                <WrapperInd>
                  <Avatar
                    alt="avatar"
                    src={item.avatarSrc}
                    style={{ width: 285 }}
                  />
                  <Description>{item.description}</Description>
                  <Color>{item.color}</Color>
                  <Price>{item.price}</Price>
                </WrapperInd>
              </Div>
            ))}
            <div ref={myRef}>
              <OrganicDetails />
            </div>
          </Photos>
        </>
      )}
      {ending === "blanket" && (
        <>
          <Title>Organic Bamboo Cellular Blankets</Title>
          <Logo>
            <img src={logo} alt="Pic1" style={{ width: 130, marginTop: 20 }} />
          </Logo>
          <About>
            <TitleWrapper onClick={executeScroll}>
              <Title1>See Full Details</Title1>
              <IoIosArrowDropdown size="25" />
            </TitleWrapper>
          </About>
          <Photos>
            {Object.values(blanketsAll).map((item) => (
              <>
                <Div to={`buyNow/${item.no}`}>
                  <WrapperInd>
                    <Avatar alt="avatar" src={item.avatarSrc} />{" "}
                    <Description>{item.description}</Description>
                    <Color>{item.color}</Color>
                    <Price>{item.price}</Price>
                  </WrapperInd>
                </Div>{" "}
              </>
            ))}{" "}
            <div ref={myRef}>
              <BlanketsDetails />
            </div>
          </Photos>
        </>
      )}
      {ending === "all" && (
        <>
          <Title>All Products</Title>
          <Logo>
            <img src={logo} alt="Pic1" style={{ width: 130, marginTop: 20 }} />
          </Logo>
          <About>
            <TitleWrapper onClick={executeScroll}>
              <Title1>See Full Details</Title1>
              <IoIosArrowDropdown size="25" />
            </TitleWrapper>{" "}
          </About>
          <Photos>
            {Object.values(allProds).map((item) => (
              <Div to={`buyNow/${item.no}`}>
                <WrapperInd>
                  <Avatar alt="avatar" src={item.avatarSrc} />{" "}
                  <Description>{item.description}</Description>
                  <Color>{item.color}</Color>
                  <Price>{item.price}</Price>
                </WrapperInd>
              </Div>
            ))}{" "}
            <div ref={myRef}>
              <CoverBlanketDetails />
            </div>
          </Photos>
        </>
      )}
      {ending === "allCovers" && (
        <>
          <Title>All Breastfeeding Covers</Title>
          <Logo>
            <img src={logo} alt="Pic1" style={{ width: 130, marginTop: 20 }} />
          </Logo>
          <About>
            <TitleWrapper onClick={executeScroll}>
              <Title1>See Full Details</Title1>
              <IoIosArrowDropdown size="25" />
            </TitleWrapper>{" "}
          </About>
          <Photos>
            {Object.values(allCovs).map((item) => (
              <Div to={`buyNow/${item.no}`}>
                <WrapperInd>
                  <Avatar alt="avatar" src={item.avatarSrc} />{" "}
                  <Description>{item.description}</Description>
                  <Color>{item.color}</Color>
                  <Price>{item.price}</Price>
                </WrapperInd>
              </Div>
            ))}
            <div ref={myRef}>
              <CoversDetails />
            </div>
          </Photos>
        </>
      )}
    </Wrapper>
  );
};

export default Covers;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const Space = styled.div`
  width: 100vw;
  height: 180px;
`;
const TitleWrapper = styled.div`
  display: flex;
  cursor: pointer;
`;
const About = styled.div`
  /* margin-top: 20px; */
  width: 85vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const WrapperInd = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 0.05px solid #fdf2ff; */
  /* #ebf4fa */
  /* #f7f7f7 */
  width: 350px;
  height: 470px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  padding: 40px;
  &:hover {
    box-shadow: 0px 0px 8px 7px rgba(230, 230, 230, 0.15);
    -webkit-box-shadow: 0px 0px 8px 7px rgba(230, 230, 230, 0.75);
    -moz-box-shadow: 0px 0px 8px 7px rgba(230, 230, 230, 0.75);
    transform: scale(1.06);
    transition: 0.3s all ease-in-out;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 700;
  &:hover {
    color: #c91830;
  }
  cursor: pointer;
`;
const Price = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  color: #27a3f5;
  /* font-weight: 700; */
  &:hover {
    color: #c91830;
  }
  cursor: pointer;
`;
const Color = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  &:hover {
    color: #c91830;
  }
  cursor: pointer;
`;

const Avatar = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 250px;
  padding-left: 40px;
  padding-left: 40px;
  padding-top: 40px;
  padding-bottom: 40px;
  /* &:hover {
    transform: scale(1.1);
    transition: 0.3s all ease-in-out;
  } */
`;
const Title = styled.div`
  font-size: 34px;
  font-weight: 700;
`;

const Title1 = styled.div`
  font-size: 26px;
  font-weight: 700;
  margin-right: 20px;
`;
const Div = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 400px;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: black;
`;

const Photos = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* border: 1px solid red; */
  /* width: 80vw; */
  align-items: center;
  justify-content: center;
  margin: 40px;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;
