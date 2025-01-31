import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Ruler, ClipboardCheck, Lock, Gauge, PenTool as Tools, Microscope, Award } from 'lucide-react';

const features = [
  {
    icon: Ruler,
    title: "Design for Manufacturing Advisory"
  },
  {
    icon: ClipboardCheck,
    title: "Quality Assurance through Control Plans / PFMEA"
  },
  {
    icon: Shield,
    title: "Stringent Supplier Audits of Systems & Processes"
  },
  {
    icon: Lock,
    title: "Intellectual Property Protection"
  },
  {
    icon: Gauge,
    title: "Instrument & Gage Controls"
  },
  {
    icon: Tools,
    title: "Tooling Design & Simulation Expertise"
  },
  {
    icon: Microscope,
    title: "Design & Development of Custom Attribute Gages"
  },
  {
    icon: Award,
    title: "Internationally Approved & Certified Facilities"
  }
];

const PremiumQuality = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Content Section */}
          <div className="lg:w-1/3">
            <h2 className="text-[#00B4D8] text-4xl font-bold mb-4">
              PREMIUM QUALITY
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-[#8BB8E8]">
              True Savings through Quality<br />and Reliability
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              Synergy excels in delivering high-quality, complex engineering solutions for global OEMs. 
              With expertise in diverse manufacturing processes, robust quality control, and lean supply chains, 
              we ensure repeatable quality, real value, and dependable delivery.
            </p>
            <Link 
              to="/contact"
              className="inline-block bg-[#00B4D8] text-white px-8 py-3 rounded-lg font-semibold 
                      hover:bg-[#0096B4] transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Right Features Section */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
                  animate={{ scale: activeIndex === index ? 1.05 : 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  <div className="flex items-center space-x-3">
                    {/* Animated Icon Wrapper */}
                    <div className="relative w-14 h-14 flex items-center justify-center">
                      {/* Rotating Gradient */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-skyblue-500/20 to-blue-500/20 rounded-full"
                        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-tr from-blue-400/30 via-skyblue-400/30 to-blue-400/30 rounded-full"
                        animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                      />
                      {/* Icon */}
                      <feature.icon className="w-8 h-8 text-gray-700 relative z-10" />
                    </div>
                    
                    {/* Feature Title */}
                    <h4 className="text-gray-800 font-medium">
                      {feature.title}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PremiumQuality;