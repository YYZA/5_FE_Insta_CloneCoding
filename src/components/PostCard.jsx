import React from 'react'
import '../css/PostCard.css'
import UserNameTag from './UserNameTag'
import { Grid, Image, Text } from '../elements'

const PostCard = () => {
  return (
    <>
      <Grid is_flex>
        <UserNameTag></UserNameTag>
      </Grid>
    </>
  )
}

export default PostCard
