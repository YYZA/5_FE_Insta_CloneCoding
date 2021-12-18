import React from 'react'
import { history } from '../redux/configureStore'
import { useDispatch, useSelector } from 'react-redux'
import '../css/UserNameTag.css'
import BasicProfile from '../shared/icon/originalLogo.png'
import { Grid, Image, Text } from '../elements'

const UserNameTag = (props) => {
  const nickname = useSelector((state) => state.postlist.nickname)
  const postlist = props

  return (
    <>
      <Grid is_flex width="auto" _onClick={() => history.push('/profile')} cursor="pointer">
        <Image size="45" src={BasicProfile} />
        <Text fontWeight="bold">{nickname}</Text>
      </Grid>
    </>
  )
}

export default UserNameTag
