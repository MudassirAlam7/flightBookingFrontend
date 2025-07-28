import React, { useEffect, useRef, useState } from 'react';
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { CgMenuGridO } from "react-icons/cg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useRef()

  useEffect(()=>{
    const handleScroll = ()=>{
        if(ref.current){
          if(window.scrollY>=80){
            ref.current.classList.add('nav-grey')
          }else{
            ref.current.classList.remove('nav-grey')
          }
        }
    }

    window.addEventListener('scroll', handleScroll)
    return ()=>window.addEventListener('scroll', handleScroll)
  }, [])

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div ref={ref} className='navbar'>
      <div className="logoDiv">
        <h1>Travil</h1>
        <img src={logo} alt="logo" className='logo' />
        <div className='logoText'>
        <span>Time to travel</span>
        </div>
      </div>

      <div className={`navbarMenu ${isMenuOpen ? 'showMenu' : ''}`}>
        <li className="listitem">Home</li>
        <li className="listitem">My Flight</li>
        <li className="listitem">About</li>
        <li className="listitem">Feedback</li>
        <button className='btns'>LogOut</button>
      </div>

      <div className="toggleIcon" onClick={handleToggle}>
        <CgMenuGridO />
      </div>
    </div>
  );
};

export default Navbar;
