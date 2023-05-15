import React from "react";
import MainFullPage from "../components/main/MainFullPage";
import Header from "../components/Layout/Header";

function MainPage() {
  return (
    <>
      <MainFullPage></MainFullPage>
      <Header text="로그인" link="/login"/>
    </>
  );
}

export default MainPage;
