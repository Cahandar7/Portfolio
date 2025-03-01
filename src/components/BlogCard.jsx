import React from "react";
import profile from "../assets/images/portfolio_img.jpeg";
import { FaClock, FaCalendarAlt, FaTable } from "react-icons/fa";

const BlogCard = ({ image, title }) => {
  return (
    <div className="blog-card">
      <img className="banner" src={image} alt="image" />
      <div className="text-group">
        <div className="group-one">
          <p>Frontend Development</p>
          <span className="need-span icon">
            <FaClock />3 min read
          </span>
        </div>
        <h3>{title}</h3>
        <div className="group-two">
          <span>
            <img src={profile} alt="profile" />
            <span className="need-span">Cahandar M.</span>
          </span>
          <span className="need-span icon">
            <FaCalendarAlt />
            April 26, 2025
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
