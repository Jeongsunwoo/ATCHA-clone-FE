import React from "react";
import { styled } from "styled-components";
// import { BiUser } from "react-icons/bs";
import { BiUser } from "react-icons/bi";

function Director(listdata) {
  // console.log("리데:", listdata.listdata.name);
  return (
    <>
      <SepUser>
        <ImageWrapper>
          <DirectorImg src={listdata?.listdata?.image}></DirectorImg>
        </ImageWrapper>
        <DirectorInfoWrapper>
          <DirectorName>{listdata?.listdata?.name}</DirectorName>
          <DirectorPlayer>{listdata?.listdata?.role}</DirectorPlayer>
        </DirectorInfoWrapper>
      </SepUser>
    </>
  );
}

export default Director;

const SepUser = styled.div`
  display: flex;
  position: relative;
  flex: 1 1 0%;
  -webkit-box-align: center;
  align-items: center;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  flex-shrink: 0;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 62px;
  height: 62px;
  border-radius: 50%;
  margin-right: 14px;
  overflow: hidden;
`;

const DirectorImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DirectorInfoWrapper = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
`;
const DirectorName = styled.div`
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 22px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DirectorPlayer = styled.div`
  color: rgb(132, 134, 141);
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 18px;
  white-space: nowrap;
  margin-top: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
