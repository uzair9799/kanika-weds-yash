import { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function Countdown() {
  const targetDate = new Date("2026-04-20T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const CountBox = ({ value, label }: { value: number; label: string }) => (
    <div className="bg-maroon text-white p-3 text-center rounded">
      <span className="text-xl font-bold block leading-none mb-1">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-[10px] uppercase opacity-80 tracking-tighter">
        {label}
      </span>
    </div>
  );

  return (
    <div className="geometric-card">
      <h2 className="geometric-card-title">Countdown</h2>
      <div className="grid grid-cols-4 gap-2">
        <CountBox value={timeLeft.days} label="Days" />
        <CountBox value={timeLeft.hours} label="Hrs" />
        <CountBox value={timeLeft.minutes} label="Min" />
        <CountBox value={timeLeft.seconds} label="Sec" />
      </div>
    </div>
  );
}
