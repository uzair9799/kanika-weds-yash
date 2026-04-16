import { motion } from "motion/react";

export default function Hero() {
  return (
    <header className="geometric-header">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-gold font-sans font-semibold uppercase tracking-[4px] text-sm mb-2"
      >
        Save the Date
      </motion.div>
      
      <motion.h1 
        className="font-serif text-maroon text-5xl md:text-6xl lg:text-7xl mb-2 tracking-wider"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Kanika & Yash
      </motion.h1>

      <motion.div 
        className="flex items-center gap-3 text-dark-ink font-sans text-sm md:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <span>April 20, 2026</span>
        <div className="w-1 h-1 bg-gold rounded-full"></div>
        <span>Jaipur, Rajasthan</span>
      </motion.div>
    </header>
  );
}
