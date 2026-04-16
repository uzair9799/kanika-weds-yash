import { useState } from "react";
import Preloader from "./components/Preloader";
import MusicToggle from "./components/MusicToggle";
import Hero from "./components/Hero";
import ScratchCard from "./components/ScratchCard";
import Countdown from "./components/Countdown";
import Carousel from "./components/Carousel";
import Timeline from "./components/Timeline";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <main className="min-h-screen bg-cream selection:bg-gold selection:text-maroon">
      {/* Preloader - Curtain Effect */}
      <Preloader onComplete={() => setIsLoaded(true)} />

      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="geometric-border"
          >
            {/* Decorative Corners */}
            <div className="geometric-corner geometric-corner-tl"></div>
            <div className="geometric-corner geometric-corner-br"></div>

            {/* Background Music Toggle */}
            <MusicToggle play={isLoaded} />

            {/* Header Section */}
            <Hero />

            {/* Main Content Grid */}
            <main className="flex-1 grid grid-cols-1 lg:grid-cols-[280px_1fr_280px] gap-6 p-8 md:px-10">
              {/* Left Column */}
              <div className="flex flex-col gap-6">
                <Timeline section={1} />
                <Countdown />
              </div>

              {/* Center Column */}
              <div className="flex flex-col gap-6">
                <ScratchCard />
                <Carousel />
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-6">
                <Timeline section={2} />
                <MapSection />
              </div>
            </main>

            {/* Footer Section */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
