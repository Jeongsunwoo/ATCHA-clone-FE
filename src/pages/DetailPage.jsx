import React from "react";
import { detailMovie } from "../api/detail/detailMovie";
import { useQuery } from "react-query";
import { detailTv } from "../api/detail/detailTv";

function DetailPage() {
  // const { error, data } = useQuery("detailmovie", detailMovie);
  // console.log("왜:", data);
  // console.log(error);
  // // console.log({ detailMovie });

  const { data } = useQuery("detailtv", detailTv);
  console.log("tv상세조회!:", data);

  return <div>조선아</div>;
}

export default DetailPage;
