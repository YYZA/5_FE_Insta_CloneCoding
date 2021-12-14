import React from 'react'
import '../css/UserNameTag.css'
import styled from 'styled-components'
import { Grid, Image, Text } from '../elements'

const UserNameTag = (props) => {
  const { _onClick, hover } = props

  return (
    <>
      <UserNameTagButton onClick={_onClick}>
        <Grid is_flex width="auto">
          <Image size="45" src="https://e7.pngegg.com/pngimages/914/758/png-clipart-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper.png" />
          <Text fontWeight="bold">dlwlrma</Text>
        </Grid>
      </UserNameTagButton>
    </>
  )
}

UserNameTag.defaultProps = {
  _onClick: () => {},
}

const UserNameTagButton = styled.button`
  border: none;
  background: none;
  width: auto;
  &:hover {
    cursor: pointer;
  }
`

export default UserNameTag
