import React from 'react'
import '../css/Main.css'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../components/Footer'
import PostCard from '../components/PostCard'
import PostList from '../components/PostList'
import { Grid, Image, Text, Spinner } from '../elements'
import Header from '../components/Header'
import { actionCreators as postActions } from '../redux/modules/post'

const Main = (props) => {
  const dispatch = useDispatch()
  const postlist = props
  const post_list = useSelector((state) => state.postlist.list)

  const user_id = Number(localStorage.getItem('id'))
  const user_nickname = localStorage.getItem('nickname')

  React.useEffect(() => {
    if (post_list.length === 0) {
      dispatch(postActions.getPostDB())
    }
  }, [])

  return (
    <>
      <div className="Background">
        <Header />
        <div className="BodyLayout">
          <div className="MainFooterLayout">
            <Footer />
          </div>
          <div className="MainPostLayout">
            <PostList />
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
