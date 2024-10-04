import React, { useEffect, useState } from "react";

const Stars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const starCount = 200; 
    const starArray = [];

    for (let i = 0; i < starCount; i++) {
      const size = Math.random() * 5 + 1; 
      const x = Math.random() * 100; 
      const y = Math.random() * 100; 
      const delay = Math.random() * 15; 

      starArray.push({
        size: `${size}px`,
        x: `${x}%`,
        y: `${y}%`,
        delay: `-${delay}s`,
      });
    }

    setStars(starArray);
  }, []);

  return (
    <div className="star-container absolute left-0 top-0 w-full h-full pointer-events-none overflow-hidden">
      {stars.map((star, index) => (
        <div
          key={index}
          className="star rounded-full bg-white absolute animate-pulse"
          style={{
            width: star.size,
            height: star.size,
            top: star.y,
            left: star.x,
            animationDelay: star.delay,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Stars;
