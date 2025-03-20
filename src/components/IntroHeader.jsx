import React from "react";
import { motion } from "framer-motion";

const IntroHeader = ({ h2, top_h1, bottom_h1, bottom_h1_high }) => {
  const variants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <div className="intro-header">
      <motion.h2
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {h2}
      </motion.h2>
      <div className="text">
        <motion.h1
          className="top-h1"
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {top_h1}
        </motion.h1>
        <motion.h1
          className="bottom-h1"
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {bottom_h1} <span>{bottom_h1_high}</span>
        </motion.h1>
      </div>
    </div>
  );
};

export default IntroHeader;
