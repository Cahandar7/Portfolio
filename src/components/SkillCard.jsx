import React from "react";

const SkillCard = ({ icon, h1_text, p_text }) => {
  return (
    <div className="skill-card">
      <div className="skill-icon">
        <img src={icon} alt="logo" />
      </div>
      <h1>{h1_text}</h1>
      <p>{p_text}</p>
    </div>
  );
};

export default SkillCard;
