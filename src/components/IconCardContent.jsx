import React from "react";

const IconCardContent = ({ icon, title, desc }) => {
  return (
    <div className="icon-card">
      <img src={icon} alt="logo" />
      <div className="texts">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default IconCardContent;
