import { styled } from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <SidebarArea>
        <ul>
          <li><Link to="/detailPage/movie">비디오</Link></li>
          <li><Link to="/detailPage/tv">TV</Link></li>
          <li><Link to="/">찾기</Link></li>
        </ul>
      </SidebarArea>
    </>
  );
}
export default Sidebar;

const SidebarArea = styled.div`
  display: flex;
  overflow: auto;
  top: 0;
  left: 0;
  flex: 1;
  max-width: 240px;
  height: 100vh;
  background: #141517;
  border-right: 1px #1b1c1d solid;
  color:#fff;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: stretch;
    background: transparent;
    color: #d4d7db;
    text-decoration: none;
    width: 100%;
    padding: 8px 12px;
    border: 0;
    border-radius: 8px;
    appearance: none;
    outline: none;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0px;
    text-decoration: none;
    line-height: 20px;
    background: #303133;
    color: #fff;
  }

  li{
    -webkit-align-self: stretch;
    -ms-flex-item-align: stretch;
    align-self: stretch;
    list-style: none;
    padding: 0;
    margin: 0;
  }

`;
