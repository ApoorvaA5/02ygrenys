import React from 'react';
import { Settings } from "lucide-react";
import solutionsBanner from '../assets/solutionsbanner.jpeg'; 
import L1 from '../assets/Lab1.jpg';
import L2 from '../assets/Lab2.jpg';
import L3 from '../assets/Lab3.jpg';
import L4 from '../assets/Lab4.jpg';

import P1 from '../assets/Packaging1.jpg'
import P2 from '../assets/Packaging2.jpg'
import P3 from '../assets/Packaging3.jpg'
import P4 from '../assets/Packaging4.jpg'
import P5 from '../assets/Packaging5.jpg'
import P6 from '../assets/Packaging6.jpg'
import P7 from '../assets/Packaging7.jpg'
import P8 from '../assets/Packaging8.jpg'
import P9 from '../assets/Packaging9.jpg'
import P10 from '../assets/Packaging10.jpg'
import P11 from '../assets/Packaging11.jpg'
import P12 from '../assets/Packaging12.jpg'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Solutions = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Hero Section */}
      <div className="relative h-[80vh] bg-black">
      <img
    src={solutionsBanner}
    alt="Solutions Banner"
    className="absolute inset-0 w-full h-full object-cover opacity-50"
  />
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white">
            Comprehensive <span className="text-[#00B4D8]">Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">
            Delivering excellence through innovative solutions and quality assurance
          </p>
        </div>
      </div>

      {/* Main Content with Cards */}
      <div className="max-w-7xl mx-auto px-6 py-20 bg-black">
        {/* Supplier Research Section */}
        <div className="mb-32">
          <h2 className="text-5xl font-bold text-[#00B4D8] mb-12">Supplier Research</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-900 rounded-xl p-8 shadow-xl border border-gray-800">
              <p className="text-xl leading-relaxed text-gray-300">
                Synergy specializes in conducting comprehensive supplier research & evaluation for any engineering product or service. We empower you to make informed techno-commercial and strategic commercial decisions.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="text-2xl font-bold text-[#00B4D8] mb-2">Sourcing Strategy Expertise</h3>
                <p className="text-gray-300">
                  Leverage deep research and market data to assess market readiness.
                </p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="text-2xl font-bold text-[#00B4D8] mb-2">Vast Industrial Experience</h3>
                <p className="text-gray-300">
                  A team with 200+ years of combined expertise in Indian and international markets.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Supplier Development Section */}
        <div className="mb-32">
          <h2 className="text-5xl font-bold text-[#00B4D8] mb-12">Supplier Development</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="text-2xl font-bold text-[#00B4D8] mb-2">Supplier Evaluation</h3>
                <p className="text-gray-300">
                  Conduct a thorough assessment of a supplier's current performance and identify opportunities for improvement through tools such as audits, surveys, scorecards, and benchmarking.
                </p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="text-2xl font-bold text-[#00B4D8] mb-2">Collaborative Engagement</h3>
                <p className="text-gray-300">
                  Foster strong partnerships with suppliers to build meaningful connections and unlock mutual benefits.
                </p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="text-2xl font-bold text-[#00B4D8] mb-2">Performance Monitoring</h3>
                <p className="text-gray-300">
                  Establish robust systems to track supplier performance and ensure standardized quality metrics.
                </p>
              </div>
            </div>
            {/* Right Column */}
            <div className="space-y-6">
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="text-2xl font-bold text-[#00B4D8] mb-2">Quality Assurance Audits</h3>
                <p className="text-gray-300">
                  Implement regular quality audits to maintain and enhance product and service standards.
                </p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="text-2xl font-bold text-[#00B4D8] mb-2">Proactive Corrective Measures</h3>
                <p className="text-gray-300">
                  Adopt a collaborative approach to address & resolve issues effectively, driving continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Assurance Section */}
        <div className="mb-32">
          <h2 className="text-5xl font-bold text-[#00B4D8] mb-12">Quality Assurance</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="text-2xl font-bold text-[#00B4D8] mb-2">Preparation and Verification</h3>
                <p className="text-gray-300">
                  Development or validation of Quality Control Plans (QCP) and Production Part Approval Process (PPAP) documentation.
                </p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="text-2xl font-bold text-[#00B4D8] mb-2">Quality Process Audits</h3>
                <p className="text-gray-300">
                  Comprehensive audits of quality processes, including verification of calibration status for quality control equipment.
                </p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="text-2xl font-bold text-[#00B4D8] mb-2">Third-Party Material Testing</h3>
                <p className="text-gray-300">
                  Independent testing of materials at accredited laboratories.
                </p>
              </div>
            </div>
            {/* Right Column */}
            <div className="space-y-6">
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="text-2xl font-bold text-[#00B4D8] mb-2">First Article and PPAP Inspection</h3>
                <p className="text-gray-300">
                  Detailed inspection of first articles (FAI) and PPAP quantities during the production phase.
                </p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="text-2xl font-bold text-[#00B4D8] mb-2">Casting Oversight</h3>
                <p className="text-gray-300">
                  For casting processes, on-site monitoring of metal pouring, along with real-time measurement and reporting.
                </p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="text-2xl font-bold text-[#00B4D8] mb-2">Finished Component Inspection</h3>
                <p className="text-gray-300">
                  Thorough inspection of final components to ensure compliance with quality standards.
                </p>
              </div>
            </div>
          </div>

          {/* Lab Quality Images */}
          <div className="mt-12 p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-center">
            {[L1, L2, L3, L4].map((image, index) => (
              <div key={index} className="w-full flex justify-center">
                <img
                  src={image}
                  alt={`Lab Quality ${index + 1}`}
                  className="w-60 h-40 object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Packaging Section */}
        <div className="mb-32">
          <h2 className="text-5xl font-bold text-[#00B4D8] mb-12">Packaging</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-gray-900 rounded-xl p-8 shadow-xl border border-gray-800">
                <p className="text-xl leading-relaxed text-gray-300">
                  Our packaging solutions ensure secure transit and storage of goods, addressing safety, quality, and integrity. Effective packaging minimizes risk by protecting products from damage, environmental exposure, and contamination.
                </p>
                <div className="space-y-6 mt-8">
                  <div className="border-l-4 border-[#00B4D8] pl-6">
                    <h3 className="text-2xl font-bold text-[#00B4D8] mb-2">Customized Packaging</h3>
                    <p className="text-gray-300">
                      Tailored packaging solutions based on product type and transit requirements.
                    </p>
                  </div>
                  <div className="border-l-4 border-[#00B4D8] pl-6">
                    <h3 className="text-2xl font-bold text-[#00B4D8] mb-2">Sustainable Materials</h3>
                    <p className="text-gray-300">
                      Eco-friendly packaging options for reduced environmental impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="text-2xl font-bold text-[#00B4D8] mb-2">Global Standards Compliance</h3>
                <p className="text-gray-300">
                  Adherence to global standards with proper labeling ensures safe & efficient transit.
                </p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="text-2xl font-bold text-[#00B4D8] mb-2">Real-Time Tracking</h3>
                <p className="text-gray-300">
                  Leveraging real-time tracking systems helps monitor factors like temperature, humidity, & vibrations during transit.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Slider */}
        <div className="mb-10 mx-auto max-w-6xl">
                            <Slider
                                dots={true}
                                infinite={true}
                                speed={500}
                                slidesToShow={4}
                                slidesToScroll={1}
                                autoplay={true}
                                autoplaySpeed={2000}
                                responsive={[
                                    { breakpoint: 1024, settings: { slidesToShow: 3 } },
                                    { breakpoint: 768, settings: { slidesToShow: 2 } },
                                    { breakpoint: 480, settings: { slidesToShow: 1 } },
                                ]}
                            >
                                {[P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12].map(
                                    (image, index) => (
                                        <div key={index} className="p-2">
                                            <div className="w-full h-60 bg-white border  border-gray-300 hover:border-blue-500 transition-all px-6 rounded-lg shadow-lg flex items-center justify-center">
                                                <img
                                                    src={image}
                                                    alt={`Packaging ${index + 1}`}
                                                    className="w-full h-full object-contain p-2"
                                                />
                                            </div>
                                        </div>
                                    )
                                )}
                            </Slider>
                        </div>
      </div>
    </div>
  );
}

export default Solutions;