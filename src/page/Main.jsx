import React from 'react'
import '../css/Main.css'
import Modal from 'react-modal'
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

const Main = () => {
  return (
    <>
      <div className="Background">
        <div className="MainLayout">
          <div className="MainHeader">
            <div className="HeaderSection">
              {/* <div className="InstagramLogo">Instagram</div> */}
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
