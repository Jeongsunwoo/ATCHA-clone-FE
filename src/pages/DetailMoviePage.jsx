import React from "react";
import styled from "styled-components";
import { BsFillCaretRightFill } from "react-icons/bs";
import { useQuery } from "react-query";
import DetailMovie from "../components/detail/DetailMovie";
import Director from "../components/director/Director";
import { detailMovie } from "../api/detail/detailMovie";
import Sidebar from "../components/Layout/Sidebar";
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
