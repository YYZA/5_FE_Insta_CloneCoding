import React from 'react'
import '../css/PostComment.css'
import UserNameTag from '../components/UserNameTag'
import { Grid, Image, Text } from '../elements'
import { history } from '../redux/configureStore'
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined'
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined'

const PostComment = () => {
  return (
    <>
      <div className="Background">
        <div className="CommetContainer">
          <div className="CommentHeader">
            <NavigateBeforeOutlinedIcon className="GoBackButton" fontSize="50" onClick={() => history.push('/main')} />
            <Text size="25px" margin="10px 0 0 -5px" fontWeight="bold">
              댓글
            </Text>
            <div className="CommentHeaderSendButton2">
              <Image src="https://o.remove.bg/downloads/4a726871-ff3f-4b10-9c73-54b12375a399/insta_icons_2_generated__2_-removebg-preview-removebg-preview.png" size="40"></Image>
            </div>
            {/* <NearMeOutlinedIcon className="CommentHeaderSendButton" /> */}
          </div>
          <hr className="Contour" />
          <div className="DetailComment">
            <UserNameTag></UserNameTag>
            <Text margin="12px 0 0 15px">💜</Text>
          </div>
          <Text margin="10px 0px 10px 45px" size="13px" color="gray">
            31분 전
          </Text>
          <hr className="Contour" />
          <div className="PostCommentList">
            <div className="UserComment">
              <UserNameTag />
              <Text margin="16px 10px 0 10px">is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글</Text>
            </div>
            <div className="CommnetCreatedAt">3시간 전</div>
          </div>
          <div className="PostCommentList">
            <div className="UserComment">
              <UserNameTag />
              <Text margin="16px 10px 0 10px">is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글</Text>
            </div>
            <div className="CommnetCreatedAt">3시간 전</div>
          </div>
          <div className="PostCommentList">
            <div className="UserComment">
              <UserNameTag />
              <Text margin="16px 10px 0 10px">is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글</Text>
            </div>
            <div className="CommnetCreatedAt">3시간 전</div>
          </div>
          <div className="PostCommentList">
            <div className="UserComment">
              <UserNameTag />
              <Text margin="16px 10px 0 10px">is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글</Text>
            </div>
            <div className="CommnetCreatedAt">3시간 전</div>
          </div>
          <div className="PostCommentList">
            <div className="UserComment">
              <UserNameTag />
              <Text margin="16px 10px 0 10px">is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글</Text>
            </div>
            <div className="CommnetCreatedAt">3시간 전</div>
          </div>
          <div className="PostCommentList">
            <div className="UserComment">
              <UserNameTag />
              <Text margin="16px 10px 0 10px">is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글</Text>
            </div>
            <div className="CommnetCreatedAt">3시간 전</div>
          </div>
          <div className="PostCommentList">
            <div className="UserComment">
              <UserNameTag />
              <Text margin="16px 10px 0 10px">is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글</Text>
            </div>
            <div className="CommnetCreatedAt">3시간 전</div>
          </div>
          <div className="PostCommentList">
            <div className="UserComment">
              <UserNameTag />
              <Text margin="16px 10px 0 10px">is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글</Text>
            </div>
            <div className="CommnetCreatedAt">3시간 전</div>
          </div>
          <div className="PostCommentList">
            <div className="UserComment">
              <UserNameTag />
              <Text margin="16px 10px 0 10px">is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글</Text>
            </div>
            <div className="CommnetCreatedAt">3시간 전</div>
          </div>
          <div className="PostCommentList">
            <div className="UserComment">
              <UserNameTag />
              <Text margin="16px 10px 0 10px">is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글</Text>
            </div>
            <div className="CommnetCreatedAt">3시간 전</div>
          </div>
          <div className="PostCommentList">
            <div className="UserComment">
              <UserNameTag />
              <Text margin="16px 10px 0 10px">is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글</Text>
            </div>
            <div className="CommnetCreatedAt">3시간 전</div>
          </div>
          <div className="PostCommentList">
            <div className="UserComment">
              <UserNameTag />
              <Text margin="16px 10px 0 10px">is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글</Text>
            </div>
            <div className="CommnetCreatedAt">3시간 전</div>
          </div>
          <div className="PostCommentList">
            <div className="UserComment">
              <UserNameTag />
              <Text margin="16px 10px 0 10px">is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글</Text>
            </div>
            <div className="CommnetCreatedAt">3시간 전</div>
          </div>
          <div className="PostCommentList">
            <div className="UserComment">
              <UserNameTag />
              <Text margin="16px 10px 0 10px">is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글</Text>
            </div>
            <div className="CommnetCreatedAt">3시간 전</div>
          </div>
          <div className="PostCommentList">
            <div className="UserComment">
              <UserNameTag />
              <Text margin="16px 10px 0 10px">is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글</Text>
            </div>
            <div className="CommnetCreatedAt">3시간 전</div>
          </div>
          <div className="PostCommentList">
            <div className="UserComment">
              <UserNameTag />
              <Text margin="16px 10px 0 10px">is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글 is_댓글</Text>
            </div>
            <div className="CommnetCreatedAt">3시간 전</div>
          </div>
        </div>
        <div className="CommentFooter">
          <div className="AddCommentSection">
            <Image shape="circle" margin="10px 10px 0 0"></Image>
            <input className="CommentInput"></input>
            <button className="AddCommentButton">게시</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostComment
