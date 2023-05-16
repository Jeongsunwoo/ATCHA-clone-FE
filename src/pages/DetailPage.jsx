import React from "react";
import { styled } from "styled-components";
import Sidebar from "../components/Layout/Sidebar";
// import { detailMovie } from "../api/detail/detailMovie";
// import { useQuery } from "react-query";
// import { detailTv } from "../api/detail/detailTv";


function DetailPage() {
  // const { error, data } = useQuery("detailmovie", detailMovie);
  // console.log("왜:", data);
  // console.log(error);
  // console.log({ detailMovie });

  return (
    <>
    {/* header 디자인 작업해서 넣을 예정 */}
    <HomeWrap>
      {/* 사이드메뉴 */}
        <Sidebar text="비디오" link="/signup" />
       <ContentsArea>
        {/* 작업시작 */}
        여기에 작업해 주세요!
      </ContentsArea>
    </HomeWrap>
  </>
    );
}

export default DetailPage;

const HomeWrap = styled.div`
`;

const SidebarArea = styled.div`
  position: fixed;
  top: 72px;
  left: 0;
  color: white;
  background: #141517;
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
