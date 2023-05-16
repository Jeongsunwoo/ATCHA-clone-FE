import React from "react";
import { styled } from "styled-components";
// import { BiUser } from "react-icons/bs";
import { BiUser } from "react-icons/bi";

function Director() {
  return (
    <>
      <DirectorImg>
        <BiUser size={40} />
      </DirectorImg>
      <DirectorInfoWrapper>
        <div>이정범</div>
        <div>감독</div>
      </DirectorInfoWrapper>
      {/* <BiUser /> */}
    </>
  );
}

export default Director;

const DirectorImg = styled.button`
  margin-top: 20px;
  align-items: flex-start;
  background-color: #28292a;
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const DirectorInfoWrapper = styled.div`
  float: right;
  flex-direction: row;
  padding: 10px;
  :first-child {
    font-weight: bold;
    margin-bottom: 5px;
  }
`;
