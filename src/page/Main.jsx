import React from 'react'
import '../css/Main.css'
import { history } from '../redux/configureStore'
import Footer from '../components/Footer'
import PostCard from '../components/PostCard'
import { Grid, Image, Text } from '../elements'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'

const Main = () => {
  return (
    <>
      <div className="Background">
        {/* <Footer></Footer> */}
        <div className="MainHeader">
          <div className="HeaderSection">
            <div className="InstagramLogo">Instagram</div>
            <input placeholder=" 🔍  검색" className="HeaderSearchBar" />
            <AddBoxOutlinedIcon className="PostAddButton" fontSize="5" onClick={() => history.push('/postAdd')} />
            <div className="HeaderShareButton">
              <Image src="https://o.remove.bg/downloads/0e6a7f30-dd91-4e1d-8f56-79344140db56/insta_icons_2_generated__2_-removebg-preview-removebg-preview.png" size="32" />
            </div>
            <AccountCircleOutlinedIcon className="UserPageButton" fontSize="5" />
          </div>
        </div>
        <div className="Layout">
          <PostCard></PostCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
        </div>
      </div>
    </>
  )
}

export default Main
