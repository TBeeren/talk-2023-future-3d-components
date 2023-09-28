import React from "react";
import styled from "styled-components";

const ConferenceIntro = ({ name }) => (
  <Wrapper>
    <Pil>{name}</Pil>
    <Title>The Future of 3D Components</Title>
    <SubText>Hello everyone! 🙋🏽‍♂️</SubText>
  </Wrapper>
);

const Wrapper = styled.div `
  margin-bottom: 2em;
`;

const Title = styled.h1 `
  margin: 0.3em 0 0.1em 0;
  font-size: 2.6em;
`;

const SubText = styled.span `
  font-size: 2rem;
  color: whitesmoke;
`;

const Pil = styled.span `
  background-color: white;
  border-radius: 20px;
  color: black;
  display: inline-block; 
  padding: 0.7rem 1rem 0.6rem 1rem;
  font-size: 1.1rem; 
  line-height: 1.1rem;
  text-transform: uppercase;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  justify-content: right;
`;

export default ConferenceIntro;
