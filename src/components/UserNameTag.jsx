import React from 'react'
import { Grid, Image, Text } from '../elements'

const UserNameTag = () => {
  return (
    <>
      <div className="NameTagButton">
        <Grid is_flex width="auto">
          <Image size="45" src="https://e7.pngegg.com/pngimages/914/758/png-clipart-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper.png" />
          <Text fontWeight="bold">dlwlrma</Text>
        </Grid>
      </div>
    </>
  )
}

export default UserNameTag
