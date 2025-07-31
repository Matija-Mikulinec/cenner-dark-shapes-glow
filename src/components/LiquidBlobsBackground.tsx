import React, { useEffect, useRef } from 'react';

interface Blob {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  opacity: number;
}

const LiquidBlobsBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const blobsRef = useRef<Blob[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initBlobs = () => {
      blobsRef.current = Array.from({ length: 6 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 300 + 150,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.3 + 0.1,
      }));
    };

    const drawBlobs = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (const blob of blobsRef.current) {
        const gradient = ctx.createRadialGradient(
          blob.x, blob.y, 0,
          blob.x, blob.y, blob.size
        );
        
        gradient.addColorStop(0, `hsla(220, 30%, 85%, ${blob.opacity})`);
        gradient.addColorStop(0.5, `hsla(220, 40%, 92%, ${blob.opacity * 0.7})`);
        gradient.addColorStop(1, `hsla(220, 20%, 70%, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.filter = 'blur(40px)';
        
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.size, 0, Math.PI * 2);
        ctx.fill();
      }
      
      ctx.filter = 'none';
    };

    const updateBlobs = () => {
      for (const blob of blobsRef.current) {
        blob.x += blob.vx;
        blob.y += blob.vy;

        if (blob.x < -blob.size || blob.x > canvas.width + blob.size) blob.vx *= -1;
        if (blob.y < -blob.size || blob.y > canvas.height + blob.size) blob.vy *= -1;
        
        blob.opacity += (Math.random() - 0.5) * 0.005;
        blob.opacity = Math.max(0.05, Math.min(0.4, blob.opacity));
      }
    };

    const animate = () => {
      drawBlobs();
      updateBlobs();
      animationRef.current = requestAnimationFrame(animate);
    };

    setCanvasSize();
    initBlobs();
    animate();

    const handleResize = () => {
      setCanvasSize();
      initBlobs();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-60" 
    />
  );
};

export default LiquidBlobsBackground;