import React from "react";
import DetailMovie from "../components/detail/DetailMovie";
import { useParams } from "react-router-dom";

function DetailMoviePage() {
  const { id } = useParams()
  console.log("아이디",id)
  return (
    <>
      {/* <Sidebar /> */}
      <DetailMovie id={id}/>
    </>
  );
}

export default DetailMoviePage;
