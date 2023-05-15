import React from "react";
import { detailMovie } from "../api/detail/detailMovie";
import { useQuery } from "react-query";
// import { detailTv } from "../api/detail/detailTv";
import { detailTv } from "../api/detail/detailTv";
import { Outlet } from "react-router-dom";

function DetailPage() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default DetailPage;
