import React from "react";
import styled from "styled-components";
import "../../../presentation/font/Produkt-Light.ttf";

import spacesSummitLogo from "../../../assets/spaces-summit-logo.png";
import bolComLogo from "../../../assets/bol-logo.svg";
import spacesSummitBanner from "../../../assets/spaces-summit-banner.jpg";
import train from "../../../assets/train.png";

const SpacesSummit = () => (
  <Wrapper>
    <HeaderText>The Future of 3D on the Web</HeaderText>
    <ProduktText>Tim Beeren | Spaces Summit <Train/></ProduktText>
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
    width: 6%;
    padding-left: 8px;
`;

const Wrapper = styled.div `
  padding: 1em;
  width: 100%;
  height: 100%;
`;

const ProduktText = styled.h1 `
    position: absolute;
    bottom: 30%;
    left: 9%;
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
  position: absolute;
  top: 20%;
  left: 9%;
  font-family: 'ProduktSuper',serif;
  font-size: 3.4em;
  max-width: 60%;
  text-align: left;
  line-height: 1.1em;
  color: #1EADFF !important;
  background: none;
  background-size: 0;
  -webkit-text-fill-color: #1EADFF;
  font-weight: 100;
`;

export default SpacesSummit;
