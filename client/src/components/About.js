/** @format */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../assets/About1.jpg";
import { useHistory } from "react-router-dom";
import Select from "react-select";

const About = () => {
  const history = useHistory();

  const routeChange = () => {
    let path = "/contact";
    history.push(path);
  };
  if (!logo) {
    return <div>Loading...</div>;
  }
  return (
    <Wrapper>
      <ImageBanner>
        <img src={logo} alt="Logo" style={{ height: "400px" }} />
      </ImageBanner>
      <TextWrapper>
        <TextTop>WHO WE ARE</TextTop>
        <Text>
          BebeChic Limited is based in New Milton in Hampshire. We have been
          producing our own unique shaped design of Breastfeeding Cover since
          2009. The first Breastfeeding Covers were produced when family members
          had problems finding covers that suited their needs.{" "}
        </Text>
        <TextTop>OUR BREASTFEEDING COVERS</TextTop>
        <Text>
          From those small beginnings the business has grown but we have never
          compromised on the quality of materials and manufacture. All our
          standard Breastfeeding Covers are made in the UK from Oeko-Tex
          Certified 100% cotton fabric – certified free from harmful substances
          - and are manufactured with care in UK. Our muted designs and subtle
          colours are chosen to suit the British taste and we pride ourselves on
          the high quality and value of all our products.
        </Text>{" "}
        <TextTop>OUR ORGANIC CELLULAR BABY BLANKETS</TextTop>
        <Text>
          Our 100% Organic Bamboo Cellular Blankets, also made in UK, are a
          recent addition to our range. The unique properties of bamboo plus the
          cellular structure and the Oeko-Tex Class 1 dyes of the trims, make
          our blankets safe for baby from newborn.{" "}
        </Text>
        <TextTop>OUR CUSTOMER SERVICE</TextTop>
        <Text>
          Our customer service is second to none. In the unlikely event of a
          problem you can be confident that it will be sorted out quickly and
          efficiently.
        </Text>
        <Button onClick={routeChange}>Contact Us</Button>
      </TextWrapper>
    </Wrapper>
  );
};

export default About;

const ImageBanner = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 1150px;
`;
const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-left: 70px;
  margin-right: 70px; */
  /* margin-top: 35px; */
  margin-bottom: 35px;
  font-size: 17px;
`;
const TextTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-left: 70px;
  margin-right: 70px; */
  /* margin-top: 35px; */
  margin-bottom: 25px;
  font-size: 20px;
  color: #3498db;
  font-weight: 700;
`;

const TextWrapper = styled.div`
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  width: 700px;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding-top: 50px;
  padding-left: 50px;
  padding-right: 50px;
  position: absolute;
  top: 70%;
`;

const Button = styled.button`
  background: #3498db;
  background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
  background-image: -moz-linear-gradient(top, #3498db, #2980b9);
  background-image: -ms-linear-gradient(top, #3498db, #2980b9);
  background-image: -o-linear-gradient(top, #3498db, #2980b9);
  background-image: linear-gradient(to bottom, #3498db, #2980b9);
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  font-family: Arial;
  color: #ffffff;
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  margin-bottom: 35px;

  &:hover {
    background: #3cb0fd;
    background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
    background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
    background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
    background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
    background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
    text-decoration: none;
  }
`;
