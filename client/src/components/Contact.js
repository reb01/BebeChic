/** @format */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../assets/ContactBanner (1).jpg";
import ContactForm from "./ContactForm";
import "./App.css";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ImageBanner>
        <img src={logo} alt="Logo" height="200" />
      </ImageBanner>
      <Wrapper>
        <WrapperCF>
          <ContactForm />
        </WrapperCF>
        <WrapperText>
          <TextTop>WHERE WE ARE</TextTop>
          <Text>We are based in New Milton, Hampshire BH25 6SN</Text>{" "}
          <TextTop>OUR WEBSITE</TextTop>
          <Text>bebechic-uk.com</Text>
          <TextTop>OUR CUSTOMER SERVICE</TextTop>
          <Text>
            Our Customer Service is second to none. You can be confident that
            any problems will be sorted out quickly and efficiently. For any
            queries please contact us - you can email, phone or send us a
            message.{" "}
          </Text>
          <TextTop>OUR EMAIL ADDRESS</TextTop>
          <Text>info@bebechic-uk.com</Text> <TextTop>OUR PHONE NUMBER</TextTop>
          <Text>07818 027 954</Text>
        </WrapperText>
      </Wrapper>
    </>
  );
};

export default Contact;
const TextTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-left: 70px;
  margin-right: 70px; */
  margin-top: 35px;
  margin-bottom: 25px;
  font-size: 20px;
  color: #3498db;
  font-weight: 700;
`;
const ImageBanner = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: 4px 0px 4px 4px rgba(0, 0, 0, 0.03);
`;
const Wrapper = styled.div`
  display: flex;
  width: 100vw;
`;

const WrapperCF = styled.div`
  display: flex;
  width: 50vw;
  justify-content: center;
`;
// const WrapperText = styled.div`
//   margin-top: 40px;
//   margin-bottom: 40px;
//   margin-right: 40px;
//   width: 50vw;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   background-color: #f6e4e1;
// `;

const WrapperText = styled.div`
  border: 1px solid lightgray;
  /* opacity: 0.1; */
  display: flex;
  flex-direction: column;
  width: 50vw;
  justify-content: center;
  align-items: center;
  background-color: #f6e4e1;
  padding-top: 30px;
  padding-left: 50px;
  padding-right: 50px;
  margin-top: 65px;
  margin-right: 65px;
  margin-bottom: 45px;
`;
const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-left: 70px;
  margin-right: 70px; */
  /* margin-top: 35px; */
  margin-bottom: 25px;
  font-size: 17px;
`;
