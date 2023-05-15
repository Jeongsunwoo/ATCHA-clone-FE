import React from "react";
import styled from "@emotion/styled";
import Header from "../components/Layout/Header";

function HomePage() {
  return (
    <>
      <HomeWrap>
        <Header />
      </HomeWrap>
    </>
  );
}
export default HomePage;

const HomeWrap = styled.main`
  background: rgb(20, 21, 23);
  color: #fff;
  width: 100%;
  min-height: 100%;
  padding-bottom: 72px;
`;
