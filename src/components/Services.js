import React from "react";
import "../styles/services.css";
import img1 from "../assets/Group.png";
import img2 from "../assets/Group (1).png";
import img3 from "../assets/Group 88.png";

const Services = () => {
  return (
    <>
      <div className="container services-container">
        <div className="container card1">
          <h3>
            Online <br /> <span> Emergency </span>
          </h3>
          <p>
            Mauris nunc felis, congue eu convallis in, bibendum vitae nisl. Duis
            vestibulum eget orci maximus pretium.
          </p>
          <img src={img1} alt="" />
        </div>
        <div className="container card2">
          <h3>Medication <br /> <span> Service </span></h3>
          <p>
            Mauris nunc felis, congue eu convallis in, bibendum vitae nisl. Duis
            vestibulum eget orci maximus pretium.
          </p>
          <img src={img2} alt="" />
        </div>
        <div className="container card3">
          <h3>24hr Health <br /> <span> Program </span></h3>
          <p>
            Mauris nunc felis, congue eu convallis in, bibendum vitae nisl. Duis
            vestibulum eget orci maximus pretium.
          </p>
          <img src={img3} alt="" />
        </div>
      </div>
    </>
  );
};

export default Services;
