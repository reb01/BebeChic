/** @format */

import React from "react";
import { blanketsAll } from "../data";
import styled from "styled-components";
import logo from "../assets/WavyPink.png";

const Blankets = () => {
  return (
    <Wrapper>
      <Title>100% Organic Bamboo Cellular Baby Blankets</Title>
      <Logo>
        <img src={logo} alt="Pic1" style={{ width: 100 }} />
      </Logo>

      <Photos>
        <PhotosWrapper>
          {Object.values(blanketsAll).map((item) => (
            <>
              <Avatar alt="avatar" src={item.avatarSrc} />{" "}
              <div>{item.description}</div>
              <div>{item.price}</div>
            </>
          ))}
        </PhotosWrapper>
      </Photos>
    </Wrapper>
  );
};

export default Blankets;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const AffiliateLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Avatar = styled.img`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; */

  width: 250px;
  /* padding-left: 40px;
  padding-left: 40px;
  padding-top: 40px; */
`;
const Title = styled.div`
  font-size: 34px;
  font-weight: 700;
`;
const PhotosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 40px;
`;
const ItemWrapper = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
`;

const Photos = styled.div``;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;
