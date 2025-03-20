import React from "react";
import { FaEnvelope } from "react-icons/fa";
import SideBar from "./SideBar";
import { GiHamburgerMenu } from "react-icons/gi";
import toggle_btn_sound from "../assets/audios/toggle_btn.mp3";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
    >
      <div className="header-wrapper">
        <h1>Welcome to My Portfolio</h1>
        <div className="right">
          <a href="#contact-us-sec" className="hire-btn">
            <span>HIRE ME</span> <FaEnvelope />
          </a>
          <div className="sidebar-toggle-btn">
            <button
              className="btn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBothOptions"
              aria-controls="offcanvasWithBothOptions"
              onClick={() => {
                const toggle_btn_audio = new Audio(toggle_btn_sound);
                toggle_btn_audio.volume = 0.1;
                toggle_btn_audio.play();
              }}
            >
              <GiHamburgerMenu />
            </button>
            <div
              className="offcanvas offcanvas-start"
              data-bs-scroll="true"
              tabIndex={-1}
              id="offcanvasWithBothOptions"
              aria-labelledby="offcanvasWithBothOptionsLabel"
            >
              <div className="offcanvas-body">
                <SideBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
