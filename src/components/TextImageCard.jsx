import React from "react";
import { motion } from "framer-motion";

const TextImageCard = ({ title, desc, date, image }) => {
  return (
    <motion.div
      className="text-image-card"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <h1>{title}</h1>
      <p>{desc}</p>
      <p>{date}</p>
      <img src={image} alt={title} />
    </motion.div>
  );
};

export default TextImageCard;
