import React from 'react'
import '../css/Footer.css'
import { Grid, Image, Text } from '../elements'
import FaceIcon from '@mui/icons-material/Face'
import GitHubIcon from '@mui/icons-material/GitHub'
import UserNameTag from './UserNameTag'
import BasicProfile from '../shared/icon/originalLogo.png'

const Footer = () => {
  const members = [
    {
      src: 'https://kimkong2.s3.ap-northeast-2.amazonaws.com/avatar-dQCYs4n7O99ksXuBIe33-7i6cgyRhMHo2yv48rq19-yFpcQh7UcvdChVN8WvIW-iDeY4KaGvVDVSxCv46Bg-gOLxmc6a6kx5l0AM6k1f-qU1toWj69nUqJJ6wJjRx.png',
      nickname: 'Jun',
      blog: 'https://www.linkedin.com/in/seungjunkim0906/',
      github: 'https://github.com/Seungjun0906',
    },
    {
      src: 'https://kimkong2.s3.ap-northeast-2.amazonaws.com/avatar-sFQorI7AcjL4R4gtgerp-trLwpPTwirxVyPPaijwz.png',
      nickname: 'StreetJae1',
      blog: 'https://velog.io/@kiljw316',
      github: 'https://github.com/kiljw316',
    },
    {
      src: 'https://kimkong2.s3.ap-northeast-2.amazonaws.com/avatar-Qg3LanCVBxmnw9mLCfDC-8hCSfYIK6RvpToNgMJNB-TChgCSU6xSHuNmR2PI7H-yFpcQh7UcvdChVN8WvIW-h7sHVeDMuiqz5RrUBjQS-pWUQMKm2XzZjirTcVib7-TniAAPqhvIe0Zu0INEAl-eAEJrpPbgFVpm4tIqUdp.png',
      nickname: 'mincho',
      blog: 'https://luce-sicut-stella.tistory.com/',
      github: 'https://github.com/mintsid',
    },
    {
      src: 'https://kimkong2.s3.ap-northeast-2.amazonaws.com/avatar-8hCSfYIK6RvpToNgMJNB-Gexsm2gfIWciOSX1CLFB-yFpcQh7UcvdChVN8WvIW-xvQ1RrDVAEmBqo3T79RY-3Gg4mhaXMTgvjYYAfDpi-MHNdhjFVLOGVF3pTfLqP.png',
      nickname: '213am',
      blog: 'https://velog.io/@undriedspring',
      github: 'https://github.com/undriedspring',
    },
    {
      src: 'https://kimkong2.s3.ap-northeast-2.amazonaws.com/avatar-C0ykfrlDx7AkQsLyLcNS-EDEmBTn7nj52wSnvBAmp-bjYIM3RJKVm2mwEI3BrQ-uHozYGHbW35roEHKzF98-WaMM8u1pW2GyKfBCGCZp-CgjGnJ2FTTfWiE3tf7Uj-WW1GTt4cFIfI7aG4zd1o-7EyjSDVlNscTAlYLSHV1.png',
      nickname: 'jann_2',
      blog: 'https://jann2codingdiary.tistory.com/manage/posts/',
      github: 'https://github.com/jawoon816',
    },
    {
      src: 'https://kimkong2.s3.ap-northeast-2.amazonaws.com/avatar-KqTqvfFl86GbTsCRv5AY-PRoVp9KM6WZwvLkGEO8V-I7vkRzijl8vBGm5LRwQT-cCWIF8nGqKTfCCY0iXWl-py34w1ylAbJPYocLYKkq-IXv6QOFQKcNdxBtiXAXI-0hw2J9tExTUUG8aNnNvz-4YbAAJpkVityygIfsOkk.png',
      nickname: 'zubetcha',
      blog: 'https://zubetcha.tistory.com/',
      github: 'https://github.com/zubetcha',
    },
  ]

  return (
    <>
      <div className="FooterLayout">
        <Grid is_flex>
          <div className="MyNameTag">
            <Grid is_flex border="1px solid green" width="200px">
              <Image src={BasicProfile} shape="circle" size="55"></Image>
              <div className="MyAccountInfo">
                <text className="MyAccountNickname">123456789012345</text>
                <text className="MyName">이한샘</text>
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
                <Text color="#333" size="14px" margin="0">
                  {member.nickname}
                </Text>
              </div>
              <div className="FollowButton">팔로우</div>
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
