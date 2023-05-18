import React from "react";
import styled from "styled-components";
import { BsFillCaretRightFill } from "react-icons/bs";
import { useQuery } from "react-query";
import DetailMovie from "../components/detail/DetailMovie";
import Director from "../components/director/Director";
import { detailMovie } from "../api/detail/detailMovie";
import Sidebar from "../components/Layout/Sidebar";
import AllList from "../components/home/AllList";

function DetailMoviePage() {
  return (
    <>
      <Sidebar />
      <DetailMovie />
    </>
  );
}

export default DetailMoviePage;
