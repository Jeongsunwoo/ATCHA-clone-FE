import React from "react";
import { styled } from "styled-components";
import Sidebar from "../components/Layout/Sidebar";
// import { detailMovie } from "../api/detail/detailMovie";
// import { useQuery } from "react-query";
// import { detailTv } from "../api/detail/detailTv";
import { detailTv } from "../api/detail/detailTv";
import { Outlet } from "react-router-dom";

function DetailPage() {
  // const { data: tvData } = useQuery("detailtv", detailTv);
  // console.log("tv상세조회!:", tvData);

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default DetailPage;



