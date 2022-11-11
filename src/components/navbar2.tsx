import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Wrapper = styled.div`
  background: white;
  color: black;
  border-radius: 10px;
  font-size: 24px;
  display: flex;
  justify-content: space-around;
  width: 258px;
  margin: auto;
`;

const LinkItem = styled.p`
  color: black;
  font-size: 16px;
  font-weight: bold;
  // ignore this hack 😂 'none' wouldn't work
  text-decoration: underline;
  text-decoration-color: #fff;
`;

const NavBar2 = () => {
  return (
    <>
      <Wrapper>
        <Link to="/about">
          <LinkItem>About</LinkItem>
        </Link>
      </Wrapper>
    </>
  );
};

export default NavBar2;