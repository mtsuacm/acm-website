import React from "react";
import styled from "styled-components";
import NavBar from "../components/navbar.tsx";

const Wrapper = styled.div`
  background: #282c34;
  min-height: 100vh;
  color: white;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const About = () => {
  return (
    <Wrapper>
    <NavBar />
    <TextWrapper>
      <h1>About</h1>
      <p>This is the about page. It will be updated with more information soon.</p>
    </TextWrapper>
  </Wrapper>
  );
};

export default About;
