import React, { useState, useEffect } from "react";

const SkillCard = ({ icon, h1_text, p_text }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const animateNumber = (targetValue) => {
    let currentValue = 0;
    const increment = targetValue / 100;

    const interval = setInterval(() => {
      currentValue += increment;
      if (currentValue >= targetValue) {
        currentValue = targetValue;
        clearInterval(interval);
      }
      setCount(Math.floor(currentValue));
    }, 10);
  };

  const handleIntersection = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting && !hasAnimated) {
      animateNumber(parseInt(h1_text));
      setHasAnimated(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    const element = document.getElementById(p_text);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [h1_text, p_text, hasAnimated]);

  return (
    <div className="skill-card" id={p_text}>
      <div className="skill-icon">
        <img src={icon} alt="logo" style={{ width: "68px" }} />
      </div>
      <h1>{count}%</h1>
      <p>{p_text}</p>
    </div>
  );
};

export default SkillCard;
