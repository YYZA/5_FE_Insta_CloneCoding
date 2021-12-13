import React from 'react'
import '../css/Main.css'
import Footer from '../components/Footer'
import PostCard from '../components/PostCard'
import { Grid, Image, Text } from '../elements'

const Main = () => {
  return (
    <>
      <div className="background">
        <div className>
          <div className="container">
            <PostCard></PostCard>
          </div>
          <Grid>
            <Footer></Footer>
          </Grid>
        </div>
      </div>
    </>
  )
}

export default Main
