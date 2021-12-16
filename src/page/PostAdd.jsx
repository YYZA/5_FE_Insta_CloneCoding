import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import '../css/PostAdd.css'
import { Grid, Image, Text } from '../elements'
import { history } from '../redux/configureStore'
import { apis } from '../shared/api'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
import { HiOutlinePhotograph } from 'react-icons/hi'
import { CgPlayButtonR } from 'react-icons/cg'

const PostAdd = () => {
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
      <div className="BackgroundOpacity">
        <CancelOutlinedIcon className="CancelAddPost" fontSize="5" onClick={() => history.push('/main')} />
        <div className="FakeModalAddPost">
          <text className="NewPostCreate">새 게시물 만들기</text>
          <hr className="TopLine" />
          <div className="ImageInputSection">
            <HiOutlinePhotograph className="PhotoIcon" fontSize="5" />
            <CgPlayButtonR className="PlayIcon" fontSize="5" />
          </div>
          <div className="InputGuideText">
            <label className="InputLabelText" for="ImageInput">
              사진과 동영상을 여기에 끌어다 놓으세요
            </label>
            <button onClick={onPostAdd} className="ImageInputButton" type="button" id="ImageInput" name="ImageInput" accept="image/png, image/jpeg, , image/jpg, image/gif">
              컴퓨터에서 선택
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostAdd
