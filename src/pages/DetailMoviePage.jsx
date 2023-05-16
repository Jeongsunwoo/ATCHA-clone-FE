import React from "react";
import styled from "styled-components";
import { BsFillCaretRightFill } from "react-icons/bs";
import { useQuery } from "react-query";
import DetailMovie from "../components/detail/DetailMovie";
import Director from "../components/director/Director";

function DetailMoviePage() {
  return (
    <>
      <DetailMovie />
    </>
  );
}

export default DetailMoviePage;

const HomeWrap = styled.div``;

const SidebarArea = styled.div`
  position: fixed;
  top: 72px;
  left: 0;
  color: white;
  /* background: #141517; */
  background: #4068b8;

  width: 240px;
  height: 100%;
  border-right: 1px #1b1c1d solid;
`;

const ContentsArea = styled.div`
  z-index: -1;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100vh;
  padding: 72px 0 0 240px;
  background: #141517;
  color: white;
`;
