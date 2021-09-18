/** @format */

import React from "react";
import styled from "styled-components";
import { FaBaby } from "react-icons/fa";
function BlanketsDetails() {
  return (
    <>
      <div class="after">
        {" "}
        <FlexRow>
          <FaBaby size="30" />
          <Text>
            Our organic bamboo cellular blankets come in Newborn / Crib size -
            95 x 80 cm.
          </Text>
        </FlexRow>
        <FlexRow>
          <FaBaby size="30" />
          <Text>
            All our blankets are made from 100% Organic Bamboo fibres. No dyes
            are used in the manufacture of the natural bamboo fabric and the
            dyes used in the 100% polyester trim conform to baby safe Oeko-Tex
            Standard 100 Class 1. Together with the Cellular construction these
            factors make our blankets safe for your baby from newborn onwards.
          </Text>
        </FlexRow>
        <FlexRow>
          <FaBaby size="30" />
          <Text>
            Bamboo has many antibacterial qualities which bamboo fabric is able
            to retain even through multiple washes.
          </Text>
        </FlexRow>
        <FlexRow>
          <FaBaby size="30" />
          <Text>
            Our bamboo blankets also offer built-in temperature control: bamboo
            fabric traps air in its cross-sectional fibres to help keep baby
            warm in winter, while its breathable nature and wicking properties
            keep moisture at bay for greater comfort in summer.
          </Text>
        </FlexRow>
        <FlexRow>
          <FaBaby size="30" />
          <Text>
            Bamboo fabric is hypoallergenic, odourless and luxuriously soft and
            silky. Unlike cotton, it retains its softness wash after wash.
          </Text>
        </FlexRow>
      </div>
    </>
  );
}

export default BlanketsDetails;

const FlexRow = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  font-size: 17px;
  margin-left: 20px;
  width: 75vw;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 24px;
  margin: 50px;
  width: 75vw;
`;
