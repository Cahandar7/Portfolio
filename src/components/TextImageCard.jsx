import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TextImageCard = ({ title, desc, date, image }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
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
        <button className="view-image-btn" onClick={() => setOpen(true)}>
          View Certificate
        </button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="image-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(false)}
          >
            <motion.img
              src={image}
              alt={title}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button className="overlay-close" onClick={() => setOpen(false)}>
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TextImageCard;
