import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../css/PostCard.css'
import UserNameTag from './UserNameTag'
import MenuModal from './MenuModal'
import Like from '../components/Like'
import { Grid, Image, Text } from '../elements'
import { history } from '../redux/configureStore'
import { actionCreators as postActions } from '../redux/modules/post'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import { BiBookmark } from 'react-icons/bi'
import CommentButton from '../shared/icon/insta_comment.png'
import ShareButton from '../shared/icon/insta_share.png'
import 'moment'
import 'moment/locale/ko'
import moment from 'moment'

const PostCard = (props) => {
  const dispatch = useDispatch()

  const data = useSelector((state) => state.user.user)
  const post_data = useSelector((state) => state.post.list)
  const token = sessionStorage.getItem('token')
  React.useEffect(() => {
    // 현재 리덕스의 게시글 데이터가 1개 이하일 경우 서버에서 게시글 정보를 가져옴
    if (post_data.length < 2) {
      dispatch(postActions.getPostDB(token, history))
    }
  }, [])
  console.log(post_data)
  const a = props.updatedAt
  const day = moment(props.updatedAt).fromNow()

  const [like, setLike] = useState(false)
  const myLike = () => {
    setLike(true)
  }
  const disLike = () => {
    setLike(false)
  }

  const [modalOpen, setModalOpen] = useState(false)
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

  const deletePost = () => {
    if (window.confirm('게시글을 삭제하시겠습니까?')) {
      return dispatch(postActions.deletePostDB(props.id))
    } else {
      return
    }
  }

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
          {/* <Like /> */}
          <FavoriteRoundedIcon className="LikeButton" fontSize="5" onClick={myLike} />
          <img className="PostCommentButton" src={CommentButton} onClick={() => history.push('/postAdd')} />
          <img className="PostShareButton" src={ShareButton} />
          <BiBookmark className="BookMarkButton" fontSize="5" />
        </div>
        <div className="ContentSection">
          <div className="DescriptioncUserName">dlwlrma</div>
          <div className="DescriptionContent">💜안녕하세요</div>
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
