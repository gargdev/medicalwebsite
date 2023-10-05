import React from "react";
import "../styles/department.css";
import Line from "../assets/Line 45.png";
import departmentimg from "../assets/undraw_medicine_b1ol 1.png";

const Departments = () => {
  return (
    <div className="department-parent">
      <div className="container department-container">
        <div className="department-left">
          <h3>
            MEDICAL DEPARTMENTS
            <br />
            <secondary-heading>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img src={Line} alt="" /> The Backbone of our Clinic
            </secondary-heading>
          </h3>
          <h5>
            MODERN EQUIPMENT <img src={Line} alt="" />
            <br />
            <primarytitle>
              Personalized patient care is what sets Medicus Medical Center
              apart. When you visit one of our four San Francisco campus
              locations you can expect to receive world class care. Expert
              physician specialists and caring clinical staff provide you with
              an exceptional patient care is what sets Medicus Medical Center
              apart health care experience.
            </primarytitle>
          </h5>
          <div className="btn-container">
            <button className="dept1">SURGERY</button>
            <button className="dept2">MICROBIOLOGY</button>
            <button className="dept3">PATHOLOGY</button>
          </div>
          <button className="checkbtn">CHECKOUT ALL DEPARTMENTS</button>
        </div>
        <div className="container department-right">
          <img src={departmentimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Departments;
