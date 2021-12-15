import axios from 'axios'

const api = axios.create({
  baseURL: 'http://13.209.4.79:5000/',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-type': 'application/json',
    charset: 'UTF-8',
    accept: 'application/json',
  },
})

api.interceptors.request.use((config) => {
  const accessToken = document.cookie.split('=')[1]
  config.headers.common['authorization'] = `${accessToken}`
  return config
})

export const apis = {
  addPost: (contents) => api.post('/api/postlist', contents),
  editPost: (postId, newPost) => api.put(`/api/postlist/${postId}`, newPost),
  deletePost: (postId) => api.delete(`/api/postlist/${postId}`),
  postList: () => api.get('/api/postlist'),
  isLike: (postId, boolean) => api.patch(`/api/like/postlist/${postId}`),

  addComment: (postId, comments) => api.post(`/api/postlist/${postId}/commentlist`, comments),
  editComment: (postId, commentId, newComment) => api.put(`/api/postlist/${postId}/commentlist/${commentId}`, newComment),
  deleteComment: (postId, commentId) => api.delete(`/api/postlist/${postId}/commentlist/${commentId}`),
  commentList: (postId) => api.get(`/api/postlist/${postId}/commentlist`),

  // login: (userId, password) => api.post('/api/userlist/login', { userId: userId.userId, password: userId.password }),
  // register: (userId, nickname, password, passwordCheck) => api.post('/api/userlist/register', { userId: userId, nickname: nickname, password: password, passwordCheck: passwordCheck }),
  // users: (userId) => api.get(`/api/userprofile/${userId}`),
  // isMe: () => api.get('/api/me'),
}
