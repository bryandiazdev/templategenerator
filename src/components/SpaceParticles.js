import React, { useRef, useEffect } from 'react';
import { useRafLoop } from 'react-use';

const SpaceParticles = ({ width = window.innerWidth, height = window.innerHeight, numberOfParticles = 100 }) => {
  const canvasRef = useRef(null);

  // Initialize particles
  let particles = [];
  for (let i = 0; i < numberOfParticles; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
    });
  }

  // Update particles position and draw
  const updateAndDraw = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw particles
    particles.forEach(particle => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      // Keep particles within bounds
      if (particle.x < 0 || particle.x > width) particle.speedX *= -1;
      if (particle.y < 0 || particle.y > height) particle.speedY *= -1;

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = '#fff';
      ctx.fill();
    });
  };

  const [, stop] = useRafLoop(updateAndDraw, true);

  useEffect(() => {
    return () => stop();
  }, [stop]);

  useEffect(() => {
    const resizeListener = () => {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return <canvas style={{position: 'fixed', top: '0', left: '0', zIndex: -1}} ref={canvasRef} width={width} height={height} />;
};

export default SpaceParticles;
