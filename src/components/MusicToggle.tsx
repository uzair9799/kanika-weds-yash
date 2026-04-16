import { useState, useEffect, useRef } from "react";
import { Music, Music2 } from "lucide-react";
import { motion } from "motion/react";

export default function MusicToggle({ play }: { play: boolean }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (play && !isPlaying) {
      const timer = setTimeout(() => {
        audioRef.current?.play().then(() => setIsPlaying(true)).catch(console.error);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [play]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/music.mp3"
        loop
        preload="auto"
      />
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: play ? 1 : 0, scale: play ? 1 : 0 }}
        onClick={toggleMusic}
        className="fixed top-[30px] right-[40px] z-[60] w-10 h-10 border border-maroon rounded-full flex items-center justify-center bg-white shadow-md hover:bg-cream transition-colors"
        aria-label="Toggle Music"
      >
        {isPlaying ? (
          <Music className="w-5 h-5 text-maroon animate-pulse" />
        ) : (
          <Music2 className="w-5 h-5 text-maroon opacity-50" />
        )}
      </motion.button>
    </>
  );
}
