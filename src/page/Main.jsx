import React from 'react'
import '../css/Main.css'
import Footer from '../components/Footer'
import PostCard from '../components/PostCard'
import { Grid, Image, Text } from '../elements'

const Main = () => {
  return (
    <>
      <div className="background">
        <div className="container">
          <PostCard></PostCard>
        </div>
        <Grid>
          <Footer></Footer>
        </Grid>
        <Grid>
          <Image src="https://www.hidomin.com/news/photo/202105/453232_224470_4025.jpg" />
        </Grid>
      </div>
    </>
  )
}

export default Main
