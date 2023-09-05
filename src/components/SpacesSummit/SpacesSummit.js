import React from "react";
import styled from "styled-components";

import "../../../presentation/font/Produkt-Light.ttf";
import "../../../presentation/font/MartelSans-Bold.ttf";
import "../../../presentation/font/MartelSans-SemiBold.ttf";


import spacesSummitLogo from "../../../assets/spaces-summit-logo.png";
import bolComLogo from "../../../assets/bol-logo.svg";
import spacesSummitBanner from "../../../assets/spaces-summit-banner.jpg";
import train from "../../../assets/train.png";

const SpacesSummit = () => (
  <Wrapper>
    <TextWrapper>
      <HeaderText>The Future of 3D on the Web <Train/></HeaderText>
      <ProduktText>Tim Beeren | Spaces Summit</ProduktText>
    </TextWrapper>
    <SpacesSummitIcon />
    <BolLogo/>
    <SpacesSummitBanner/>
  </Wrapper>
);

const SpacesSummitIcon = styled.img.attrs(() => ({ src: spacesSummitLogo })) `
  position: absolute;
  bottom: 4%;
  left: 4%;
  width: 10%;
`;

const BolLogo = styled.img.attrs(() => ({ src: bolComLogo })) `
  position: absolute;
  bottom: 4%;
  left: 40%;
  width: 20%;
`;

const SpacesSummitBanner = styled.img.attrs(() => ({ src: spacesSummitBanner })) `
  position: absolute;
  bottom: 0;
  right: 0;
  height: 100%;
`;

const Train = styled.img.attrs(() => ({ src: train })) `
    width: 10%;
    padding-left: 8px;
`;

const Wrapper = styled.div `
  padding: 1em;
  width: 100%;
  height: 100%;
`;

const TextWrapper = styled.div `
    padding: 10% 7%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const ProduktText = styled.p `
    font-family: 'ProduktLight',serif;
    font-size: 1.2em;
    text-align: left;
    color: #1EADFF !important;
    background: none;
    background-size: 0;
    -webkit-text-fill-color: #1EADFF;
    font-weight: 100;
`;

const HeaderText = styled.h1 `
  font-family: 'ProduktSuper',serif;
  font-size: 3.4em;
  text-align: left;
  line-height: 1.1em;
  color: #1EADFF !important;
  background: none;
  background-size: 0;
  -webkit-text-fill-color: #1EADFF;
  font-weight: 100;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  width: 1000px;
`;

export default SpacesSummit;
