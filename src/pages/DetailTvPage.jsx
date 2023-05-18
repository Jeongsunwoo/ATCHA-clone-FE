import React from "react";
import DetailTv from "../components/detail/DetailTv";
import Sidebar from "../components/Layout/Sidebar";
import Header from "../components/Layout/Header";

function DetailTvPage() {
  return (
    <>
      <Header text="마이프로필" link="/profileeditpage" />
      <Sidebar />
      <DetailTv />
    </>
  );
}

export default DetailTvPage;
