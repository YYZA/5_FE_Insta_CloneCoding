import React from "react";
import "../css/Main.css";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import PostCard from "../components/PostCard";
import { Grid, Image, Text } from "../elements";
import Header from "../components/Header";

const Main = () => {
  const dispatch = useDispatch();
  const post_data = useSelector((state) => state.post.list);

  return (
    <>
      <Header />
      <div className="BodyLayout">
        <div className="MainFooterLayout">
          <Footer />
        </div>
        <div className="MainPostLayout">
          {/* <div className="MyFollowing">내가 팔로우 하는 사람</div> */}
          {post_data.map((p, idx) => {
            return (
              <Grid key={idx} margin="0px">
                <PostCard {...p} />
              </Grid>
            );
          })}
          <PostCard></PostCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
        </div>
      </div>
    </>
  );
};

export default Main;
