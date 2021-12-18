import axios from 'axios'
import { getCookie, deleteCookie } from './Cookie'

const cookie = getCookie('authCookie')

const api = axios.create({
  baseURL: 'http://13.125.149.78',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'content-type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    accept: 'application/json',
    Authorization: cookie,
  },
  // withCredentials: true,
})

// api.interceptors.request.use((config) => {
//   const accessToken = document.cookie.split('=')[1]
//   'Authorization'= `Bearer ${accessToken}`
//   return config
// })

export const apis = {
  addPost: (post) => api.post('/api/postlist', post),
  editPost: (postId, newPost) => api.put(`/api/postlist/${postId}`, newPost),
  deletePost: (postId) => api.delete(`/api/postlist/${postId}`),
  postList: () => api.get('/api/postlist'),

  isLike: (postId, userId) => api.patch(`/api/like/postlist/${postId}`, userId),

  addComment: (postId, comment) => api.post(`/api/postlist/${postId}/commentlist`, comment),
  editComment: (commentId, postId, newComment) => api.put(`/api/postlist/${postId}/commentlist/${commentId}`, newComment),
  deleteComment: (postId, commentId) => api.delete(`/api/postlist/${postId}/commentlist/${commentId}`),
  commentList: (postId) => api.get(`/api/postlist/${postId}/commentlist`),

  // login: (userId, password) => api.post('/api/userlist/login', { userId: userId.userId, password: userId.password }),
  // register: (userId, nickname, password, passwordCheck) => api.post('/api/userlist/register', { userId: userId, nickname: nickname, password: password, passwordCheck: passwordCheck }),
  // userprofile: (userId) => api.get(`/api/userprofile/${userId}`),
  // isMe: () => api.get('/api/me'),
}
