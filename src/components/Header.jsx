import React from "react";
import styled from "styled-components";
import Text from "../elements/Text";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";

const Header = (props) => {
  return (
    <HeaderDiv>
      <Logo>Instargram</Logo>
      <div style={{ marginRight: "10px" }}>
        <IconButton aria-label="delete">
          <AddIcon />
        </IconButton>
        <IconButton aria-label="delete">
          <MenuIcon />
        </IconButton>
      </div>
    </HeaderDiv>
  );
};

const Logo = styled.div`
  font-size: 20px;
  font-family: "Lobster", cursive;
  margin-left: 20px;
`;

const HeaderDiv = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 450px;
  height: 50px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
`;
export default Header;
