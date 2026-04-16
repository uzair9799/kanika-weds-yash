import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="geometric-footer">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Invitely Labs &copy; 2026
      </motion.div>
      
      <motion.div 
        className="text-maroon font-bold text-sm md:text-base"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        Royal Celebration of Love
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Designed in Jaipur
      </motion.div>
    </footer>
  );
}
