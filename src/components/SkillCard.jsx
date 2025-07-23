import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ icon, h1_text, p_text }) => {
  return (
    <motion.div
      className="skill-card"
      id={p_text}
      initial={{ opacity: 0, scale: 1.1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
    >
      <div className="skill-icon">
        <img src={icon} alt="logo" style={{ width: "85px" }} />
      </div>
      <p>{p_text}</p>
    </motion.div>
  );
};

export default SkillCard;
