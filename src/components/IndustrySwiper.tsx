import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import {
  Calculator as Excavator,
  Pipette as Pipe,
  Cog,
  CarTaxiFrontIcon,
  TrainFrontTunnel,
} from 'lucide-react';
import { BiBuildings } from 'react-icons/bi';
import { GiMiningHelmet } from 'react-icons/gi';
import { MdOutlineWaterDamage } from 'react-icons/md';
import { FaPumpMedical } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/effect-fade';

const industries = [
  {
    icon: BiBuildings,
    name: 'CONSTRUCTION',
    iconSize: 32,
    color: '#4F46E5',
    bgColor: 'rgba(79, 70, 229, 0.1)'
  },
  {
    icon: GiMiningHelmet,
    name: 'MINING',
    iconSize: 32,
    color: '#F59E0B',
    bgColor: 'rgba(245, 158, 11, 0.1)'
  },
  {
    icon: CarTaxiFrontIcon,
    name: 'AUTOMOTIVE',
    iconSize: 32,
    color: '#EF4444',
    bgColor: 'rgba(239, 68, 68, 0.1)'
  },
  {
    icon: MdOutlineWaterDamage,
    name: 'WATERWORKS',
    iconSize: 32,
    color: '#3B82F6',
    bgColor: 'rgba(59, 130, 246, 0.1)'
  },
  {
    icon: FaPumpMedical,
    name: 'HYDRAULICS',
    iconSize: 32,
    color: '#10B981',
    bgColor: 'rgba(16, 185, 129, 0.1)'
  },
  {
    icon: TrainFrontTunnel,
    name: 'RAIL',
    iconSize: 32,
    color: '#8B5CF6',
    bgColor: 'rgba(139, 92, 246, 0.1)'
  },
  {
    icon: Cog,
    name: 'OEMS',
    iconSize: 32,
    color: '#6366F1',
    bgColor: 'rgba(99, 102, 241, 0.1)'
  }
];

const IndustrySwiper = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 mt-0 pt-0">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Swiper
            modules={[Autoplay, EffectFade]}
            spaceBetween={0}
            slidesPerView={2}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 6,
              },
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
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                    className="relative w-24 h-24 rounded-full bg-white flex flex-col items-center justify-center 
                             shadow-lg hover:shadow-xl transition-all duration-300
                             before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br 
                             before:from-white before:to-gray-50 before:opacity-80 before:z-0
                             overflow-hidden"
                    style={{ background: industry.bgColor }}
                  >
                    <div className="relative z-10 flex flex-col items-center">
                      <industry.icon
                        className="transition-all duration-300 transform group-hover:scale-110"
                        size={industry.iconSize}
                        strokeWidth={1.5}
                        style={{ color: industry.color }}
                      />
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-[11px] font-semibold mt-2 text-gray-700 text-center tracking-wider
                                 group-hover:text-gray-900 transition-colors duration-300"
                      >
                        {industry.name}
                      </motion.span>
                    </div>
                    <motion.div
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
                               bg-gradient-to-br from-transparent to-gray-100
                               transition-opacity duration-300"
                      animate={{ opacity: [0, 0.1, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
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