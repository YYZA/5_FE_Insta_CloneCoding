import React from 'react'
import '../css/PostCard.css'
import UserNameTag from './UserNameTag'
import { Grid, Image, Text } from '../elements'
import { history } from '../redux/configureStore'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'

const PostCard = () => {
  return (
    <>
      <div className="Container">
        <Grid is_flex>
          <div className="UserNameTagButton">
            <UserNameTag _onClick={() => history.push('/postComment')} hover />
          </div>
          <MoreHorizOutlinedIcon className="MoreButton"></MoreHorizOutlinedIcon>
        </Grid>
        <Image size="600" src="https://www.hidomin.com/news/photo/202105/453232_224470_4025.jpg" />
        <div className="SnsButtons">
          <FavoriteRoundedIcon fontSize="5" className="LikeButton" />
          {/* <ModeCommentOutlinedIcon className="CommentButton" />
          <NearMeOutlinedIcon className="ShareButton" /> */}
          <div className="CommentButton2" onClick={() => history.push('/PostComment')}>
            <Image src="https://drive.google.com/file/d/1mzHCCJtqMRwbTywrcdm1sqStZeAHZFDB/view" size="40"></Image>
          </div>
          <div className="ShareButton2">
            <Image src="https://o.remove.bg/downloads/0e6a7f30-dd91-4e1d-8f56-79344140db56/insta_icons_2_generated__2_-removebg-preview-removebg-preview.png" size="40"></Image>
          </div>
        </div>
        <div className="ContentSection">
          <div className="DescriptioncUserName">dlwlrma</div>
          <div className="DescriptionContent">💜</div>
        </div>
        <div className="CommentCnt" onClick={() => history.push('/PostComment')}>
          댓글 45,241개 모두 보기
        </div>
        <div className="CommentSection">
          <div className="CommentUserName">dlgkstoa</div>
          <div className="CommentContent">팬아저</div>
        </div>
        <div className="CommentSection">
          <div className="CommentUserName">stuffed_cow</div>
          <div className="CommentContent">우윳빛깔 이지은</div>
        </div>
        <div className="CreatedAt">31분 전</div>
      </div>
    </>
  )
}

export default PostCard
