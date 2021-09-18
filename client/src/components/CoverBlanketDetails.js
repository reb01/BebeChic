/** @format */

import React from "react";
import styled from "styled-components";
import { FaBaby } from "react-icons/fa";
import { FaBabyCarriage } from "react-icons/fa";

function CoverBlanketDetails() {
  return (
    <>
      <div class="after">
        <Title>Breastfeeding Cover Details and Specifications</Title>
        <FlexRow>
          <FaBaby size="30" />
          <Text>
            Made in UK from top quality Oeko-Tex Certified 100% Cotton Poplin -
            certified free from harmful substances - we have been selling our
            covers since 2009.
          </Text>
        </FlexRow>

        <FlexRow>
          <FaBaby size="30" />
          <Text>
            Our boned and shaped 100% cotton breastfeeding covers are light,
            loose, cool and comfortable. The high quality cotton poplin fabric
            has been chosen to be opaque but still light and breathable, so
            minimising the possibility of overheating. The subtle colours and
            patterns will give you the confidence to feed your baby anytime,
            anywhere. Polyester boning creates a rigid neckline to allow that
            all-important eye contact with baby. Very attractively packaged, a
            BebeChic Breastfeeding Cover makes a wonderful baby shower gift.
          </Text>
        </FlexRow>

        <FlexRow>
          <FaBaby size="30" />
          <Text>Key features of a BebeChic Breastfeeding Cover:</Text>
        </FlexRow>

        <FlexRow1>
          <FaBabyCarriage size="20" />
          <Text>
            beautifully made in UK from 100% cotton Oeko-Tex certified fabric -
            certified free from harmful substances
          </Text>
        </FlexRow1>

        <FlexRow1>
          <FaBabyCarriage size="20" />
          <Text>
            one very generous size fits all - 105cm x 70cm - 41” x 27”
          </Text>
        </FlexRow1>

        <FlexRow1>
          <FaBabyCarriage size="20" />
          <Text>secure, fixed length - 46cm - 18”- neck strap</Text>
        </FlexRow1>

        <FlexRow1>
          <FaBabyCarriage size="20" />
          <Text>rigid, boned - 42cm - 16" - neckline</Text>
        </FlexRow1>

        <FlexRow1>
          <FaBabyCarriage size="20" />
          <Text>light and cool for mother and baby</Text>
        </FlexRow1>

        <FlexRow1>
          <FaBabyCarriage size="20" />
          <Text>quick and easy to slip on over the head</Text>
        </FlexRow1>
        <FlexRow1>
          <FaBabyCarriage size="20" />
          <Text>baby visible to mother throughout</Text>
        </FlexRow1>
        <FlexRow1>
          <FaBabyCarriage size="20" />
          <Text>mother visible to baby throughout</Text>
        </FlexRow1>
        <FlexRow1>
          <FaBabyCarriage size="20" />
          <Text>machine wash 40oC; care label attached</Text>
        </FlexRow1>
        <Title>Baby Blanket Details and Specifications</Title>
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
            All our baby blankets are made from 100% Organic Bamboo fibres. No
            dyes are used in the manufacture of the natural bamboo fabric and
            the dyes used in the 100% polyester trim conform to baby safe
            Oeko-Tex Standard 100 Class 1. Together with the Cellular
            construction these factors make our blankets safe for your baby from
            newborn onwards.
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

export default CoverBlanketDetails;

const FlexRow = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
`;
const FlexRow1 = styled.div`
  margin-top: 30px;
  margin-left: 50px;
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
