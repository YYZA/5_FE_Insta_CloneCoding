import React from "react";
import styled from "styled-components";
import "../css/Main.css";
import { useSelector } from "react-redux";
import { getCookie } from "../shared/Cookie";
import { history } from "../redux/configureStore";
import HomeIcon from "@mui/icons-material/Home";
import { FiSend } from "react-icons/fi";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import InstaLogo from "../shared/icon/Instagram_logo.svg";

const Header = (props) => {
  return (
    <>
      <div className="Background">
        <div className="MainLayout">
          <div className="MainHeader">
            <div className="HeaderSection">
              <img className="InstagramLogo" src={InstaLogo} />
              <input placeholder=" 🔍  검색" className="HeaderSearchBar" />
              <HomeIcon
                className="HistoryMainButton"
                fontSize="5"
                onClick={() => history.push("/main")}
              />
              <FiSend className="HeaderShareButton" fontSize="5" />
              <AddBoxOutlinedIcon
                className="PostAddButton"
                fontSize="5"
                onClick={() => history.push("/postAdd")}
              />
              <ExploreOutlinedIcon className="CompassButton" fontSize="5" />
              <FavoriteBorderOutlinedIcon
                className="HeaderLikeButton"
                fontSize="5"
              />
              <AccountCircleOutlinedIcon
                className="UserPageButton"
                fontSize="5"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
