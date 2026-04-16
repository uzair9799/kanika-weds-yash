import { MouseEvent, TouchEvent, useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";
import { motion } from "motion/react";

export default function ScratchCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
        
        // Fill with gold gradient scratch layer
        const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        grad.addColorStop(0, "#d4af37");
        grad.addColorStop(0.5, "#f9e29c");
        grad.addColorStop(1, "#d4af37");
        
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Add text to scratch layer
        ctx.fillStyle = "rgba(255,255,255,0.8)";
        ctx.font = "bold 12px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("✨ SCRATCH TO REVEAL ✨", canvas.width / 2, canvas.height / 2 + 5);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const scratch = (x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 25, 0, Math.PI * 2);
    ctx.fill();
    checkReveal();
  };

  const checkReveal = () => {
    if (isRevealed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparentCount = 0;
    for (let i = 0; i < pixels.length; i += 4) {
      if (pixels[i + 3] === 0) transparentCount++;
    }

    const percentage = (transparentCount / (canvas.width * canvas.height)) * 100;
    if (percentage > 40) {
      setIsRevealed(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#D4AF37", "#800000"],
      });
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isPressed) return;
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) scratch(e.clientX - rect.left, e.clientY - rect.top);
  };

  const handleTouchMove = (e: TouchEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      const touch = e.touches[0];
      scratch(touch.clientX - rect.left, touch.clientY - rect.top);
    }
  };

  return (
    <div className="h-[180px] relative rounded-lg overflow-hidden shadow-inner bg-cream border border-gold/20">
      {/* Revealed Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
        <span className="text-gold font-sans text-[10px] uppercase tracking-widest mb-1">Wedding Date</span>
        <div className="border-2 border-dashed border-maroon/20 rounded-lg px-6 py-2">
          <h3 className="text-maroon text-2xl font-serif font-bold italic">20 April 2026</h3>
        </div>
      </div>

      {/* Scratch Layer */}
      <canvas
        ref={canvasRef}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className={`absolute inset-0 cursor-crosshair transition-opacity duration-1000 ${isRevealed ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      />
    </div>
  );
}
