"use client"
import React, { useEffect, useState } from 'react';


const Flare = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isAboveElement, setIsAboveElement] = useState(false);
  const [targetElement, setTargetElement] = useState(null);

  const handleMouseMove = (e:any) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleMouseEnter = () => {
      setIsAboveElement(true);
      if (targetElement) {
        
        //targetElement.style.boxShadow = "0 3px 10px rgb(0 0 0 / 0.2)"
      }
    };

    const handleMouseLeave = () => {
      setIsAboveElement(false);
      if (targetElement) {
        //targetElement.style.boxShadow = "none"
      }
    };

    const target:any = document.getElementById('target-element'); 
    setTargetElement(target);

    if (target) {
      target.addEventListener('mouseenter', handleMouseEnter);
      target.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (target) {
        target.removeEventListener('mouseenter', handleMouseEnter);
        target.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [targetElement]);

  return (
    <div
      className="filter grayscale-100"
      style={{
        position: 'fixed',
        width: '50rem',
        height: '50rem',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(222, 222, 222, 0.12), rgba(0, 0, 0, 0))',
        backdropFilter: 'blur(0.1px)',
        left: `calc(${position.x}px - 25rem)`,
        top: `calc(${position.y}px - 25rem)`,
        pointerEvents: 'none',
      }}
    ></div>
  );
};

export default Flare;