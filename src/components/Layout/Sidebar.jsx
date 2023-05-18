import { styled } from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import { BiCameraMovie } from "react-icons/bi";
import { MdOndemandVideo } from "react-icons/md";
import { HiOutlineFilm } from "react-icons/hi";

function Sidebar() {
  const menus = [
    {
      name: "전체",
      path: "/homepage/all",
      icon: <HiOutlineFilm style={{ marginRight: "5px" }} />,
    },
    {
      name: "영화",
      path: "/homepage/movie",
      icon: <HiOutlineFilm style={{ marginRight: "5px" }} />,
    },
    {
      name: "TV",
      path: "/homepage/tv",
      icon: <MdOndemandVideo style={{ marginRight: "5px" }} />,
    },
  ];

  return (
    <>
      <SidebarArea>
        {/* <Logo type="button"></Logo> */}
        {/* <img src="img/atcha.png" /> */}
        <Logoosi />
        {menus.map((menu, index) => {
          return (
            <MenuArea key={index}>
              <Link
                exact
                style={{ color: "white", textDecoration: "none" }}
                to={menu.path}
                activeStyle={{ color: "black" }}
              >
                {/* {menu.icon} */}
                <SidebarItem menu={menu} />
              </Link>
            </MenuArea>
          );
        })}
      </SidebarArea>
    </>
  );
}

export default Sidebar;

const SidebarArea = styled.div`

  position: fixed;
  top: 0;
  left: 0;
  z-index: 501;
  background: #141517;
  width: 200px;
  height: 100%;
  border-right: 1px #1b1c1d solid;
`;

// const Logo = styled.button`
//   width: 94px;
//   height: 72px;
//   background: url("img/atcha.png") no-repeat center center;
//   background-size: contain;
//   z-index: -100;
//   border: none;
//   a {
//     width: 100%;
//     height: 100%;
//     line-height: 0;
//     padding: 1em 5em;
//     opacity: 0;
//   }
// `;

const Logoosi = styled.button`
  background: url("img/atcha.png") no-repeat center center;

  width: 94px;
  height: 72px;
`;
const MenuArea = styled.div`
  padding: 20px;
  background-color: #141517;
  height: 35px;
  border-radius: 10px;
  margin-bottom: 2px;
  margin-top: 2px;
  color: white;
  font-size: 16px;
  display: flex;
  align-items: center;
`;
