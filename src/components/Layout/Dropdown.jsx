import React from "react";
import HorizonLine from "../assets/HorizonLine";
import { styled } from "styled-components";
function Dropdown() {
  return (
    <>
      <DropdownWrap>
        <li>마이페이지</li>
        <li>유저이름</li>
        <li>키즈</li>
        <HorizonLine />

        <li>새 프로필</li>
        <HorizonLine />
      </DropdownWrap>
    </>
  );
}

export default Dropdown;

const DropdownWrap = styled.div`
  background-color: red;
`;
