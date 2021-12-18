import React, { useState } from 'react'
import '../css/PostComment.css'
import { useDispatch, useSelector } from 'react-redux'
import UserNameTag from '../components/UserNameTag'
import MenuModal from '../components/MenuModal'
import { Grid, Image, Text, Spinner } from '../elements'
import { history } from '../redux/configureStore'
import { actionCreators as postActions } from '../redux/modules/post'
import { actionCreators as commentActions } from '../redux/modules/comment'
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import MiniCommentButton from '../shared/icon/insta_comment.png'
import MiniShareButton from '../shared/icon/insta_share.png'
import CommentButton from '../shared/icon/insta_comment.png'
import ShareButton from '../shared/icon/insta_share.png'
import { BiBookmark } from 'react-icons/bi'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
import BasicProfile from '../shared/icon/originalLogo.png'

const PostComment = (props) => {
  const postList = useSelector((state) => state.postlist.list)
  const postlist = props

  const createdAt = postlist.createdAt
  const imgUrl = postlist.imgUrl
  const nickname = postlist.nickname
  const content = postlist.content
  const commentCnt = postlist.commentCnt
  const postId = postlist.postId
  console.log(imgUrl)
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

  const [image, setImage] = React.useState()

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

  const addComment = () => {
    dispatch(postActions.addCommentDB(content, image))
  }

  return (
    <>
      <div className="BackgroundOpacity">
        <CancelOutlinedIcon className="CancelAddPost" fontSize="5" onClick={() => history.push('/main')} />
        <div className="CommetContainer">
          <div className="MiniPostCard">
            <div className="MiniPostCardNameTag">
              <img className="MiniPostCardProfile" size="10" src={BasicProfile} />
              <text className="MiniPostCardNickname">dlwlrma</text>
              <MoreHorizOutlinedIcon className="MiniPostCardMoreButton" onClick={openModal}></MoreHorizOutlinedIcon>
            </div>
            <div className="PostImage">
              <img size="800" src="https://www.hidomin.com/news/photo/202105/453232_224470_4025.jpg" />
            </div>
            <div>
              <FavoriteRoundedIcon className="MiniPostCardLikeButton" fontSize="5" />
              <img src={MiniCommentButton} className="MiniPostCardCommentButton" fontSize="5" />
              <img src={MiniShareButton} className="MiniPostCardShareButton" fontSize="5" />
              <BiBookmark className="MiniPostCardBookmarkButton" fontSize="5" />
            </div>
            <text className="MiniPostCardLikeCnt">좋아요 15,512개</text>
            <text className="MiniPostCardcreatedAt">31분 전</text>
          </div>
          <div className="RightCommentPage">
            <Grid is_flex margin="5px 0 0 5px">
              <UserNameTag />
              <text className="MyFollowingCheck"> · 팔로잉</text>
              <MoreHorizOutlinedIcon className="MoreButton" onClick={openModal}></MoreHorizOutlinedIcon>
            </Grid>
            <hr className="Contour" />
            <div className="DetailComment">
              <UserNameTag />
              <Text margin="12px 0 0 15px">💜</Text>
            </div>
            <Text margin="10px 0px 10px 45px" size="13px" color="gray">
              31분 전
            </Text>
            <hr className="Contour" />
            <div className="AllUserCommentList">
              <div className="PostCommentList">
                <div className="UserComment">
                  <UserNameTag />
                  <text className="UserCommentContent" margin="25px 10px 0 10px">
                    is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글{' '}
                  </text>
                </div>
                <div className="CommnetCreatedAt">3시간 전</div>
              </div>
              <div className="PostCommentList">
                <div className="UserComment">
                  <UserNameTag />
                  <text className="UserCommentContent" margin="25px 10px 0 10px">
                    is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글{' '}
                  </text>
                </div>
                <div className="CommnetCreatedAt">3시간 전</div>
              </div>
              <div className="PostCommentList">
                <div className="UserComment">
                  <UserNameTag />
                  <text className="UserCommentContent" margin="25px 10px 0 10px">
                    is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글{' '}
                  </text>
                </div>
                <div className="CommnetCreatedAt">3시간 전</div>
              </div>
              <div className="PostCommentList">
                <div className="UserComment">
                  <UserNameTag />
                  <text className="UserCommentContent" margin="25px 10px 0 10px">
                    is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글{' '}
                  </text>
                </div>
                <div className="CommnetCreatedAt">3시간 전</div>
              </div>
              <div className="PostCommentList">
                <div className="UserComment">
                  <UserNameTag />
                  <text className="UserCommentContent" margin="25px 10px 0 10px">
                    is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글{' '}
                  </text>
                </div>
                <div className="CommnetCreatedAt">3시간 전</div>
              </div>
              <div className="PostCommentList">
                <div className="UserComment">
                  <UserNameTag />
                  <text className="UserCommentContent" margin="25px 10px 0 10px">
                    is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글{' '}
                  </text>
                </div>
                <div className="CommnetCreatedAt">3시간 전</div>
              </div>
              <div className="PostCommentList">
                <div className="UserComment">
                  <UserNameTag />
                  <text className="UserCommentContent" margin="25px 10px 0 10px">
                    is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글{' '}
                  </text>
                </div>
                <div className="CommnetCreatedAt">3시간 전</div>
              </div>
              <div className="PostCommentList">
                <div className="UserComment">
                  <UserNameTag />
                  <text className="UserCommentContent" margin="25px 10px 0 10px">
                    is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글{' '}
                  </text>
                </div>
                <div className="CommnetCreatedAt">3시간 전</div>
              </div>
              <div className="PostCommentList">
                <div className="UserComment">
                  <UserNameTag />
                  <text className="UserCommentContent" margin="25px 10px 0 10px">
                    is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글{' '}
                  </text>
                </div>
                <div className="CommnetCreatedAt">3시간 전</div>
              </div>
            </div>
            <hr className="CommentContour" />
            <div className="DetailSnsButtons">
              {/* <Like /> */}
              <FavoriteRoundedIcon className="DetailLikeButton" fontSize="5" />
              <img className="DetailPostCommentButton" src={CommentButton} onClick={() => history.push('/main/postComment')} />
              <img className="DetailPostShareButton" src={ShareButton} />
              <BiBookmark className="DetailBookMarkButton" fontSize="5" />
            </div>
            <text className="DetailLikeCnt">좋아요 15,628개</text>
            <hr className="DetailCommentContour" />
            <div className="FixedCommentSection">
              <Grid is_flex>
                <SentimentSatisfiedOutlinedIcon className="DetailSmileButton" fontSize="5" />
                <input className="DetailCommentInputBox" placeholder="댓글 달기..." multiLine value={content}>
                  {props.content}
                </input>
                <button className="DetailCommentAddButton" onClick={addComment}>
                  게시
                </button>
              </Grid>
            </div>
          </div>
        </div>
      </div>
      <MenuModal open={modalOpen} close={closeModal} header={'123'} />
    </>
  )
}

export default PostComment
