import React, { useEffect } from 'react';
import { FaSearch, FaChartLine, FaIndustry, FaClipboardCheck } from 'react-icons/fa';
import solutionsBanner from '../assets/solutionsbanner.png'; // Local banner image
import AOS from 'aos';
import 'aos/dist/aos.css';

const Solutions: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Card Data
  const cards = [
    {
      title: "Comprehensive Supplier Research",
      description:
        "We empower you to make informed techno-commercial and strategic decisions, ensuring a seamless and successful sourcing experience from India.",
      icon: <FaSearch className="text-sky-400 text-4xl" />,
    },
    {
      title: "Sourcing Strategy Expertise",
      description:
        "Leverage deep research and market data to assess market readiness.",
      icon: <FaChartLine className="text-sky-400 text-4xl" />,
    },
    {
      title: "Vast Industrial Experience",
      description:
        "A team with 200+ years of combined expertise in global markets, serving clients across the U.S., Europe, Canada, and beyond.",
      icon: <FaIndustry className="text-sky-400 text-4xl" />,
    },
    {
      title: "End-to-End Project Support",
      description: "Supplier research, contract finalization, product development, and process controls.",
      icon: <FaClipboardCheck className="text-sky-400 text-4xl" />,
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Banner Section */}
      <div
        style={{
          backgroundImage: `url(${solutionsBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '90vh',
          width: '100%',
        }}
        className="relative flex items-center justify-center text-white"
      >
        <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        <h1 className="text-5xl font-bold relative z-10 animate-fadeIn">
          Our Solutions
        </h1>
      </div>

      {/* Content Section */}
      <div className="relative py-16 px-6 md:px-16 bg-black text-white">
        <div className="container mx-auto text-center">
          <h2
            className="text-4xl font-bold mb-10 text-sky-400"
            data-aos="fade-up"
          >
            Supplier Research & Sourcing Strategy
          </h2>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white text-gray-900 p-6 rounded-xl shadow-lg flex flex-col items-center"
                data-aos="zoom-in"
              >
                {card.icon}
                <h3 className="text-2xl font-semibold text-sky-400 mt-4">
                  {card.title}
                </h3>
                <p className="mt-3 text-gray-700 text-center">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;


