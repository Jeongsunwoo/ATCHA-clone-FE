import React from "react";
import DetailMovie from "../components/detail/DetailMovie";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Layout/Sidebar";
import Header from "../components/Layout/Header";

function DetailMoviePage() {
  const { id } = useParams();
  console.log("아이디", id);
  return (
    <>
      <Header text="마이프로필" link="/profileeditpage" />
      <Sidebar />
      <DetailMovie />
    </>
  );
}

export default DetailMoviePage;
