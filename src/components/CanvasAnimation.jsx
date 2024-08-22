import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CanvasAnimation = () => {
  const canvasRef = useRef(null);
  const images = useRef([]);
  const frameCount = 220;
  const ball = useRef({ frame: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const currentFrame = (index) => `/drogue/${(index + 1).toString().padStart(4, '0')}.webp`;

    // Load all images into the images array
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.current[i] = img;
    }

    const render = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images.current[ball.current.frame], 0, 0, canvas.width, canvas.height);
    };

    images.current[0].onload = render;

    gsap.to(ball.current, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        scrub: 0.5,
        pin: canvas,
        end: "500%",
      },
      onUpdate: render,
    });

    gsap.fromTo(
      ".headline",
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          scrub: 1,
          start: "60%",
          end: "80%",
        },
      }
    );

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); 
    };
  }, []);

  return (
    <div>
    
      <canvas ref={canvasRef} className="canvas"></canvas>
    </div>
  );
};

export default CanvasAnimation;
