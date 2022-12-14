import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import acmlogo from "../../src/images/acm-logo.jpeg";
import mtsuLogo from "../../src/images/MT-horiz-logo-web.jpg";




const Wrapper = styled.div`
  background: white;
  color: black;
  font-size: 24px;
  display: flex;
  width: 100vw;
  justify-content: start;
`;
// px = pixels
// vw = viewport width
// vh = viewport height
// rem = relative to font-size of the root element
// em = relative to the font-size of the element (2em means 2 times the size of the current font)


const LinkItem = styled.p`
  color: black;
  font-size: 16px;
  font-weight: bold;
  margin: auto 10px;
  align-self: center;
  // ignore this hack 😂 'none' wouldn't work
  text-decoration: underline;
  text-decoration-color: #fff;
`;

const linkStyle = {
    color: "black",
    textDecoration: "underline",
    textDecorationColor: "#fff"
    }
const NavBar = () => {
  return (
    <>
      <Wrapper>
      <LinkItem>
        <img src={mtsuLogo} alt="MTSU Logo" width="150px" height="70px" />
      </LinkItem>
        <LinkItem>
        <img src={acmlogo} alt="ACM Logo" style={{ width: "50px", height: "50px" }} />
        </LinkItem>
          <LinkItem>
        <Link to="/" style={linkStyle}>
            Home
        </Link>
          </LinkItem>
          <LinkItem>
        <Link to="/about" style={linkStyle}>
        About
        </Link>
        </LinkItem>
      </Wrapper>
    </>
  );
};

export default NavBar;
