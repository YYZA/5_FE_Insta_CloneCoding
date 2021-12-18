import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'

const UPLOAD = 'image/UPLOAD'
const PREVIEW = 'image/PREVIEW'

const uploadImage = createAction(UPLOAD, (imgUrl) => ({ imgUrl }))
const setPreview = createAction(PREVIEW, (preview) => ({ preview }))

const initialState = {
  imgUrl: null,
  preview: null,
}

export default handleActions(
  {
    [UPLOAD]: (state, action) =>
      produce(state, (draft) => {
        draft.imgUrl = action.payload.imgUrl
      }),
    [PREVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.preview = action.payload.preview
      }),
  },
  initialState
)

const actionCreators = {
  uploadImage,
  setPreview,
}

export { actionCreators }
