/** @format */

import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import "./Dropdown.css";

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <DropdownMenu
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {MenuItems.map((item, index) => {
          return (
            <DDMLi key={index}>
              <DropdownLink to={item.path} onClick={() => setClick(false)}>
                {item.title}
              </DropdownLink>
            </DDMLi>
          );
        })}
      </DropdownMenu>
    </>
  );
}

export default Dropdown;

const DropdownLink = styled(Link)`
  font-weight: normal;
  display: block;
  height: 100%;
  width: 100%;
  text-decoration: none;
  padding: 17px;
  color: black;
`;

const DropdownMenu = styled.ul`
  background: red;
  width: 270px;
  position: absolute;
  top: 85px;
  list-style: none;
  text-align: start;
`;

const DDMLi = styled.li`
  background: #f2f2f2;
  cursor: pointer;
  &:hover {
    background: #f6e4e1;
  }
`;
