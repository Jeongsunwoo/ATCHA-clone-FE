import React, { useState } from "react";
import { styled } from "styled-components";
import Dropdown from "./Dropdown";
import { GlobalStyles } from "../../styles/global-styles";
import { mq } from "../../styles/media-query";

function Header() {
  const [userView, setuserView] = useState("false");
  return (
    <>
     {GlobalStyles}
      <HeaderWrap>
        <Logo />
        <User
          onClick={() => {
            setuserView(!userView);
          }}>
          유저
          {userView && <Dropdown />}
        </User>
      </HeaderWrap>
    </>
  );
}
// * 일반정보
// ! 중요한사항
// ? 궁금한사항
// TODO 추가적으로해야할일
// ! ㅇ나라멍

// TODO https://velog.io/@seul_/React-%EB%B0%98%EC%9D%91%ED%98%95-%ED%97%A4%EB%8D%94-useState-router-styled-components 참고하기
// TODO 공통으로 쓰일스타일부분들 참고하기 https://phrygia.github.io/react/2022-01-27-styled-components/  https://kim-mj.tistory.com/282
// https://velog.io/@rjsdnql123/%EC%8A%A4%ED%83%80%EC%9D%BC%EB%93%9C%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%99%80-%EB%AF%B8%EB%94%94%EC%96%B4%EC%BF%BC%EB%A6%AC-%EC%9D%B4%EC%9A%A9%ED%95%98%EA%B8%B0
export default Header;

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
`;
const Logo = styled.button`
  width: 94px;
  height: 72px;
  background: url("img/atcha.png") no-repeat center center;
  background-size: contain;
  border: none;
`; 

const User = styled.button`
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  // TODO 위치 다시잡기

  //TODO 드롭다운메뉴만들기
`;
