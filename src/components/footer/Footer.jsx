import React from "react";
import logo from "../../assets/logo.png";
import { TiSocialFacebook } from "react-icons/ti";
import { RiTwitterXLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerSection logoSection">
        <div className="logoDiv">
          <h1>Travil</h1>
          <img src={logo} alt="logo" className="logo" />
          
        </div>
        <p>Your mind should be stronger than your feelings, Fly!</p>
        <div className="socialIcon">
          <TiSocialFacebook className="icon" />
          <RiTwitterXLine className="icon" />
          <FaYoutube className="icon" />
          <FaPinterest className="icon" />
        </div>
      </div>

      <div className="footerSection">
        <span className="linkTitle">Information</span>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Explore</a></li>
          <li><a href="#">Flight Status</a></li>
          <li><a href="#">Travel</a></li>
          <li><a href="#">Check-In</a></li>
          <li><a href="#">Manage your booking</a></li>
        </ul>
      </div>

      <div className="footerSection">
        <span className="linkTitle">Quick Guide</span>
        <ul>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">How to</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Baggage</a></li>
          <li><a href="#">Route Map</a></li>
          <li><a href="#">Our Communities</a></li>
        </ul>
      </div>

      <div className="footerSection">
        <span className="linkTitle">Services</span>
        <ul>
          <li><a href="#">Chauffeur</a></li>
          <li><a href="#">Our partners</a></li>
          <li><a href="#">Destination</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Transportation</a></li>
          <li><a href="#">Rules</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
