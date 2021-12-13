import axios from 'axios'

export const login = async () => {
  const response = await axios.get('http://localhost:8080/LOGIN')
}

export const register = async () => {
  const response = await axios.get('http://localhost:8080/REGISTER')
}

export const commentWrite = async () => {
  const response = await axios.get('http://localhost:8080/COMMENTWRITE')
}

export const commentEdit = async () => {
  const response = await axios.get('http://localhost:8080/COMMENTEDIT')
}

export const comments = async () => {
  const response = await axios.get('http://localhost:8080/COMMENTS')
}

export const posts = async () => {
  const response = await axios.get('http://localhost:8080/POSTS')
}
