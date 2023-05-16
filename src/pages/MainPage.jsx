import React from "react";
import MainFullPage from "../components/main/MainFullPage";
import Header from "../components/Layout/Header";

function MainPage() {
  return (
    <>
      <Header text="로그인" link="/login" />
      <MainFullPage></MainFullPage>
    </>
  );
}

export default MainPage;
