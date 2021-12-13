import React from 'react'
import '../css/PostCard.css'
import UserNameTag from './UserNameTag'
import { Grid, Image, Text } from '../elements'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined'
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined'

const PostCard = () => {
  return (
    <>
      <div className="Container">
        <Grid is_flex>
          <div>
            <UserNameTag />
          </div>
          <MoreHorizOutlinedIcon className="MoreButton"></MoreHorizOutlinedIcon>
        </Grid>
        <Image size="600" src="https://www.hidomin.com/news/photo/202105/453232_224470_4025.jpg" />
        <div className="SnsButtons">
          <FavoriteRoundedIcon className="LikeButton" />
          <ModeCommentOutlinedIcon className="CommentButton" />
          <NearMeOutlinedIcon className="ShareButton" />
        </div>
        <div className="ContentSection">
          <div className="DescriptioncUserName">dlwlrma</div>
          <div className="DescriptionContent">💜</div>
        </div>
        <div className="CommentCnt">댓글 45,241개 모두 보기</div>
        <div className="CommentSection">
          <div className="CommentUserName">dlgkstoa</div>
          <div className="CommentContent">ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</div>
        </div>
        <div className="CommentSection">
          <div className="CommentUserName">stuffed_cow</div>
          <div className="CommentContent">지은상 예뻐요</div>
        </div>
        <div className="CreatedAt">31분 전</div>
      </div>
    </>
  )
}

export default PostCard
