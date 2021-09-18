/** @format */

import React from "react";
import styled from "styled-components";
import { FaBaby } from "react-icons/fa";
import { FaBabyCarriage } from "react-icons/fa";
function OrganicDetails() {
  return (
    <>
      <div class="after">
        <FlexRow>
          <FaBaby size="30" />
          <Text>
            Made in UK from top quality Oeko-Tex Certified 100% Organic Cotton
            Poplin - certified free from harmful substances - we have been
            selling our covers since 2009.
          </Text>
        </FlexRow>

        <FlexRow>
          <FaBaby size="30" />
          <Text>
            Our boned and shaped 100% Organic Cotton breastfeeding covers are
            light, loose, cool and comfortable. The high quality organic cotton
            poplin fabric has been chosen to be opaque but still light and
            breathable, so minimising the possibility of overheating. The subtle
            colours and patterns will give you the confidence to feed your baby
            anytime, anywhere. Polyester boning creates a rigid neckline to
            allow that all-important eye contact with baby. Very attractively
            packaged, a BebeChic Breastfeeding Cover makes a wonderful baby
            shower gift.
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
      </div>
    </>
  );
}

export default OrganicDetails;

const FlexRow1 = styled.div`
  margin-top: 30px;
  margin-left: 50px;
  display: flex;
  align-items: center;
  z-index: 1000;
`;

const FlexRow = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  font-size: 17px;
  margin-left: 20px;
  width: 75vw;
  z-index: 1000;
`;
