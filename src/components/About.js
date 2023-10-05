import React from "react";
import "../styles/about.css";
import arrow from "../assets/Group 93.png"
import about_banner from "../assets/sxdc 1.png";

const About = () => {
  return (
    <div className="about">
      <div className="container about-container">
        <div className="container about-left">
          <img src={about_banner} alt="" />
        </div>
        <div className="container about-right">
          <h3>
            About Our <span> Hospital </span> <br />
          </h3>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.{" "}
          </p>
          <h5><img src={arrow} alt="" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Browse Our Website</h5>
          <h5><img src={arrow} alt="" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Choose Service</h5>
          <h5><img src={arrow} alt="" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Send Messege</h5>
          <br />
          <button>Know More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
