import React, { useEffect } from "react";
import "../css/Main.css";
import styled from "styled-components";
import { Grid } from "@mui/material";
import ProfilePreview from "../components/ProfilePreview";
import { useSelector } from "react-redux";
import { userActions } from "../redux/modules/user";
import Text from "../elements/Text";
import { useDispatch } from "react-redux";
import Header from "../components/Header";

const UserProfile = (props) => {
  const dispatch = useDispatch();

  const preview = useSelector((state) => state.userlist.img);
  const user_info = useSelector((state) => state.user);
  console.log(preview);

  return (
    <React.Fragment>
      <Header />
      {preview === undefined ? (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            margin: "30px 0px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Container>
            <Circle src="https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927"></Circle>
            <Text weight="600" size="24px">
              {/* {preview.img[0].nickname} */}
            </Text>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {/* {preview.img.map((p, idx) => {
              return (
                <Preview key={idx}>
                  <ProfilePreview {...p} />
                </Preview>
              );
            })} */}
            </div>
          </Container>
        </div>
      ) : (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            margin: "30px 0px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Container>
            <Circle src="https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927"></Circle>
            <Text weight="600" size="24px">
              {preview.img.nickname === undefined ? (
                <>Admin</>
              ) : (
                preview.img[0].nickname
              )}
            </Text>
            <hr style={{ width: "90%" }} />
            <Text weight="600" size="24px">
              PREVIWE
            </Text>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {preview.img !== undefined ? (
                preview.img.map((p, idx) => {
                  return (
                    <Preview key={idx}>
                      <ProfilePreview {...p} />
                    </Preview>
                  );
                })
              ) : (
                <>사진이 없습니다</>
              )}
            </div>
          </Container>
        </div>
      )}
    </React.Fragment>
  );
};

export default UserProfile;

const Circle = styled.img`
  border-radius: 50%;
  margin: 100px 0 0 0;
  width: 10%;
`;
const Preview = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
`;

const Container = styled.div`
  height: 90%;
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
