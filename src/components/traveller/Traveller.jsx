import React from 'react'
import "./traveler.css"
import paris from "../../assets/paris.jpg"
import dubai from "../../assets/dubai.jpg"
import newYork from "../../assets/newyork.jpg"
import turkey from "../../assets/turkey.jpg"

const Traveller = () => {
  return (
    <div className='Container'>
      <div className="sectionContainer">
        <h2>Top travelers of this month!</h2>

        <div className="travelerContainer">
          <div className="singletraveler">
              <img src={paris} alt="" />
              <div className="travelDetail">
                <span>@shellyia || @shadinn</span> 
              </div>
          </div>
        </div>


        <div className="travelerContainer">
          <div className="singletraveler">
              <img src={dubai} alt="" />
              <div className="travelDetail">
                <span>@ishaiya</span> 
              </div>
          </div>
        </div>


        <div className="travelerContainer">
          <div className="singletraveler">
              <img src={newYork} alt="" />
              <div className="travelDetail">
                <span>@Omarlopezz</span> 
              </div>
          </div>
        </div>



        <div className="travelerContainer">
          <div className="singletraveler">
              <img src={turkey} alt="" />
              <div className="travelDetail">
                <span>@TarikKhareman98</span> 
              </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Traveller
