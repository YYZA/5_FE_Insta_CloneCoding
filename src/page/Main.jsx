import React from 'react'
import '../css/Main.css'
import Modal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux'
import { history } from '../redux/configureStore'
import Footer from '../components/Footer'
import PostCard from '../components/PostCard'
import { Grid, Image, Text } from '../elements'
import HomeIcon from '@mui/icons-material/Home'
import { FiSend } from 'react-icons/fi'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import InstaLogo from '../shared/icon/Instagram_logo.svg'

const Main = () => {
  const dispatch = useDispatch()
  const post_data = useSelector((state) => state.post.list)

  return (
    <>
      <div className="Background">
        <div className="MainLayout">
          <div className="MainHeader">
            <div className="HeaderSection">
              <img className="InstagramLogo" src={InstaLogo} />
              <input placeholder=" 🔍  검색" className="HeaderSearchBar" />
              <HomeIcon className="HistoryMainButton" fontSize="5" onClick={() => history.push('/main')} />
              <FiSend className="HeaderShareButton" fontSize="5" />
              <AddBoxOutlinedIcon className="PostAddButton" fontSize="5" onClick={() => history.push('/postAdd')} />
              <ExploreOutlinedIcon className="CompassButton" fontSize="5" />
              <FavoriteBorderOutlinedIcon className="HeaderLikeButton" fontSize="5" />
              <AccountCircleOutlinedIcon className="UserPageButton" fontSize="5" />
            </div>
          </div>

          <div className="BodyLayout">
            <div className="MainFooterLayout">
              <Footer />
            </div>
            <div className="MainPostLayout">
              {/* <div className="MyFollowing">내가 팔로우 하는 사람</div> */}
              {post_data.map((p, idx) => {
                return (
                  <Grid key={idx} margin="0px">
                    <PostCard {...p} />
                  </Grid>
                )
              })}
              <PostCard></PostCard>
              <PostCard></PostCard>
              <PostCard></PostCard>
              <PostCard></PostCard>
              <PostCard></PostCard>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
