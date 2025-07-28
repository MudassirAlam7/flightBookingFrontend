import React from 'react'
import "./support.css"
import grid from "../../assets/grid.png"

const Support = () => {
  return (
    <div className='supportContainer'>
      <div className="sectionContainer">



        <div className="tittlesDiv">
          <small>Travel Support</small>
          <h2>Plan Your travel with Confidence</h2>
          <p>Find help with booking and travels plan, see what to expect along the journey!</p>
        </div>
      </div>
      

      <div className="infoDiv">
        <div className="textDiv">
          <div className="singleInfo">
            <span className='number'>01</span>
            <h4>Travel requiremnt for Dubai</h4>
            <p>Find help with booking and travels plan, see what to expect along the journey to your favourite Destination</p>
          </div>

          <div className="singleInfo">
            <span className='number' style={{background : "#f9a748"}}>02</span>
            <h4>Chauffeur services at your arrival</h4>
            <p>Find help with booking and travels plan, see what to expect along the journey to your favourite Destination</p>
          </div>


          <div className="singleInfo">
            <span className='number' style={{background : "#ebbd88e0"}}>03</span>
            <h4>Multi-risk travel insurance</h4>
            <p>Find help with booking and travels plan, see what to expect along the journey to your favourite Destination</p>
          </div>
        </div>
        <div className="imgDiv">
            <img src= {grid} alt="" />
        </div>
      </div>


    </div>
  )
}

export default Support
