import React from "react";
import { styled } from "styled-components";
import { mq } from "../../styles/media-query";
import { GlobalStyles } from "../../styles/global-styles";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      {GlobalStyles}
      <HeaderWrap>
        {" "}
        <Logo type="button">
          <Link to="/">아챠</Link>
        </Logo>
        <User>User</User>
      </HeaderWrap>
    </>
  );
}

export default Header;

/* const User = styled.button`
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`; */

export const HeaderWrap = styled.nav`
  z-index: 80;
  display: flex;
  height: 4em;
  background-color: #272827;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  ${mq({
    padding: ["0 3em", "0 1em", "0 1.5em", "0 1.5em", "0 2.5em", "0 2em 0 3em"],
  })};
`;

const Logo = styled.button`
  width: 94px;
  height: 72px;
  background: url("img/atcha.png") no-repeat center center;
  background-size: contain;
  border: none;
  a {
    width: 100%;
    height: 100%;
    line-height: 0;
    padding: 1em 5em;
    opacity: 0;
  }
`;

const User = styled.button`
  width: 40px;

  background-color: red;
  height: 40px;
  border-radius: 50%;
`;
