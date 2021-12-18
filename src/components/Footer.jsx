import React from 'react'
import '../css/Footer.css'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Image, Text } from '../elements'
import FaceIcon from '@mui/icons-material/Face'
import GitHubIcon from '@mui/icons-material/GitHub'
import UserNameTag from './UserNameTag'
import BasicProfile from '../shared/icon/originalLogo.png'

const Footer = (props) => {
  const dispatch = useDispatch()
  const postList = useSelector((state) => state.postlist.list)
  const nickname = postList.nickname
  const userId = postList.userId

  var win = window.open('/') // 새탭에서 열림
  console.log(postList)
  const members = [
    {
      src: 'https://5-instagramclonecoding.s3.ap-northeast-2.amazonaws.com/Samsunged.png',
      nickname: '이건희',
      github: 'https://github.com/IsthisLee',
    },
    {
      src: 'https://5-instagramclonecoding.s3.ap-northeast-2.amazonaws.com/Hyungjin.png',
      nickname: '김형진',
      github: 'https://github.com/KIMHYEONGJIN5925',
    },
    {
      src: 'https://5-instagramclonecoding.s3.ap-northeast-2.amazonaws.com/Dragoncastle.png',
      nickname: '김용성',
      github: 'https://github.com/YYZA',
    },
    {
      src: 'https://5-instagramclonecoding.s3.ap-northeast-2.amazonaws.com/213am.png',
      nickname: '이한샘',
      github: 'https://github.com/undriedspring',
    },
  ]

  return (
    <>
      <div className="FooterLayout">
        <Grid is_flex>
          <div className="MyNameTag">
            <Grid is_flex width="200px">
              <Image src={BasicProfile} shape="circle" size="55"></Image>
              <div className="MyAccountInfo">
                <text className="MyAccountNickname">UserNickname</text>
                <text className="MyName">UserName</text>
              </div>
            </Grid>
            <div className="ChangeAccountSection">
              <div className="ChangeMyAccountButton">전환</div>
            </div>
          </div>
        </Grid>
        <Grid is_flex margin="10px 0 10px 0">
          <div className="FooterGuideText">회원님을 위한 추천</div>
          <div className="FooterGuideButton">모두 보기</div>
        </Grid>
        {members.map((member) => {
          return (
            <div className="FooterContainer">
              <div className="NameTag">
                <Image src={member.src} shape="circle" size="30"></Image>
                <Text color="#333" size="13px" margin="0">
                  {member.nickname}
                </Text>
              </div>
              <div>
                <a className="FollowButton" href={member.github} target="_blank">
                  팔로우
                </a>
              </div>
            </div>
          )
        })}
        <div>
          <Text color="#919191" size="10px" margin="20px 10px 10px 10px">
            소개·도움말·홍보 센터·API·채용 정보·개인정보처리방침·약관·위치·인기 계정·해시태그·언어 <br />
            <br /> © 2021 INSTAGRAM FROM 5조
          </Text>
        </div>
      </div>
    </>
  )
}

export default Footer
