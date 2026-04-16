import { motion } from "motion/react";

export default function MapSection() {
  return (
    <div className="geometric-card">
      <h2 className="geometric-card-title">Venue Location</h2>
      <div className="h-[140px] bg-gray-200 border border-border-soft overflow-hidden rounded relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.464676579243!2d75.7872683!3d26.9124336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db41456ad0c3f%3A0x70d204e0381fd90f!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1713212345678!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Wedding Venue Map"
          className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
        ></iframe>
      </div>
      <p className="text-[11px] text-maroon/60 mt-2 italic">
        Grand Palace Hotel, Jaipur
      </p>
    </div>
  );
}
