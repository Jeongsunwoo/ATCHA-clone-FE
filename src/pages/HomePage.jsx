import React from "react";
import { styled } from "styled-components";
import Header from "../components/Layout/Header";
import Row from "../design_ex/Row";
import requests from "../api/request";
import Sidebar from "../components/Layout/Sidebar";

function HomePage() {
  return (
    <>
      {/* header 디자인 작업해서 넣을 예정 */}
      <Header text="메인페이지" link="/homePage" />
      <HomeWrap>
        {/* 사이드메뉴 */}
        <Sidebar />
        <ContentsArea>
          {/* 작업시작 */}
          <Container>
            <Row
              title="Trending Now"
              id="TN"
              fetchUrl={requests.fetchTrending}
            />
            <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />
            <Row
              title="Action Movies"
              id="AM"
              fetchUrl={requests.fetchActionMovies}
            />
            <Row
              title="Comedy Movies"
              id="CM"
              fetchUrl={requests.fetchComedyMovies}
            />
          </Container>
        </ContentsArea>
      </HomeWrap>
    </>
  );
}
export default HomePage;


const HomeWrap = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
  align-items: flex-start;
  margin-top: 72px;
`;

// const SidebarArea = styled.div`
//   display: flex;
//   overflow: auto;
//   background: yellow;
//   flex: 1;
//   max-width: 240px;
//   height: 100vh;
// `;

const ContentsArea = styled.div`
  display: flex;
  flex: 1;
  overflow: auto;
  width: 100%;
  height: 100vh;
`;

const Container = styled.main`
  position: relative;
  overflow-x: hidden;
  display: block;
  top: 25px;
  padding: 0 calc(3.5vw + 6px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
