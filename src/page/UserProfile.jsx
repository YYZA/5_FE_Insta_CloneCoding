import React from "react";
import "../css/Main.css";
import styled from "styled-components";
import Text from "../elements/Text";
import Header from "../components/Header";

const UserProfile = (props) => {
  return (
    <>
      <Header />
      <div
        style={{
          width: "100vw",
          height: "100vh",
          margin: "0px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Circle src={props.user_image}></Circle>
          <Text weight="600" size="24px">
            {props.nickname}
          </Text>
          <Rectangle src={props.user_image}></Rectangle>
        </Container>
      </div>
    </>
  );
};

UserProfile.defaultProps = {
  nickname: "YYZAS",
  user_image: "https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927",
};

export default UserProfile;
const Rectangle = styled.img`
  width: "200px";
  height: "200px";
`;

const Circle = styled.img`
  border-radius: 50%;
  margin: 100px 0 0 0;
  width: 10%;
`;

const Container = styled.div`
  height: 800px;
  width: 1500px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  margin: 0px auto;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
