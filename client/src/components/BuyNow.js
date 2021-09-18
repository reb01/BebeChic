/** @format */

import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const BuyNow = ({ allProds }) => {
  const { no } = useParams();
  console.log("no", no);
  console.log("useParams()", useParams());
  console.log(allProds, "allProds");
  if (!useParams()) {
    return <Center>Loading...</Center>;
  }

  return (
    <Wrapper>
      <Leftdiv>
        <Avatar
          alt="avatar"
          style={{ width: 400 }}
          src={
            Object.values(allProds).filter((items) => items.no === no)[0]
              .avatarSrc
          }
        />
      </Leftdiv>
      <Rightdiv>
        {" "}
        <Description>
          {" "}
          {
            Object.values(allProds).filter((items) => items.no === no)[0]
              .description
          }{" "}
        </Description>
        <Color>
          {Object.values(allProds).filter((items) => items.no === no)[0].color}
        </Color>
        {no === "1" ? (
          <>
            {" "}
            <iframe
              style={{ width: 120, height: 240 }}
              marginWidth="0"
              marginHeight="0"
              scrolling="no"
              frameBorder="0"
              src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=beuk08-21&marketplace=amazon&amp;region=GB&placement=B008IGC376&asins=B008IGC376&linkId=8c33cf79c254f28aa55dd584e4918208&show_border=true&link_opens_in_new_window=true&price_color=000000&title_color=000000&bg_color=ffffff"
            ></iframe>
          </>
        ) : no === "2" ? (
          <iframe
            style={{ width: 120, height: 240 }}
            marginWidth="0"
            marginHeight="0"
            scrolling="no"
            frameBorder="0"
            src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=beuk08-21&marketplace=amazon&amp;region=GB&placement=B00B6XIKGG&asins=B00B6XIKGG&linkId=7edfadea427aede1c7bc7961973d8f01&show_border=true&link_opens_in_new_window=true&price_color=000000&title_color=000000&bg_color=ffffff"
          ></iframe>
        ) : no === "3" ? (
          <iframe
            style={{ width: 120, height: 240 }}
            marginWidth="0"
            marginHeight="0"
            scrolling="no"
            frameBorder="0"
            src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=beuk08-21&marketplace=amazon&amp;region=GB&placement=B00B6X23I2&asins=B00B6X23I2&linkId=4464cfe9341ea1a3f35e1648954778de&show_border=true&link_opens_in_new_window=true&price_color=000000&title_color=000000&bg_color=ffffff"
          ></iframe>
        ) : no === "4" ? (
          <iframe
            style={{ width: 120, height: 240 }}
            marginWidth="0"
            marginHeight="0"
            scrolling="no"
            frameBorder="0"
            src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=beuk08-21&marketplace=amazon&amp;region=GB&placement=B00OVAIX9K&asins=B00OVAIX9K&linkId=ea0cd0a8d62bf0e3e8d3d791adaeade2&show_border=true&link_opens_in_new_window=true&price_color=000000&title_color=000000&bg_color=ffffff"
          ></iframe>
        ) : no === "5" ? (
          <iframe
            style={{ width: 120, height: 240 }}
            marginWidth="0"
            marginHeight="0"
            scrolling="no"
            frameBorder="0"
            src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=beuk08-21&marketplace=amazon&amp;region=GB&placement=B00B6X5FC8&asins=B00B6X5FC8&linkId=860f1bcd7199d1cd0738660089349f43&show_border=true&link_opens_in_new_window=true&price_color=000000&title_color=000000&bg_color=ffffff"
          ></iframe>
        ) : no === "6" ? (
          <iframe
            style={{ width: 120, height: 240 }}
            marginWidth="0"
            marginHeight="0"
            scrolling="no"
            frameBorder="0"
            src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=beuk08-21&marketplace=amazon&amp;region=GB&placement=B00B6WWM5W&asins=B00B6WWM5W&linkId=1721351bd671b6da31090c73dfcab4f1&show_border=true&link_opens_in_new_window=true&price_color=000000&title_color=000000&bg_color=ffffff"
          ></iframe>
        ) : no === "7" ? (
          <iframe
            style={{ width: 120, height: 240 }}
            marginWidth="0"
            marginHeight="0"
            scrolling="no"
            frameBorder="0"
            src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=beuk08-21&marketplace=amazon&amp;region=GB&placement=B015G42278&asins=B015G42278&linkId=2cf111e614211850a5207753eb5c4ede&show_border=true&link_opens_in_new_window=true&price_color=000000&title_color=000000&bg_color=ffffff"
          ></iframe>
        ) : no === "8" ? (
          <iframe
            style={{ width: 120, height: 240 }}
            marginWidth="0"
            marginHeight="0"
            scrolling="no"
            frameBorder="0"
            src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=beuk08-21&marketplace=amazon&amp;region=GB&placement=B00B6XK7YO&asins=B00B6XK7YO&linkId=99dd12b216692231b839b2bb01b2f7fc&show_border=true&link_opens_in_new_window=true&price_color=000000&title_color=000000&bg_color=ffffff"
          ></iframe>
        ) : no === "9" ? (
          <iframe
            style={{ width: 120, height: 240 }}
            marginWidth="0"
            marginHeight="0"
            scrolling="no"
            frameBorder="0"
            src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=beuk08-21&marketplace=amazon&amp;region=GB&placement=B00FB3EANO&asins=B00FB3EANO&linkId=f7c4fe0897d91b02d4c3ea921f3c9c93&show_border=true&link_opens_in_new_window=true&price_color=000000&title_color=000000&bg_color=ffffff"
          ></iframe>
        ) : no === "10" ? (
          <iframe
            style={{ width: 120, height: 240 }}
            marginWidth="0"
            marginHeight="0"
            scrolling="no"
            frameBorder="0"
            src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=beuk08-21&marketplace=amazon&amp;region=GB&placement=B085TML38P&asins=B085TML38P&linkId=fb7729b89e8125414db16eb86bfee0f8&show_border=true&link_opens_in_new_window=true&price_color=000000&title_color=000000&bg_color=ffffff"
          ></iframe>
        ) : no === "11" ? (
          <iframe
            style={{ width: 120, height: 240 }}
            marginWidth="0"
            marginHeight="0"
            scrolling="no"
            frameBorder="0"
            src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=beuk08-21&marketplace=amazon&amp;region=GB&placement=B07PBK4YR3&asins=B07PBK4YR3&linkId=f6ed89f691523f2ea76f74769583fbb5&show_border=true&link_opens_in_new_window=true&price_color=000000&title_color=000000&bg_color=ffffff"
          ></iframe>
        ) : no === "12" ? (
          <iframe
            style={{ width: 120, height: 240 }}
            marginWidth="0"
            marginHeight="0"
            scrolling="no"
            frameBorder="0"
            src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ac&ref=tf_til&ad_type=product_link&tracking_id=beuk08-21&marketplace=amazon&amp;region=GB&placement=B07PFBW3F6&asins=B07PFBW3F6&linkId=b7b5f0d0cf3c1ac5813cb8cae5f05286&show_border=true&link_opens_in_new_window=true&price_color=000000&title_color=000000&bg_color=ffffff"
          ></iframe>
        ) : no === "13" ? (
          <iframe
            style={{ width: 120, height: 240 }}
            marginWidth="0"
            marginHeight="0"
            scrolling="no"
            frameBorder="0"
            src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ac&ref=tf_til&ad_type=product_link&tracking_id=beuk08-21&marketplace=amazon&amp;region=GB&placement=B01FCH1AHM&asins=B01FCH1AHM&linkId=97bba7e9a39647034cedc5ee2949d887&show_border=true&link_opens_in_new_window=true&price_color=000000&title_color=000000&bg_color=ffffff"
          ></iframe>
        ) : no === "14" ? (
          <iframe
            style={{ width: 120, height: 240 }}
            marginWidth="0"
            marginHeight="0"
            scrolling="no"
            frameBorder="0"
            src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ac&ref=tf_til&ad_type=product_link&tracking_id=beuk08-21&marketplace=amazon&amp;region=GB&placement=B01FCH1APE&asins=B01FCH1APE&linkId=80302d8b0d991fd428bdc72743a01699&show_border=true&link_opens_in_new_window=true&price_color=000000&title_color=000000&bg_color=ffffff"
          ></iframe>
        ) : no === "15" ? (
          <iframe
            style={{ width: 120, height: 240 }}
            marginWidth="0"
            marginHeight="0"
            scrolling="no"
            frameBorder="0"
            src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ac&ref=tf_til&ad_type=product_link&tracking_id=beuk08-21&marketplace=amazon&amp;region=GB&placement=B01FCH1AGI&asins=B01FCH1AGI&linkId=eaf6639846805cfa973994f6c344b755&show_border=true&link_opens_in_new_window=true&price_color=000000&title_color=000000&bg_color=ffffff"
          ></iframe>
        ) : (
          "no item selected"
        )}{" "}
        <Text>
          **All BebeChic Products are available with free postage through
          'Fulfilled by Amazon' and Amazon Prime. Just follow the link above:**
        </Text>
      </Rightdiv>
    </Wrapper>
  );
};

export default BuyNow;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`;
const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: bolder;
  font-size: 24px;
  line-height: 33px;
`;
const Color = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  font-style: normal;
  font-weight: bolder;
  font-size: 24px;
  line-height: 33px;
`;
const Center = styled.div`
  display: flex;
  flex-direction: column;
`;
const Leftdiv = styled.div`
  margin-top: 60px;
  display: flex;
  width: 50vw;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
`;
const Rightdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50vw;
  margin-right: 100px;
`;

const Text = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-content: center;
  justify-items: center;
  width: 20vw;
  margin-top: 30px;
`;

const Avatar = styled.img`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 250px;
`;
