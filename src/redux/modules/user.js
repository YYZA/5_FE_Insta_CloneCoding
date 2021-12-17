import produce from "immer";
import { createAction, handleActions } from "redux-actions";
import { getCookie } from "../../shared/Cookie";
import axios from "axios";

const initialState = {
  is_login: false,
  user: [],
  img: [],
};

const SET_USER = "SET_USER";
const PREVIEW = "PREVIEW";

const setUser = createAction(SET_USER, (user) => ({ user }));
const preview = createAction(PREVIEW, (img) => ({ img }));

const previewDB = () => {
  const cookie = getCookie("authCookie");
  return async function (dispatch, getState, { history }) {
    await axios
      .get("http://13.125.149.78/api/me", {
        headers: {
          Authorization: cookie,
        },
      })
      .then((res) => {
        axios
          .get(`http://13.125.149.78/api/userprofile/${res.data.userId}`, {
            headers: {
              Authorization: cookie,
            },
          })
          .then((res) => {
            console.log(res);
            dispatch(preview(res.data.userPosts));
            history.push("/profile");
          });
      });
  };
};

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.is_login = true;
        draft.user = action.payload.user;
      }),
    [PREVIEW]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload);
        draft.img = action.payload;
      }),
  },
  initialState
);

const userActions = {
  setUser,
  preview,
  previewDB,
};
export { userActions };
