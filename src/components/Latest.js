import React from "react";
import "../styles/latest.css";
import latest1 from "../assets/image_02-5 1.png";
import latest2 from "../assets/image_02-5 1 (1).png";
import latest3 from "../assets/image_02-5 1 (2).png";
import latest4 from "../assets/image_02-5 1 (3).png";
import follow from "../assets/Vector.png";

const Latest = () => {
  return (
    <>
      <div className="container latest-container">
        <div className="container primary-heading"><h2>LATEST NEWS</h2></div>
        <div className="conatiner latest-card-container">
          <div className="container latest-card1">
            <img src={latest1} alt="" />
            <h5>Praesent justo mauris, tincidunt vitae nisi ultricies.</h5>
            <p>
              Aenean sed velit nulla. Etiam viverra scelerisque porta. Quisque
              ut dolor aliquam, gravida lacus.
            </p>
            <h6>
              Read More &nbsp;&nbsp; <img src={follow} alt="" />
            </h6>
          </div>
          <div className="container latest-card2">
            <img src={latest2} alt="" />
            <h5>Praesent justo mauris, tincidunt vitae nisi ultricies.</h5>
            <p>
              Aenean sed velit nulla. Etiam viverra scelerisque porta. Quisque
              ut dolor aliquam, gravida lacus.
            </p>
            <h6>
              Read More &nbsp;&nbsp; <img src={follow} alt="" />
            </h6>
          </div>
          <div className="container latest-card3">
            <img src={latest3} alt="" />
            <h5>Praesent justo mauris, tincidunt vitae nisi ultricies.</h5>
            <p>
              Aenean sed velit nulla. Etiam viverra scelerisque porta. Quisque
              ut dolor aliquam, gravida lacus.
            </p>
            <h6>
              Read More &nbsp;&nbsp; <img src={follow} alt="" />
            </h6>
          </div>
          <div className="container latest-card4">
            <img src={latest4} alt="" />
            <h5>Praesent justo mauris, tincidunt vitae nisi ultricies.</h5>
            <p>
              Aenean sed velit nulla. Etiam viverra scelerisque porta. Quisque
              ut dolor aliquam, gravida lacus.
            </p>
            <h6>
              Read More &nbsp;&nbsp; <img src={follow} alt="" />
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Latest;
