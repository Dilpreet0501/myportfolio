import React, { useState } from 'react';
import './Cursor.scss';

const FireCursorAnimation = () => {
  const [trails, setTrails] = useState([]);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const trail = {
      x: clientX,
      y: clientY,
      id: Date.now()
    };
    setTrails(prevTrails => [...prevTrails, trail]);
  };

  const handleTrailEnd = (id) => {
    setTrails(prevTrails => prevTrails.filter(trail => trail.id !== id));
  };

  return (
    <div className="fire-cursor-animation" onMouseMove={handleMouseMove}>
      {trails.map(trail => (
        <div
          key={trail.id}
          className="fire-cursor-trail"
          style={{ left: trail.x, top: trail.y }}
          onAnimationEnd={() => handleTrailEnd(trail.id)}
        />
      ))}
    </div>
  );
};

export default FireCursorAnimation;

