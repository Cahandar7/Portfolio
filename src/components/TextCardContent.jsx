import React from "react";

const TextCardContent = ({ title, desc }) => {
  return (
    <div className="text-card">
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
};

export default TextCardContent;
