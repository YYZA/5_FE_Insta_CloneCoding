import { createAction, handleActions } from 'redux-actions'
import { produce } from 'immer'
import 'moment'
import 'moment/locale/ko'
import moment from 'moment'
//modules//
import { actionCreators as imageActions } from './image'
import { apis } from '../../shared/api'

//action types//
const GET_POST = 'GET_POST'
const ADD_POST = 'ADD_POST'
const EDIT_POST = 'EDIT_POST'
const DELETE_POST = 'DELETE_POST'
const LOADING = 'LOADING'

//actioncreators
const getPost = createAction(GET_POST, (postlist) => ({ postlist }))
const addPost = createAction(ADD_POST, (post) => ({ post }))
const editPost = createAction(EDIT_POST, (postId, newContents) => ({ postId, newContents }))
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
    dispatch(loading(true)) //무한스크롤 기능 구현 필요

    try {
      const post_list = await apis.postList()

      dispatch(getPost(post_list.data))

      dispatch(imageActions.setPreview(null))
    } catch (error) {
      console.log('게시글을 불러오는데 실패했습니다.', error)
    }
  }
}

const addPostDB = (filename, content) => {
  return async function (dispatch, getState, { history }) {
    console.log(content)
    apis
      .addPost(filename, content)
      .then((res) => {
        dispatch(addPost(res.data.post))
        dispatch(imageActions.setPreview(null))
      })
      .catch((error) => {
        console.log('게시글 작성에 문제가 발생했습니다.', error)
      })
      .then(() => {
        history.replace('/main')
      })
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
