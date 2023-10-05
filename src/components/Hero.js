import React from "react";
import "../styles/hero.css";
import banner from "../assets/3658474.png";

const Hero = () => {
  return (
    <>
      <div className="container hero-container">
        <div className="container hero-left">
          <h1>
            Get Better Care For<span>-</span>Your Health<span>.</span>
          </h1>
          <p>
            Quisque leo augue, lobortis ac tellus nec, posuere ultricies nulla.
            Praesent massa odio,{" "}
          </p>
          <button>Learn More</button>
        </div>
        <div className="container hero-right">
          <img src={banner} alt="" />
        </div>
      </div>
      <div className="container hero-bottom-container">
        <div className="bottom-left">
          <p>
            Lorem ipsum dolor sit amet, <br />{" "}
            <wrap> consectetuer adipiscing elit, sed </wrap>{" "}
          </p>
          <button className="btn-appoint">MAKE AN APPOINTMENT</button>
        </div>
        <div className="bottom-right">
          <h3> <i class="fa-solid fa-phone" style={{ color: 'blue' }}></i> Emergency Call <br /> <wrap1> +8 12 3456897</wrap1></h3>
        </div>
      </div>
    </>
  );
};

export default Hero;
