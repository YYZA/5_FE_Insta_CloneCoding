import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../css/PostCard.css'
import UserNameTag from './UserNameTag'
import MenuModal from './MenuModal'
import { Grid, Image, Text } from '../elements'
import { history } from '../redux/configureStore'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import 'moment'
import 'moment/locale/ko'
import moment from 'moment'

const PostCard = (props) => {
  const [modalOpen, setModalOpen] = useState(false)
  const dispatch = useDispatch()

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  window.addEventListener('keyup', (e) => {
    if (setModalOpen(false) && e.key === 'Escape') {
      setModalOpen(true)
    }
  })

  const a = props.updatedAt

  const day = moment(props.updatedAt).fromNow()

  return (
    <>
      <div className="Container">
        <Grid is_flex>
          <div className="UserNameTagButton">
            <UserNameTag _onClick={() => history.push('/postComment')} hover />
          </div>
          <MoreHorizOutlinedIcon className="MoreButton" onClick={openModal}></MoreHorizOutlinedIcon>
        </Grid>
        <Image size="600" src="https://www.hidomin.com/news/photo/202105/453232_224470_4025.jpg" />
        <div className="SnsButtons">
          <FavoriteRoundedIcon className="LikeButton" fontSize="5" />
          <MapsUgcOutlinedIcon className="PostCommentButton" fontSize="5" onClick={() => history.push('/PostComment')} />
          <SendOutlinedIcon className="PostShareButton" fontSize="5" />
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
      <MenuModal open={modalOpen} close={closeModal} header={'123'} />
    </>
  )
}

export default PostCard
