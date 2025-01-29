import React from "react";
import logo from "../assets/images/header_logo.png";
import { FaEnvelope } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="left">
        <img src={logo} alt="logo" />
      </div>
      <div className="right">
        <button className="translate">translate</button>
        <button className="dark-light-switcher">dark-light</button>
        <span className="vertical-line"></span>
        <a href="#" className="hire-btn">
          HIRE ME <FaEnvelope />
        </a>
      </div>
    </header>
  );
};

export default Header;
