import React from "react";
import "./About.css";
import Desc from "./desc/Desc";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="main">
          <div className="wrapper">
            <div className="face" title="pic1"></div>
            <div className="face" title="pic2"></div>
            <div className="face" title="pic3"></div>
            <div className="face" title="pic4"></div>
            <div className="face" title="pic5"></div>
            <div className="face" title="pic6"></div>
          </div>
          <Desc />
        </div>
      </div>
    </>
  );
};

export default About;
