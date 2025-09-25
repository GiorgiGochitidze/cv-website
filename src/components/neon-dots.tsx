"use client";

import { useEffect, useRef } from "react";

const NeonDotsBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const dotsRef = useRef<{ x: number; y: number }[]>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const baseRadius = 3;
    const maxRadius = 6;
    const maxDist = 150;
    const spacing = 50;

    const generateDots = () => {
      const cols = Math.max(1, Math.floor(width / spacing));
      const rows = Math.max(1, Math.floor(height / spacing));
      const spacingX = width / cols;
      const spacingY = height / rows;

      const dots: { x: number; y: number }[] = [];
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          dots.push({
            x: i * spacingX + spacingX / 2,
            y: j * spacingY + spacingY / 2,
          });
        }
      }
      dotsRef.current = dots;
    };

    generateDots();

    // --- Resize (throttled) ---
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        generateDots();
      }, 150);
    };

    // --- Mouse ---
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // --- Animation loop ---
    let running = true;

    const draw = () => {
      if (!running) return;

      ctx.clearRect(0, 0, width, height);

      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;

      for (const dot of dotsRef.current) {
        const dx = mouseX - dot.x;
        const dy = mouseY - dot.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const alpha = 0.3 + 0.7 * Math.max(0, 1 - dist / maxDist);
        const radius =
          baseRadius +
          (maxRadius - baseRadius) * Math.max(0, 1 - dist / maxDist);

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,255,136,${alpha})`;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    // --- Cleanup ---
    return () => {
      running = false;
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        backgroundColor: "#0d0d0d",
        width: "100%",
        height: "100vh",
      }}
    />
  );
};

export default NeonDotsBackground;
