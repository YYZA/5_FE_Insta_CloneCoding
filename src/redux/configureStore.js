import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import post from './modules/post'
import user from './modules/user'
import comment from './modules/comment'

export const history = createBrowserHistory()

const persistConfig = {
  key: 'root',
  // localStorage에 저장합니다.
  storage,
  // auth, board, studio 3개의 reducer 중에 auth reducer만 localstorage에 저장합니다.
  whitelist: ['auth'],
  // blacklist -> 그것만 제외합니다
}

const rootReducer = combineReducers({
  postlist: post,
  userlist: user,
  commentlist: comment,
  router: connectRouter(history),
})

const middlewares = [thunk.withExtraArgument({ history })]

const env = process.env.NODE_ENV
if (env === 'development') {
  const { logger } = require('redux-logger')
  middlewares.push(logger)
}

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(applyMiddleware(...middlewares))

let store = (initialState) => createStore(rootReducer, enhancer)

export default store()
