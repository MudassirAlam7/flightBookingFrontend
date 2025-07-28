import React from 'react'
import video from "../../assets/video2.mp4"
import areoplane from "../../assets/aeroplane.png"
import "./home.css"
const Home = () => {
  return (
   <div className='home'>
  <div className='maintext'>
    <h1>Create Ever-lasting <br /> Memories with Travilo</h1>
  </div>

  <div className="homeImages">
    <div className="videoDiv">
      <video src={video} autoPlay muted loop className='video'></video>
    </div>
    <img src={areoplane} className='areoplane' />
  </div>
</div>

  )
}

export default Home
