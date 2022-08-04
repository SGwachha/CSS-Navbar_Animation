import React from "react";
import "./Animation.css";

const Animation = () => {
  return (
    <>
      <div className="container">
        <div className="navbar">
          <div className="menu">
            <h3 className="logo">
              Brand<span>Name</span>
            </h3>
            <div className="hambuger-menu">
              <div className="bar"></div>
            </div>
          </div>
        </div>
        <div className="main-container">
          <div className="main">
            <header>
              <div className="overlay">
                <div className="inner">
                  <h2 className="title">Future is here</h2>
                  <p>
                    lorem ipsum dolor sit amet consusjn jubsanf inasn uisanb
                    usnc be asd asdn
                  </p>
                  <a href="#" className="btn">
                    Read More
                  </a>
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>
    </>
  );
};

export default Animation;
