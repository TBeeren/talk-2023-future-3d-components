import React from "react";
import styled from "styled-components";
import Image from "../../utils/Image";
import X from "../../../assets/x_logo.png";

const TwitterHandle = ({ credits }) => (
  credits
    ? <CreditsWrapper>
      <Image style={{ marginRight: 8 }} src={X} width={10} height={10}/>
      <span style={{ marginRight: 8 }}>credits:</span>
      <span>{credits}</span>
    </CreditsWrapper>
    : <GeneralWrapper>
      <Image src={X} width={18} height={18}/>
      <span> tim_beeren</span>
    </GeneralWrapper>

);

const GeneralWrapper = styled.div `
  position: fixed;
  bottom: 20px;
  left: 30px;
  font-size: 0.8em;

  z-index: 100000000;
  color: white;
`;

const CreditsWrapper = styled.div `
  position: fixed;
  bottom: 20px;
  left: 30px;
  font-size: 0.4em;
  z-index: 100000000;
  color: white;
`;

export default TwitterHandle;
