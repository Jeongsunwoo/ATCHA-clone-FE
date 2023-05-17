import React from "react";
import { styled } from "styled-components";

function SidebarItem({ menu }) {
  return (
    <MenuItem>
      {menu.icon}
      <MenuText>{menu.name}</MenuText>
    </MenuItem>
  );
}

export default SidebarItem;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
`;

const MenuText = styled.span`
  margin-left: 5px;
`;
