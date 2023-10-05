import React, { useState, useEffect } from "react";
import "../styles/navbar.css";
import Logo from "../assets/Group 98.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 20) {
      // If the user has scrolled more than 20 pixels, add the 'scrolled' class
      setScrolled(true);
    } else {
      // If the user has not scrolled or scrolled back to the top, remove the 'scrolled' class
      setScrolled(false);
    }
  };

  // Add a scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav">
        <div className="nav-logo">
          <img src={Logo} alt="" />
        </div>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>DOCTOR</li>
            <li>PAGES</li>
            <li>SERVICE</li>
            <li>BLOG</li>
            <li>SHOP</li>
          </ul>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
        <button className="get-btn">Get Appointment</button>
      </div>
    </div>
  );
};

export default Navbar;
