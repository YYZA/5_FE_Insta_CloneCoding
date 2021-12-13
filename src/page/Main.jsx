import React from 'react'
import '../css/Main.css'
import Footer from '../components/Footer'
import PostCard from '../components/PostCard'
import { Grid, Image, Text } from '../elements'

const Main = () => {
  return (
    <>
      <div className="Background">
        {/* <Footer></Footer> */}
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
