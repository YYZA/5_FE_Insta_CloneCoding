import React from "react";
import "../css/Main.css";
import styled from "styled-components";

const ProfilePreview = (props) => {
  return (
    <>
      <Rectangle src={props.imgUrl}></Rectangle>
    </>
  );
};

export default ProfilePreview;
const Rectangle = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
`;
