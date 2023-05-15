import React, { useMemo } from "react";
import { styled } from "styled-components";
import { mq } from "../../styles/media-query";
import { Link } from "react-router-dom";


const Header = ({ text, link }) => {
  const memoizedLink = useMemo(() => <Link to={link}>{text}</Link>, [link, text]);

  return (
    <>
      <HeaderWrap>
        <Logo type="button">
          <Link to="/">아챠</Link>
        </Logo>
        <Login type="button">
          {memoizedLink}
        </Login>
      </HeaderWrap>
    </>
  );
};
export default Header;
  
  // 헤더 네비게이션
  const HeaderWrap = styled.nav`
    z-index: 80;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    ${mq({
      padding: ['0 3em', '0 1em', '0 1.5em', '0 1.5em', '0 2.5em', '0 2em 0 3em'],
    })};
    //임시배경
    background-color:black;
  `
  
  const Logo = styled.button`
    width: 94px;
    height: 72px;
    background: url('img/atcha.png') no-repeat center center;
    background-size: contain;
    border: none;
    a {
      width: 100%;
      height: 100%;
      line-height: 0;
      padding: 1em 5em;
      opacity: 0;
    }
  `
  
  const Login = styled.button`
    background: none;
    border: none;
    a {
      background: #fff;
      padding: 0.5em 1em;
      border-radius: 20px;
      font-size: 0.9em;
      font-weight: 700;
    }
  `
  