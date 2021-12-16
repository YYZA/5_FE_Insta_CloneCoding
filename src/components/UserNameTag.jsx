import React from 'react'
import { history } from '../redux/configureStore'
import '../css/UserNameTag.css'
import BasicProfile from '../shared/icon/originalLogo.png'
import { Grid, Image, Text } from '../elements'

const UserNameTag = (props) => {
  return (
    <>
      <Grid is_flex width="auto" _onClick={() => history.push('/profile')} cursor="pointer">
        <Image size="45" src={BasicProfile} />
        <Text fontWeight="bold">dlwlrma</Text>
      </Grid>
    </>
  )
}

export default UserNameTag
