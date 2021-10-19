/** @format */

import React from "react";
import styled from "styled-components";
import moment from "moment";

const Footer = () => {
  const date = moment().format("YYYY");
  return (
    <>
      <Wrapper>
        <FooterTextContainer>
          <FooterText>© {date} - BebeChic UK</FooterText>
        </FooterTextContainer>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  /* background: linear-gradient(rgba(250, 0, 0, 0.2), transparent); */
  background-color: #f6e4e1 /*this your primary color*/;
  /* @media (max-width: 560px) {
    min-width: 560px;
  } */
`;
const FooterTextContainer = styled.div`
  display: flex;
  height: 14px;
  flex-wrap: wrap;
  font-family: "Alata", sans-serif;
  justify-content: center;
  align-items: center;
  color: black;
`;
const FooterText = styled.p`
  position: absolute;
`;

export default Footer;
