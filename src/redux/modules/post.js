import { createAction, handleActions } from 'redux-actions'
import { produce } from 'immer'
import 'moment'
import 'moment/locale/ko'
import moment from 'moment'
//modules//
import { actionCreators as imageActions } from './image'
import { apis } from '../../shared/api'
import axios from 'axios'

//action types//
const GET_POST = 'GET_POST'
const ADD_POST = 'ADD_POST'
const EDIT_POST = 'EDIT_POST'
const DELETE_POST = 'DELETE_POST'
const LOADING = 'LOADING'

//actioncreators
const getPost = createAction(GET_POST, (postlist) => ({ postlist }))
const addPost = createAction(ADD_POST, (post) => ({ post }))
const editPost = createAction(EDIT_POST, (postId, newPost) => ({ postId, newPost }))
const deletePost = createAction(DELETE_POST, (postId) => ({ postId }))
const loading = createAction(LOADING, (is_loading) => ({ is_loading }))

//initialState//
const initialState = {
  list: [],
  paging: { state: null, next: null, size: 3 },
  is_laoding: false,
}

const initialPost = [
  {
    postId: 1,
    userId: 1,
    nickname: 'dlwlrma',
    imgUrl: 'https://pbs.twimg.com/profile_images/1381421858151563264/-bjvX4Ui_400x400.jpg',
    content: '🙆🏼‍♀️ 💜',
    likeCnt: '104,282',
    commentCnt: '47,681',
    createAt: moment().fromNow(),
    updateAt: moment().fromNow(),
  },
  {
    postId: 2,
    userId: 2,
    nickname: 'ivestarship',
    imgUrl: 'https://img.wkorea.com/w/2021/12/style_61aad8bbd90fc.jpg',
    content: '5조 화이팅🙆🏼‍♀️ 💜',
    likeCnt: '234,671',
    commentCnt: '102,134',
    createAt: moment().fromNow(),
    updateAt: moment().fromNow(),
  },
]

//middlewares//
const getPostDB = (start = null, size = 3) => {
  return async function (dispatch, getState, { history }) {
    let _paging = getState().post.paging

    console.log(_paging)

    if (_paging.start && !_paging.next) {
      return
    }
    dispatch(loading(true))

    try {
      const postlist = await apis.postList()

      dispatch(getPost(postlist.data))

      // dispatch(imageActions.setPreview(null))
    } catch (error) {
      console.log('게시글을 불러오는데 실패했습니다.', error)
    }
  }
}

const addPostDB = (content, formData) => {
  return async function (dispatch, getState, { history }) {
    try {
      const userId = getState().user.userId
      const nickname = getState().user.nickname
      const imgUrl = getState().image.preview
      const content = getState().post.content
      const likeCnt = getState().post.likeCnt
      const commentCnt = getState().post.likeCnt
      const createAt = getState().post.createAt
      const updateAt = getState().post.updateAt

      const _post = {
        ...initialPost,
        userId: userId,
        nickname: nickname,
        imgUrl: imgUrl,
        content: content,
        likeCnt: likeCnt,
        commentCnt: commentCnt,
        createAt: createAt,
        updateAt: updateAt,
      }

      axios({
        method: 'post',
        url: 'http://13.125.149.78/api/postlist',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${sessionStorage.getItem('token')};`,
        },
      })
        .then((response) => {
          dispatch(addPost(response.data))
          dispatch(imageActions.setPreview(null))
        })
        .catch((error) => {
          console.log('게시글 작성에 문제가 발생했습니다.', error)
        })
        .then(() => {
          history.replace('/main')
        })
    } catch (err) {
      console.error('게시물 업로드 문제 발생', err)
    }
  }
}

const editPostDB = (postId, imgUrl, newPost) => {
  return async function (dispatch, getState, { history }) {
    if (!postId) {
      console.log('게시물 정보가 없습니다.')
      return
    }
    apis
      .editPost(postId, newPost)
      .then(() => {
        dispatch(editPost(postId, newPost))
      })
      .catch((error) => {
        console.log('게시글 수정에 문제가 발생했습니다.', error)
      })
      .then(() => {
        history.replace('/main')
      })
  }
}

const deletePostDB = (postId) => {
  return async function (dispatch, getState, { history }) {
    if (!postId) {
      console.log('게시물 정보가 없습니다.')
      return
    }
    apis
      .deletePost(postId)
      .then(() => {
        dispatch(deletePost(postId))
      })
      .catch((error) => {
        console.log('게시글 삭제에 실패했습니다.', error)
      })
      .then(() => {
        window.location.reload()
      })
  }
}

//reducer//
export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list

        if (action.payload.paging) {
          draft.paging = action.payload.paging
        }
        draft.is_loading = false
      }),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.post)
      }),
    [EDIT_POST]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex((p) => p.id === action.payload.postId)
        draft.list[idx] = { ...draft.list[idx], ...action.payload.newContents }
      }),
    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.filter((p) => p.id !== action.payload.postId)
      }),
    [LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.is_laoding = action.payload.is_loading
      }),
  },
  initialState
)

//actioncreators export
const actionCreators = {
  getPost,
  getPostDB,
  addPost,
  addPostDB,
  editPost,
  editPostDB,
  deletePost,
  deletePostDB,
  loading,
}

export { actionCreators }
