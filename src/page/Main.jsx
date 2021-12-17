import React from 'react'
import '../css/Main.css'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../components/Footer'
import PostCard from '../components/PostCard'
import { Grid, Image, Text, Spinner } from '../elements'
import Header from '../components/Header'
import { actionCreators as postActions } from '../redux/modules/post'

const Main = () => {
  const dispatch = useDispatch()
  const postList = useSelector((state) => state.post.list)

  React.useEffect(() => {
    if (postList.length === 0) {
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
            {/* <div className="MyFollowing">내가 팔로우 하는 사람</div> */}
            {postList.map((p, idx) => {
              return (
                <Grid key={idx} margin="0px">
                  <PostCard {...p} />
                </Grid>
              )
            })}
            <PostCard></PostCard>
            {/* <PostCard></PostCard>
            <PostCard></PostCard>
            <PostCard></PostCard>
            <PostCard></PostCard> */}
          </div>
        </div>
        <Spinner />
      </div>
    </>
  )
}

export default Main
