import { createAction, handleActions } from 'redux-actions'
import { produce } from 'immer'
//modules//
import { apis } from '../../shared/api'

//action types//
const SET_LIKE = 'SET_LIKE'
const ADD_LIKE = 'ADD_LIKE'

//actioncreators
const setLike = createAction(SET_LIKE, (userId) => ({ userId }))
const addLike = createAction(ADD_LIKE, (userId) => ({ userId }))

//initialState//
const initialState = {
  like: [],
}

//middlewares//
const changeLikeDB = (postId, userId) => {
  return async function (dispatch) {
    apis
      .isLike(postId, userId)
      .then((response) => {
        // console.log(response.data)
        let likeData = []
        // response에서 필요한 데이터를 분류하여 like_data에 저장
        for (let i = 0; i < response.data.postlist.length; i++) {
          likeData.push({
            postId: response.data.postlist[i].postId,
            userId: response.data.postlist[i].userId,
            likeCnt: response.data.postlist[i].likeCnt,
          })
        }
        // console.log(like_data)
        // 리덕스 상태 업데이트
        dispatch(setLike(likeData))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

//reducer//
export default handleActions(
  {
    [SET_LIKE]: (state, action) =>
      produce(state, (draft) => {
        draft.like = action.payload.userId
      }),
    [ADD_LIKE]: (state, action) =>
      produce(state, (draft) => {
        draft.like.unshift(action.payload.userId)
      }),
  },

  initialState
)

//actioncreators export
const actionCreators = {
  setLike,
  addLike,
  changeLikeDB,
}

export { actionCreators }
