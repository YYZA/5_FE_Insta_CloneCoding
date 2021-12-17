import { createAction, handleActions } from 'redux-actions'
import { apis } from '../../shared/api'
import { produce } from 'immer'
import { actionCreators as postActions } from './post'

// Actions Types
const GET_COMMENT = 'GET_COMMENT'
const ADD_COMMENT = 'ADD_COMMENT'
const EDIT_COMMENT = 'EDIT_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'
const LOADING_COMMENT = 'LOADING_COMMENT'

// Action Creators
const getComment = createAction(GET_COMMENT, (postId, commentlist) => ({ postId, commentlist }))
const addComment = createAction(ADD_COMMENT, (postId, comment) => ({ postId, comment }))
const editComment = createAction(EDIT_COMMENT, (postId, commentId, newComment) => ({ postId, commentId, newComment }))
const deleteComment = createAction(DELETE_COMMENT, (postId, commentId) => ({ postId, commentId }))
const loadingComment = createAction(LOADING_COMMENT, (is_loading_comment) => ({ is_loading_comment }))

const initialState = {
  list: {},
  is_loading_comment: false,
}

const initialComment = {
  post: [
    {
      id: 1,
      userId: 2,
      nickname: 'root',
      imgUrl: 'https://hanghaelog.s3.ap-northeast-2.amazonaws.com/original/163898284838428.jpg',
      content: '올라가라',
      likeCnt: 124,
      commentCnt: 12,
      createdAt: '2021-12-09T10:24:20.000Z',
      updatedAt: '2021-12-09T10:26:19.000Z',
    },
  ],
  commentlist: [
    {
      postId: 1,
      id: 1,
      comment: '댓글입니다',
      nickname: 'root',
      createdAt: '2021-12-09T10:28:46.000Z',
      updatedAt: '2021-12-09T10:28:46.000Z',
    },
  ],
}

// Thunk function
const getCommentDB = (postId) => {
  return async function (dispatch, getState, { history }) {
    if (!postId) {
      return
    }
    apis
      .commentList(postId)
      .then((response) => {
        dispatch(getComment(postId, response.data.commentlist))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

const addCommentDB = (postId, comment) => {
  return async function (dispatch, getState, { history }) {
    await apis
      .addComment(postId, comment)
      .then((response) => {
        console.log(response.data.comment)
        dispatch(addComment(postId, response.data.comment))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

const editCommentDB = (newContent, setEditMode) => {
  return async function (dispatch, getState, { history }) {
    const { data } = await apis.editComment(newContent)
    dispatch(editComment(data))
    setEditMode(false)
  }
}

const deleteCommentDB = (postId, commentId) => {
  return async function (dispatch, getState, { history }) {
    await apis
      .deleteComment(postId, commentId)
      .then(() => {
        dispatch(deleteComment(postId, commentId))
      })
      .catch((error) => {
        console.log('댓글 삭제에 문제가 발생했습니다.', error)
      })
      .then(() => {
        window.location.reload()
      })
  }
}

// Reducer
export default handleActions(
  {
    [GET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list[action.payload.postId] = action.payload.commentlist
      }),
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list[action.payload.postId].unshift(action.payload.comment)
      }),
    [EDIT_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list[action.payload.commentId] = action.payload.commentlist
      }),
    [DELETE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list[action.payload.postId].filter((c) => c.id !== action.payload.commentId)
      }),
    [LOADING_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.is_loading_comment = action.payload.is_loading_comment
      }),
  },
  initialState
)

const actionCreators = {
  getCommentDB,
  addCommentDB,
  editCommentDB,
  deleteCommentDB,
  loadingComment,
}

export { actionCreators }
