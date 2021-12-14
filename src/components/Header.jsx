import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Text from "../elements/Text";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import { getCookie } from "../shared/Cookie";
import { history } from "../redux/configureStore";
let cookie = getCookie("x_auth");

const Header = (props) => {
  const is_login = useSelector((state) => state.user.is_login);
  return (
    <>
      {cookie || is_login ? (
        <HeaderDiv>
          <Logo>Instargram</Logo>
          <div style={{ marginRight: "10px" }}>
            <IconButton
              onClick={() => {
                history.push("/PostAdd");
              }}
              aria-label="delete"
            >
              <AddIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                history.push("/profile");
              }}
              aria-label="delete"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </HeaderDiv>
      ) : (
        <HeaderDiv>
          <Logo>Instargram</Logo>
        </HeaderDiv>
      )}
    </>
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
