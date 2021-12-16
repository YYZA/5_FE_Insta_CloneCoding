import React, { useState } from 'react'
import '../css/PostComment.css'
import { useDispatch, useSelector } from 'react-redux'
import UserNameTag from '../components/UserNameTag'
import MenuModal from '../components/MenuModal'
import { Grid, Image, Text, Spinner } from '../elements'
import { history } from '../redux/configureStore'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import MiniCommentButton from '../shared/icon/insta_comment.png'
import MiniShareButton from '../shared/icon/insta_share.png'
import { BiBookmark } from 'react-icons/bi'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
import BasicProfile from '../shared/icon/originalLogo.png'

const PostComment = (props) => {
  const dispatch = useDispatch()

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
              <FavoriteRoundedIcon className="MiniPostCardLikeButton" />
              {/* <MiniCommentButton className="MiniPostCardCommentButton" /> */}
              {/* <MiniShareButton className="MiniPostCardShareButton" /> */}
              <BiBookmark className="MiniPostCardBookmarkButton" />
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
        </div>
      </div>
      <MenuModal open={modalOpen} close={closeModal} header={'123'} />
    </>
  )
}

export default PostComment
