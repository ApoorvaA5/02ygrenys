import React, { useEffect } from 'react';
import { FaSearch, FaChartLine, FaIndustry, FaClipboardCheck, FaTasks, FaUsers, FaEye, FaShieldAlt, FaTools } from 'react-icons/fa';
import solutionsBanner from '../assets/solutionsBanner.png'; // Ensure correct path and capitalization
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

  const supplierDevelopmentCards = [
    {
      title: "Supplier Evaluation",
      description:
        "Conduct a thorough assessment of a supplier's current performance and identify opportunities for improvement through audits, surveys, scorecards, and benchmarking.",
      icon: <FaTasks className="text-white text-4xl" />,
    },
    {
      title: "Collaborative Engagement",
      description:
        "Foster strong partnerships with suppliers to build meaningful connections and unlock mutual benefits.",
      icon: <FaUsers className="text-white text-4xl" />,
    },
    {
      title: "Performance Monitoring",
      description:
        "Establish robust systems to track supplier performance and ensure standardized quality metrics.",
      icon: <FaEye className="text-white text-4xl" />,
    },
    {
      title: "Quality Assurance Audits",
      description:
        "Implement regular quality audits to maintain and enhance product and service standards.",
      icon: <FaShieldAlt className="text-white text-4xl" />,
    },
    {
      title: "Proactive Corrective Measures",
      description:
        "Adopt a collaborative approach to address and resolve issues effectively, driving continuous improvement.",
      icon: <FaTools className="text-white text-4xl" />,
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

      {/* Supplier Research & Sourcing Strategy */}
      <div className="relative py-16 px-6 md:px-16 bg-black text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#00B4D8]">
            Supplier Research & Sourcing Strategy
          </h1>

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

      {/* Supplier Development Section with Different Design */}
      <div className="relative py-16 px-6 md:px-16 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Supplier Development
          </h1>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supplierDevelopmentCards.map((card, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 p-6 rounded-2xl shadow-xl flex flex-col items-center border border-white backdrop-blur-lg"
                data-aos="fade-up"
              >
                {card.icon}
                <h3 className="text-2xl font-semibold text-white mt-4">
                  {card.title}
                </h3>
                <p className="mt-3 text-white text-center opacity-90">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;

