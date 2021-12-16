import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import '../css/PostAdd.css'
import { Grid, Image, Text } from '../elements'
import { history } from '../redux/configureStore'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import { apis } from '../shared/api'

const PostAdd_2 = () => {
  const [files, setFiles] = useState([])

  const user = useSelector((state) => state.user)
  const history = useHistory()

  const onPostAdd = () => {
    let formData = new FormData()
    console.log(formData)

    formData.append('file', files[0])

    let postData = [
      {
        content: 'content',
        // userId: 'userId',
        // nickname: 'nickname',
      },
    ]

    formData.append('data', new Blob([JSON.stringify(postData)], { type: 'application/json' }))

    apis.addPost('/api/postlist', formData)
  }

  const onDrop = (files) => {
    setFiles(files)
  }

  return (
    <>
      <div className="ImageInputButton" onDrop={onDrop}>
        <label for="ImageInput">이미지 선택하기</label>
        <input type="file" id="ImageInput" name="ImageInput" accept="image/png, image/jpeg, , image/jpg, image/gif" />
      </div>
      <button size="large" onClick={onPostAdd}>
        게시물 작성하기
      </button>
    </>
  )

  // return (
  //   <>
  //     <div className="Container">
  //       <div className="ImageInputButton">
  //         <label for="ImageInput">이미지 선택하기</label>
  //         <input type="file" id="ImageInput" name="ImageInput" accept="image/png, image/jpeg" />
  //       </div>
  //       <Image size="600" src="https://www.hidomin.com/news/photo/202105/453232_224470_4025.jpg" />
  //       <div className="SnsButtons">
  //         <FavoriteRoundedIcon fontSize="5" className="LikeButton" />
  //         {/* <ModeCommentOutlinedIcon className="CommentButton" />
  //         <NearMeOutlinedIcon className="ShareButton" /> */}
  //         <div className="CommentButton2" onClick={() => history.push('/PostComment')}>
  //           <Image src="https://o.remove.bg/downloads/33ff2c6e-9723-4346-8d9e-d0bd6ab84c73/insta_icons_2_generated__1_-removebg-preview-removebg-preview.png" size="40"></Image>
  //         </div>
  //         <div className="ShareButton2">
  //           <Image src="https://o.remove.bg/downloads/0e6a7f30-dd91-4e1d-8f56-79344140db56/insta_icons_2_generated__2_-removebg-preview-removebg-preview.png" size="40"></Image>
  //         </div>
  //       </div>
  //       <div className="ContentSection">
  //         <div className="DescriptioncUserName">dlwlrma</div>
  //         <div className="DescriptionContent">💜</div>
  //       </div>
  //       <div className="CommentCnt" onClick={() => history.push('/PostComment')}>
  //         댓글 45,241개 모두 보기
  //       </div>
  //       <div className="CommentSection">
  //         <div className="CommentUserName">dlgkstoa</div>
  //         <div className="CommentContent">팬아저</div>
  //       </div>
  //       <div className="CommentSection">
  //         <div className="CommentUserName">stuffed_cow</div>
  //         <div className="CommentContent">우윳빛깔 이지은</div>
  //       </div>
  //       <div className="CreatedAt">31분 전</div>
  //     </div>
  //   </>
  // )
}

export default PostAdd_2
