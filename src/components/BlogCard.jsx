import React from "react";
import profile from "../assets/images/blog-img5.png";
import { FaClock, FaCalendarAlt, FaTable } from "react-icons/fa";

const BlogCard = ({ image, title }) => {
  return (
    <div className="blog-card">
      <img className="banner" src={image} alt="image" />
      <div className="text-group">
        <div className="group-one">
          <p>UI/UX</p>
          <span className="need-span icon">
            <FaClock />3 min read
          </span>
        </div>
        <h3>{title}</h3>
        <div className="group-two">
          <span>
            <img src={profile} alt="profile" />
            <span className="need-span">Alex Carry</span>
          </span>
          <span className="need-span icon">
            <FaCalendarAlt />
            Oct 26, 2024
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
