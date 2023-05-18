import React from "react";
import DetailMovie from "../components/detail/DetailMovie";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Layout/Sidebar";
import Head from "../components/Layout/Head";
import Header from "../components/Layout/Header";

function DetailMoviePage() {
  const { id } = useParams();
  console.log("아이디", id);
  return (
    <>
      {/* <Header /> */}

      <Sidebar />
      <DetailMovie />
    </>
  );
}

export default DetailMoviePage;
