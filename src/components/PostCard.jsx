import React from 'react'
import '../css/PostCard.css'
import UserNameTag from './UserNameTag'
import { Grid, Image, Text } from '../elements'
import { history } from '../redux/configureStore'
import '../shared/icon/Instagram_Comment_Button.png'
import '../shared/icon/Instagram_Share_Button.png'
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
          <div className="UserNameTagButton">
            <UserNameTag _onClick={() => history.push('/PostComment')} hover />
          </div>
          <MoreHorizOutlinedIcon className="MoreButton"></MoreHorizOutlinedIcon>
        </Grid>
        <Image size="600" src="https://www.hidomin.com/news/photo/202105/453232_224470_4025.jpg" />
        <div className="SnsButtons">
          <FavoriteRoundedIcon fontSize="5" className="LikeButton" />
          {/* <ModeCommentOutlinedIcon className="CommentButton" />
          <NearMeOutlinedIcon className="ShareButton" /> */}
          <div className="CommentButton2" onClick={() => history.push('/PostComment')}>
            <Image src="/Users/sam/Desktop/React/ClonedCoding/clonecoding/src/shared/icon/Instagram_Comment_Button.png" size="40"></Image>
          </div>
          <div className="ShareButton2">
            <Image src="/Users/sam/Desktop/React/ClonedCoding/clonecoding/src/shared/icon/Instagram_Share_Button.png" size="40"></Image>
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
