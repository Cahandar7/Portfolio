import React, { useState, useEffect } from "react";

const CustomCursor = () => {
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      // Move dot normally with the mouse cursor
      setDotPosition({ x: clientX, y: clientY });

      // Create a delayed movement for the circle
      setCirclePosition((prev) => {
        const newX = prev.x + (clientX - prev.x) * 0.2;
        const newY = prev.y + (clientY - prev.y) * 0.2;
        return { x: newX, y: newY };
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor-container">
      <div
        className="cursor-dot"
        style={{ left: `${dotPosition.x}px`, top: `${dotPosition.y}px` }}
      />
      <div
        className="cursor-circle"
        style={{
          left: `${circlePosition.x - 15}px`,
          top: `${circlePosition.y - 15}px`,
        }}
      />
    </div>
  );
};

export default CustomCursor;
