import { createAction, handleActions } from 'redux-actions'
import { produce } from 'immer'
import 'moment'
import 'moment/locale/ko'
import moment from 'moment'

// ************ modules ************ //
import { actionCreators as imageActions } from './image'
import { apis } from '../../shared/api'

// // ************ Action Type ************ //
const GET_POST = 'GET_POST'
const ADD_POST = 'ADD_POST'
const EDIT_POST = 'EDIT_POST'
const DELETE_POST = 'DELETE_POST'
const LOADING = 'LOADING'

// // ************ Action Creator ************ //
const getPost = createAction(GET_POST, (post_list) => ({ post_list }))
const addPost = createAction(ADD_POST, (post) => ({ post }))
const editPost = createAction(EDIT_POST, (postId, newContents) => ({ postId, newContents }))
const deletePost = createAction(DELETE_POST, (postId) => ({ postId }))
const loading = createAction(LOADING, (is_loading) => ({ is_loading }))

// ************ Initial Data ************ //
const initialState = {
  list: [],
  paging: { state: null, next: null, size: 3 },
  is_laoding: false,
}

const initialPost = {
  userId: 1,
  postId: 1,
  nickname: '213am',
  createAt: moment().format('YYYY-MM-DD HH:mm:ss'),
  content: '',
  imgUrl: 'https://pbs.twimg.com/profile_images/1381421858151563264/-bjvX4Ui_400x400.jpg',
  numOfComments: 10,
}

// ************ Middlewares ************ //
const getPostDB = (start = null, size = 3) => {
  return async function (dispatch, getState, { history }) {
    let _paging = getState().post.paging

    console.log(_paging)

    if (_paging.start && !_paging.next) {
      return
    }

    dispatch(loading(true))

    // 무한스크롤 구현 필요

    try {
      const post_list = await apis.posts()

      dispatch(getPost(post_list.data))

      dispatch(imageActions.setPreview(null))
    } catch (error) {
      console.log('게시글 조회에 문제가 발생했습니다.', error)
    }
  }
}

const addPostDB = (contents) => {
  return async function (dispatch, getState, { history }) {
    console.log(contents)
    apis
      .addPost(contents)
      .then((res) => {
        dispatch(addPost(res.data.post))
        // history.replace('/posts')
        dispatch(imageActions.setPreview(null))
      })
      .catch((error) => {
        console.log('게시글 작성에 문제가 발생했습니다.', error)
      })
      .then(() => {
        history.replace('/')
      })
  }
}

const editPostDB = (postId, newContents) => {
  return async function (dispatch, getState, { history }) {
    if (!postId) {
      console.log('게시물 정보가 없습니다.')
      return
    }
    apis
      .editPost(postId, newContents)
      .then(() => {
        dispatch(editPost(postId, newContents))
      })
      .catch((error) => {
        console.log('게시글 수정에 문제가 발생했습니다.', error)
      })
      .then(() => {
        history.replace('/')
      })
  }
}

const deletePostDB = (postId) => {
  return async function (dispatch, getState, { history }) {
    if (!postId) {
      console.log('게시물 정보가 없습니다.')
      return
    }
    // try {
    //   await apis.deletePost(postId)
    //   dispatch(deletePost(postId))
    // } catch (error) {
    //   console.log('게시글 삭제에 문제가 발생했습니다.')
    //   // window.alert('게시글 삭제에 문제가 발생했습니다')
    // }
    apis
      .deletePost(postId)
      .then(() => {
        dispatch(deletePost(postId))
      })
      .catch((error) => {
        console.log('게시글 삭제에 문제가 발생했습니다.', error)
      })
      .then(() => {
        window.location.reload()
      })
  }
}

// ************ Reducer ************ //
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

// ************ Export ************ //
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
