import React from 'react'
import styled from 'styled-components'
import '../css/Header.css'
import { useSelector } from 'react-redux'
import { getCookie } from '../shared/Cookie'
import { history } from '../redux/configureStore'
import $ from 'jquery'
import HomeIcon from '@mui/icons-material/Home'
import { FiSend } from 'react-icons/fi'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import InstaLogo from '../shared/icon/Instagram_logo.svg'

const Header = (props) => {
  function wrapWindowLayerMask() {
    //화면의 높이와 너비를 구한다.
    var maskHeight = $(document).height()
    var maskWidth = $(window).width()

    //마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채운다.
    $('#WindowLayerMask').css({ width: maskWidth, height: maskHeight })

    //애니메이션 효과 - 일단 1초동안 까맣게 됐다가 80% 불투명도로 간다.
    $('#WindowLayerMask').fadeIn(1000)
    $('#WindowLayerMask').fadeTo('slow', 0.8)

    //윈도우 같은 거 띄운다.
    $('.window').show()
  }

  return (
    <>
      <div id="WindowLayerMask" />
      <div className="MainHeader">
        <div className="HeaderSection">
          <img className="InstagramLogo" src={InstaLogo} onClick={() => history.push('/main')} />
          <input placeholder=" 🔍  검색" className="HeaderSearchBar" />
          <HomeIcon className="HistoryMainButton" fontSize="5" onClick={() => history.push('/main')} />
          <FiSend className="HeaderShareButton" fontSize="5" />
          <AddBoxOutlinedIcon className="PostAddButton" fontSize="5" onClick={() => history.push('/main/postAdd')} />
          <ExploreOutlinedIcon className="CompassButton" fontSize="5" />
          <FavoriteBorderOutlinedIcon className="HeaderLikeButton" fontSize="5" />
          <AccountCircleOutlinedIcon className="UserPageButton" fontSize="5" onClick={() => history.push('/profile')} />
        </div>
      </div>
    </>
  )
}

export default Header
