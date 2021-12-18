import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PostCard from './PostCard'

const PostList = (props) => {
  const postList = useSelector((state) => state.postlist.list)

  console.log(postList)

  return (
    <>
      {postList.map((postList, idx) => {
        return <PostCard key={postList._id} {...postList} />
      })}
    </>
  )
}

export default PostList
