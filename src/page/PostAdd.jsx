import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import '../css/PostAdd.css'
import { Grid, Image, Text } from '../elements'
import { history } from '../redux/configureStore'
import { apis } from '../shared/api'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
import { HiOutlinePhotograph } from 'react-icons/hi'
import { CgPlayButtonR } from 'react-icons/cg'
import { actionCreators as imageActions } from '../redux/modules/image'
import { actionCreators as postActions } from '../redux/modules/post'

const PostAdd = (props) => {
  const dispatch = useDispatch()
  // const preview = useSelector((state) => state.imgFile.preview)
  const [imgFile, setImgFile] = React.useState(null)
  const fileInput = React.useRef()
  const is_login = useSelector((state) => state.user.is_login)
  const postlist = useSelector((state) => state.post.list)
  const { history } = props

  let postId = props.match.params.idx

  const is_edit = postId ? true : false

  let _post = is_edit ? postlist.find((p) => p.id === Number(postId)) : null

  const [imgUrl, setImgUrl] = React.useState(_post ? _post.imgUrl : '')
  const [content, setContents] = React.useState(_post ? _post.content : '')

  React.useEffect(() => {
    if (is_edit && !_post) {
      console.log('포스트 정보가 없어요!')
      history.goBack()

      return
    }

    if (is_edit) {
      dispatch(imageActions.setPreview(_post.image))
    }
  }, [])

  const onChange = (e) => {
    setContents(e.target.value)
  }
  const selectFile = (e) => {
    const reader = new FileReader()
    const file = fileInput.current.files[0]

    reader.readAsDataURL(file)

    reader.onloadend = () => {
      dispatch(imageActions.setPreview(reader.result))
      if (file) {
        setImgFile(file)
      }
    }
  }

  const addPost = () => {
    if (imgFile === null) {
      window.alert('이미지를 선택해주세요!')
      return
    }

    let addFormData = new FormData()
    let postData = [
      {
        imgUrl: imgUrl,
        content: content,
      },
    ]

    addFormData.append('multipartFile', imgFile)
    addFormData.append('data', new Blob([JSON.stringify(postData)], { type: 'application/json' }))

    dispatch(postActions.addPostDB(content, addFormData))
  }

  const editPost = () => {
    // 이미지를 변경하지 않았을 경우
    if (imgFile === null) {
      window.alert('이미지를 변경해주세요!')
      return
    }

    const editFormData = new FormData()

    const postData = {
      content: content,
    }

    editFormData.append('multipartFile', imgFile)
    editFormData.append('data', new Blob([JSON.stringify(postData)], { type: 'application/json' }))

    dispatch(postActions.editPostDB(postId, { content: content }, editFormData))
  }

  if (!is_login) {
    history.push('/')
    window.alert('로그인 후 게시글을 작성할 수 있습니다.')
  }

  return (
    <>
      <div className="BackgroundOpacity">
        <CancelOutlinedIcon className="CancelAddPost" fontSize="5" onClick={() => history.push('/main')} />
        <div className="FakeModalAddPost">
          <text className="NewPostCreate">{!is_edit ? '새 게시물 만들기' : '게시물 수정하기'}</text>
          <hr className="TopLine" />
          <div className="ImageInputSection">
            <HiOutlinePhotograph className="PhotoIcon" fontSize="5" />
            <CgPlayButtonR className="PlayIcon" fontSize="5" />
          </div>
          <div className="InputGuideText">
            <label className="InputLabelText">사진과 동영상을 여기에 끌어다 놓으세요</label>
            <div className="UploadFileBox">
              <label for="ImageInput">컴퓨터에서 선택</label>
              <input type="file" id="ImageInput" name="ImageInput" style={{ display: 'none' }} onChange={selectFile} ref={fileInput} accept="image/png, image/jpeg, , image/jpg, image/gif" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostAdd
