import React, { useState } from "react";
import "./Animation.css";

const Animation = () => {

    const hambuger_menu = document.querySelector(".hambuger-menu");
    const container = document.querySelector(".container");

    const handleButton = ("click", () => {
        container.classList.toggle("active");
    })

  return (
    <>
      <div className="container">
        <div className="navbar">
          <div className="menu">
            <h3 className="logo">
              Brand<span>Name</span>
            </h3>
            <div className="hambuger-menu" onClick={handleButton}>
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
      <div>hello</div>
    </>
  );
};

export default Animation;
