import React from "react";
import styled from "styled-components";

const Ending = () => (
  <div>
    <h1 style={{
      fontSize: "5rem",
      margin: "0.3em 0"
    }}
    >THANKS EVERYONE!</h1>
    <Wrapper>
      <Text>Slides: <Link>https://talks.tbeeren.com/</Link></Text>
      <Text>Want to know more? <Link>https://threejs-journey.com/</Link></Text>
      <br/>
    </Wrapper>
    <div style={{ textAlign: "center" }}>
      <Text>or let's have a coffee! 😁</Text>
    </div>

  </div>
);

const Text = styled.p `
    font-size: 1.1em !important;
    color: white;
`;

const Link = styled.a `
    color: #FF667E;
`;

const Wrapper = styled.div `
  text-align: center;
  padding: 0 4em
`;

export default Ending;
