import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleOpen = () => {
    setIsOpen(true);
    // Wait for curtain animation to finish before removing from DOM
    setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 1500);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex overflow-hidden">
      {/* Left Curtain */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isOpen ? "-100%" : 0 }}
        transition={{ duration: 1.5, ease: [0.7, 0, 0.3, 1] }}
        className="relative h-full w-1/2 bg-maroon flex items-center justify-end overflow-hidden border-r border-gold/30"
      >
        <img
          src="https://picsum.photos/seed/radha-krishna-left/800/1200"
          alt="Radha Krishna"
          className="absolute inset-0 h-full w-full object-cover opacity-40 grayscale"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Right Curtain */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isOpen ? "100%" : 0 }}
        transition={{ duration: 1.5, ease: [0.7, 0, 0.3, 1] }}
        className="relative h-full w-1/2 bg-maroon flex items-center justify-start overflow-hidden border-l border-gold/30"
      >
        <img
          src="https://picsum.photos/seed/radha-krishna-right/800/1200"
          alt="Radha Krishna"
          className="absolute inset-0 h-full w-full object-cover opacity-40 grayscale"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Center Content */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4"
          >
            <div className="bg-cream/10 backdrop-blur-sm p-8 rounded-full border border-gold/50 shadow-2xl">
              <motion.h2 
                className="font-cursive text-gold text-5xl md:text-7xl mb-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Kanika & Yash
              </motion.h2>
              <p className="text-gold-light font-serif tracking-widest uppercase text-sm mb-8">
                The Royal Wedding
              </p>
              <button
                onClick={handleOpen}
                className="bg-gold hover:bg-gold/80 text-maroon font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 active:scale-95 shadow-lg"
              >
                Open Invitation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
