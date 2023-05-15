import React from "react";
import { detailMovie } from "../api/detail/detailMovie";
import { useQuery } from "react-query";
import { detailTv } from "../api/detail/detailTv";
import { Outlet } from "react-router-dom";

function DetailPage() {
  const { error, data } = useQuery("detailmovie", detailMovie);
  console.log("왜:", data);
  console.log(error);

  // const { data } = useQuery("detailtv", detailTv);
  // console.log("tv상세조회!:", data);

  return (
    <div>
      걍디테일페이지
      <Outlet />
    </div>
  );
}

export default DetailPage;
