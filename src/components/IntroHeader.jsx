import React from "react";
import sublogo from "../assets/images/sublogo1.svg";

const IntroHeader = ({ h2, top_h1, bottom_h1, bottom_h1_high }) => {
  return (
    <div className="intro-header">
      <div className="logo">
        <span>
          <img src={sublogo} alt="logo" />
        </span>
        <h2>{h2}</h2>
      </div>
      <div className="text">
        <h1 className="top-h1">{top_h1}</h1>
        <h1 className="bottom-h1">
          {bottom_h1} <span>{bottom_h1_high}</span>
        </h1>
      </div>
    </div>
  );
};

export default IntroHeader;
