// render basic homepage

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

const Home = () => {
  return (
    <Wrapper>
      <NavBar />
      <TextWrapper>
        <h1>Home</h1>
        <p>Welcome to the start of ACM's new website</p>
      </TextWrapper>
    </Wrapper>
  );
};

export default Home;








// info we need to display:
// socials (need to create: linkedIn, github, instagram)
// officers (need to create: president, vice president, secretary, treasurer)
// Whats new? 
// short paragraph about ACM
