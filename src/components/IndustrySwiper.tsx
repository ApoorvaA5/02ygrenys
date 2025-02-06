import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/effect-fade';

// Import local assets
import Mining from '../assets/mining.png';
import Commercial from '../assets/commercialPlumbing.png';
import Forestry from '../assets/forestry.png';
import Medical from '../assets/medical.png';
import Lawn from '../assets/lawnmover.png';
import Pump from '../assets/pump.png';
import Valves from '../assets/valves.png';
import Drybulk from '../assets/drybulk.png';
import Heavy from '../assets/lightning.png';
import Safety from '../assets/safetyAir.png';
import Oiland from '../assets/oilandgas.png';
import Hydraulics from '../assets/hydraulics.png';
import Railway from '../assets/railway.png';

// Define industries with image paths
const industries = [
  { icon: Commercial, name: 'COMMERCIAL PLUMBING', bgColor: 'rgba(79, 70, 229, 0.1)' },
  { icon: Mining, name: 'MINING', bgColor: 'rgba(245, 158, 11, 0.1)' },
  { icon: Safety, name: 'SAFETY AIR GUN', bgColor: 'rgba(239, 68, 68, 0.1)' },
  { icon: Oiland, name: 'OIL & GAS', bgColor: 'rgba(59, 130, 246, 0.1)' },
  { icon: Hydraulics, name: 'HYDRAULICS', bgColor: 'rgba(16, 185, 129, 0.1)' },
  { icon: Valves, name: 'VALVES', bgColor: 'rgba(16, 185, 129, 0.1)' },
  { icon: Railway, name: 'RAILWAYS', bgColor: 'rgba(139, 92, 246, 0.1)' },
  { icon: Forestry, name: 'FORESTRY MACHINERY', bgColor: 'rgba(34, 139, 34, 0.1)' },
  { icon: Medical, name: 'MEDICAL EQUIPMENT', bgColor: 'rgba(255, 69, 0, 0.1)' },
  { icon: Drybulk, name: 'DRY BULK HANDLING', bgColor: 'rgba(218, 165, 32, 0.1)' },
  { icon: Pump, name: 'PUMPS', bgColor: 'rgba(30, 144, 255, 0.1)' },
  { icon: Lawn, name: 'LAWN MOWERS', bgColor: 'rgba(50, 205, 50, 0.1)' },
  { icon: Heavy, name: 'HEAVY-DUTY LIGHTING', bgColor: 'rgba(255, 215, 0, 0.1)' },
];

const IndustrySwiper = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 mt-0 pt-0">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Swiper
            modules={[Autoplay, EffectFade]}
            spaceBetween={0}
            slidesPerView={2}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
            }}
            className="industry-swiper w-full !p-0"
          >
            {industries.map((industry, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center p-1 cursor-pointer group"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                    className="relative w-24 h-24 rounded-full bg-white flex flex-col items-center justify-center 
                             shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{ background: industry.bgColor }}
                  >
                    <div className="relative z-10 flex flex-col items-center">
                      {/* Display imported image */}
                      <img src={industry.icon} alt={industry.name} className="w-10 h-10 transition-all duration-300 transform group-hover:scale-110" />
                      
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-[11px] font-semibold mt-2 text-gray-700 text-center tracking-wider"
                      >
                        {industry.name === "SAFETY AIR GUN" ? (
                          <>
                            SAFETY AIR <br /> GUN
                          </>
                        ) : (
                          industry.name
                        )}
                      </motion.span>
                    </div>
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
};

export default IndustrySwiper;

