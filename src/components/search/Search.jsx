import React from 'react'
import { MdFlightTakeoff } from "react-icons/md";
import { RiFlightLandLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { BsFillPersonFill } from "react-icons/bs";
import "./Search.css";

const Search = () => {
  return (
    <div className='searchContainer'>
      <h1 className='searchTitle'>Search Flights</h1>

      <div className="classButtons">
        <button>Economy</button>
        <button>Business Class</button>
        <button>First Class</button>
      </div>

      <div className='searchBar'>
        <form className="searchForm">
          <div className="searchField">
            <MdFlightTakeoff className='icon' />
            <input type="text" placeholder='From' />
          </div>

          <div className="searchField">
            <RiFlightLandLine className='icon' />
            <input type="text" placeholder='To' />
          </div>

          <div className="searchField">
            <SlCalender className='icon' />
            <input type="date" />
          </div>

          <div className="searchField">
            <BsFillPersonFill className='icon' />
            <input type="number" placeholder='Passengers' />
          </div>

          <button type="submit" className="searchBtn">Search Flight</button>
        </form>
      </div>
      <div className="results">
        
      </div>
    </div>
  )
}

export default Search;
