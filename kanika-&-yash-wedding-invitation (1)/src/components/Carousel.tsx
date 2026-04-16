import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { motion } from "motion/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const images = [
  "https://picsum.photos/seed/wedding1/1200/800",
  "https://picsum.photos/seed/wedding2/1200/800",
  "https://picsum.photos/seed/wedding3/1200/800",
  "https://picsum.photos/seed/wedding4/1200/800",
];

export default function Carousel() {
  return (
    <div className="flex-1 bg-white border border-gold p-1 relative min-h-[300px] md:min-h-[400px]">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={src}
                alt={`Wedding Moment ${index + 1}`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Decorative Overlay */}
      <div className="absolute inset-0 pointer-events-none border-[10px] border-white/20"></div>
    </div>
  );
}
