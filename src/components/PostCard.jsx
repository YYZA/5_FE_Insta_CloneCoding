import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../css/PostCard.css'
import UserNameTag from './UserNameTag'
import MenuModal from './MenuModal'
import Like from '../components/Like'
import { Grid, Image, Text } from '../elements'
import { history } from '../redux/configureStore'
import { actionCreators as postActions } from '../redux/modules/post'
import { actionCreators as commentActions } from '../redux/modules/comment'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined'
import { BiBookmark } from 'react-icons/bi'
import CommentButton from '../shared/icon/insta_comment.png'
import ShareButton from '../shared/icon/insta_share.png'
import 'moment'
import 'moment/locale/ko'
import moment from 'moment'

const PostCard = (props) => {
  const postList = useSelector((state) => state.postlist.list)
  const postlist = props

  const createdAt = postlist.createdAt.split('T')[1].split(':')[0]
  const imgUrl = postlist.imgUrl.split(',')
  const nickname = postlist.nickname
  const content = postlist.content
  const commentCnt = postlist.commentCnt
  const postId = postlist.postId

  const dispatch = useDispatch()

  const [getComment, setGetComment] = useState('')

  React.useEffect(() => {
    dispatch(commentActions.getCommentDB(postId))
  }, [])

  const onChange = (e) => {
    setGetComment(e.target.value)
  }

  const write = () => {
    const commentlist = {
      comment: getComment,
    }
    dispatch(commentActions.addCommentDB(postId, commentlist))
    setGetComment('')
  }

  const [like, setLike] = useState(false)
  const myLike = () => {
    setLike(true)
  }
  const disLike = () => {
    setLike(false)
  }

  const day = moment(createdAt).fromNow()

  console.log(day)

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
      return dispatch(postActions.deletePostDB(postList.id))
    } else {
      return
    }
  }

  return (
    <>
      <div className="Container">
        <Grid is_flex>
          <UserNameTag>{nickname}</UserNameTag>
          <MoreHorizOutlinedIcon className="MoreButton" onClick={openModal} />
        </Grid>
        {/* <Image size="600" src="https://www.hidomin.com/news/photo/202105/453232_224470_4025.jpg" /> */}
        <div className="PostImgBox">
          <Image size="590" src={imgUrl} />
        </div>
        <div className="SnsButtons">
          <FavoriteRoundedIcon className="LikeButton" fontSize="5" onClick={myLike} />
          <img className="PostCommentButton" src={CommentButton} onClick={() => history.push('/main/postComment')} />
          <img className="PostShareButton" src={ShareButton} />
          <BiBookmark className="BookMarkButton" fontSize="5" />
        </div>
        <div className="ContentSection">
          <div className="DescriptioncUserName" onClick={() => history.push('/profile')}>
            {nickname}
          </div>
          <div className="DescriptionContent">{content}</div>
        </div>
        <div className="CommentCnt" onClick={() => history.push('/main/postComment/:postid')}>
          댓글 {commentCnt}개 모두 보기
        </div>
        <div className="CommentSection">
          <div className="CommentUserName" onClick={() => history.push('/profile')}>
            dlgkstoa
          </div>
          <div className="CommentContent">아이유</div>
        </div>
        <div className="CreatedAt">{day}</div>
        <hr className="CommentContour" />
        <Grid is_flex>
          <SentimentSatisfiedOutlinedIcon className="SmileButton" fontSize="5" />
          <input className="CommentInputBox" placeholder="댓글 달기..." multiLine onChange={onChange} onSubmit={write}></input>
          <button className="CommentAddButton" onClick={write}>
            게시
          </button>
        </Grid>
      </div>
      <MenuModal open={modalOpen} close={closeModal} header={'123'} />
    </>
  )
}

export default PostCard
