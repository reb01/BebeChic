/** @format */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../assets/black.jpeg";
import logo1 from "../assets/line.png";
import logo2 from "../assets/3Blankets.jpg";
import logo3 from "../assets/DitsyClose3.jpg";
import logo4 from "../assets/Organic5.jpg";
import logo5 from "../assets/new1.png";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Toggle.css";

const Homepage = () => {
  return (
    <>
      <Wrapper>
        <ImagesWrapper>
          <Logo>
            <ImgLeft src={logo} alt="Pic1" />
          </Logo>
          <BackgroundColour>
            <Title>BebeChic.UK</Title>

            <img src={logo1} alt="Pic2" style={{ width: 100 }} />
            <LowerTitle>Specializing in:</LowerTitle>
            <Link1 style={{ textDecoration: "none" }} to={`covers/${"cotton"}`}>
              <LowerText1>100% Cotton Breastfeeding Covers</LowerText1>
            </Link1>
            <And>+</And>
            <Link1
              style={{ textDecoration: "none" }}
              to={`covers/${"organic"}`}
            >
              <LowerText2>100% Organic Cotton Breastfeeding Covers</LowerText2>
            </Link1>
            <And>+</And>
            <Link1
              style={{ textDecoration: "none" }}
              to={`covers/${"blanket"}`}
            >
              <LowerText3>
                100% Organic Bamboo Cellular Baby Blankets
              </LowerText3>
            </Link1>
            <Heart>
              <AiFillHeart size="25" />
            </Heart>
            <ButtonDiv>
              <Link1 to={`covers/${"all"}`}>
                <ShopNowButton>SHOP ALL PRODUCTS</ShopNowButton>
              </Link1>
            </ButtonDiv>
          </BackgroundColour>
        </ImagesWrapper>

        <FirstSection>
          <Title>Products</Title>
          <PhotosWrapper>
            <ColumnDiv>
              <div class="container">
                <Link1 to={`covers/${"allCovers"}`}>
                  <Img
                    src={logo3}
                    alt="Pic2"
                    style={{
                      maxWidth: 315,
                      margin: 40,
                      height: 310,
                      border: "1px solid #f0f1f2",
                    }}
                  />
                  <div class="after">
                    <TitleBottom>All Breastfeeding Covers</TitleBottom>
                  </div>
                </Link1>
              </div>

              <TextUnder>Shop All Breastfeeding Covers</TextUnder>
            </ColumnDiv>

            <ColumnDiv>
              <div class="container">
                <Link1 to={`covers/${"organic"}`}>
                  <Img
                    src={logo4}
                    alt="Pic2"
                    style={{
                      width: 315,
                      margin: 40,
                      height: 310,
                      border: "1px solid #f0f1f2",
                    }}
                  />
                  <div class="after">
                    <TitleBottom>Organic Breastfeeding Covers</TitleBottom>
                  </div>
                </Link1>{" "}
              </div>
              <TextUnder>Shop Organic Breastfeeding Covers</TextUnder>
            </ColumnDiv>

            <ColumnDiv>
              <div class="container">
                <Link1 to={`covers/${"blanket"}`}>
                  <Img
                    src={logo2}
                    alt="Pic2"
                    style={{
                      width: 315,
                      margin: 40,
                      height: 310,
                      border: "1px solid #f0f1f2",
                    }}
                  />
                  <div class="after">
                    <TitleBottom>Cellular Baby Blankets</TitleBottom>
                  </div>
                </Link1>{" "}
              </div>
              <TextUnder>Shop Cellular Baby Blankets</TextUnder>
            </ColumnDiv>
          </PhotosWrapper>
        </FirstSection>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  min-height: 81vh;
  background-color: #ffffff;
`;
const ImagesWrapper = styled.div`
  display: flex;

  align-items: flex-start;
  width: 100%;
  overflow: hidden;
  justify-content: center;
  height: 600px;
  background-color: #ffffff;
  /* margin-bottom: 10px; */
  @media (max-width: 1100px) {
    flex-wrap: wrap;
    height: 550px;
  }
`;
const BackgroundColour = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 600px;
  background-color: #f6e4e1;
  @media (max-width: 1000px) {
    width: 100vw;
  }
`;
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  background-color: white;
  min-height: 600px;
  @media (max-width: 1000px) {
    display: none;
  }
`;
const ImgLeft = styled.img`
  width: 100%;
  max-height: 600px;
`;

const Img = styled.img`
  max-width: 315;
  margin: 40px;
  height: 310;
  border-radius: 38.8548px;
  border: "1px solid #f0f1f2";
`;
const Link1 = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: #c91830;
  }
  cursor: pointer;
`;
const TextUnder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
`;
const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center;
  font-size: 20px; */
`;
const TitleBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 310px;
  width: 310px;
  font-family: Crimson Text;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 33px;
  color: #ffffff;
`;

const FirstSection = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  background-color: #faf4f2;
  padding-top: 40px;
  padding-bottom: 20px;
  margin-bottom: 60px;
`;

const PhotosWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 90%;
  justify-content: center;
  margin: 40px;
`;
const Heart = styled.div``;
const ShopNowButton = styled.button`
  display: flex;
  height: 40px;
  font-size: 15px;
  justify-content: center;
  align-items: center;
  width: 220px;
  background-color: transparent;
  border-width: 0.5px;
  font-weight: 1;
  &:hover {
    color: #c91830;
  }
  cursor: pointer;
`;
const ButtonDiv = styled.div`
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
  font-weight: 1;
`;

const Title = styled.div`
  font-size: 34px;
  font-weight: 700;
`;
const LowerTitle = styled.div`
  height: 40px;
  font-size: 19px;
  justify-content: center;
`;
const LowerText1 = styled.div`
  display: flex;
  font-size: 19px;
  height: 40px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

const LowerText2 = styled.div`
  display: flex;
  height: 40px;
  font-size: 19px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

const LowerText3 = styled.div`
  display: flex;
  text-decoration: none;
  height: 40px;
  font-size: 19px;
  justify-content: center;
  align-items: center;
`;
const And = styled.div`
  display: flex;
  height: 20px;
  font-size: 16px;
  justify-content: center;
  align-items: center;
`;

export default Homepage;
