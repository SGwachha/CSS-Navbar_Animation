import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./about/About";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default Router;
