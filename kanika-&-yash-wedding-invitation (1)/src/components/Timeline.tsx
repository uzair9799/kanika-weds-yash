import { motion } from "motion/react";

const events = [
  {
    id: 1,
    date: "18 April 2026",
    items: [
      { time: "10:00 AM", title: "Haldi Ceremony" },
      { time: "05:00 PM", title: "Sangeet Night" },
    ],
  },
  {
    id: 2,
    date: "20 April 2026",
    items: [
      { time: "10:00 AM", title: "Chak" },
      { time: "12:15 PM", title: "Bhat" },
      { time: "06:00 PM", title: "Pratibhoj" },
      { time: "08:00 PM", title: "Swagat Barat" },
    ],
  },
];

export default function Timeline({ section }: { section: number }) {
  const eventData = events.find(e => e.id === section);
  if (!eventData) return null;

  return (
    <div className="geometric-card">
      <h2 className="geometric-card-title">{eventData.date}</h2>
      <div className="space-y-4">
        {eventData.items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <span className="text-gold font-bold text-[12px] uppercase tracking-wider">
              {item.time}
            </span>
            <span className="text-dark-ink font-medium text-[15px]">
              {item.title}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
