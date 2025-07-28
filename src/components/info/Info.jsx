import React from 'react'
import { RxCalendar } from "react-icons/rx";
import { BsShieldCheck } from "react-icons/bs";
import { BsBookmarkCheck } from "react-icons/bs";
import "./info.css"
const Info = () => {
  return (
    <div className='infoContainer'>
        <div className="infoSection">
            <div className="titleDiv" style={{display : "flex"}}>
                <h2>Travel to make memories all around the world</h2>
            </div>

            <div className="cardsDiv">
                <div className="singleCard">
                    <div className="iconDiv">
                       <RxCalendar />
                    </div>
                    <span className='cardTitle'>Book & Relax</span>
                    <p>You can call airlines from your phone and book a flight tickets!</p>
                </div>
                 <div className="singleCard">
                    <div className="iconDiv">
                      <BsShieldCheck />
                    </div>
                    <span className='cardTitle'>Smart Checklist</span>
                    <p>You can call airlines from your phone and book a flight tickets!</p>
                </div>
                 <div className="singleCard">
                    <div className="iconDiv">
                      <BsBookmarkCheck />
                    </div>
                    <span className='cardTitle'>Save More</span>
                    <p>You can call airlines from your phone and book a flight tickets!</p>
                </div>
            </div>
            <div className="btnWrapper">
            <button className='btn'>View All</button>

            </div>
        </div>
      
    </div>
  )
}

export default Info
