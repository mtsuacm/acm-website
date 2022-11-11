// render basic homepage

import React from "react";
import styled from "styled-components";
import NavBar from "../components/navbar.tsx";

const Wrapper = styled.div`
  background: #282c34;
  min-height: 100vh;
  padding: 10px;
  color: white;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Home = () => {
  return (
    <Wrapper>
      <NavBar />
      <TextWrapper>
        <h1>Home</h1>
        <p>Welcome to the start of ACM's new website and Im just adding and now what</p>
      </TextWrapper>
    </Wrapper>
  );
};

export default Home;
