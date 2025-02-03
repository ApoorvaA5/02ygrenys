import React from 'react';
import { Settings } from "lucide-react";

const Solutions = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Hero Section */}
      <div className="relative h-[90vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1920&q=80"
          alt="Solutions Banner" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
          <div className="max-w-7xl mx-auto h-full flex flex-col justify-center px-6">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
              Our <span className="text-[#00B4D8]">Solutions</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Supplier Research Section */}
        <div className="mb-32">
          <h2 className="text-5xl font-bold text-[#00B4D8] mb-12 opacity-0 animate-[fadeSlideUp_0.6s_ease-out_forwards]">
            Supplier Research
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: Introductory Paragraph */}
            <div className="opacity-0 animate-[fadeSlideUp_0.6s_ease-out_0.2s_forwards]">
              <p className="text-xl leading-relaxed text-gray-300">
                Synergy specializes in conducting comprehensive supplier research & evaluation for any engineering product or service. We empower you to make informed techno-commercial and strategic commercial decisions, ensuring a seamless and successful sourcing experience from India.
              </p>
            </div>
            {/* Right Column: Moved Sub-Sections */}
            <div className="space-y-6 opacity-0 animate-[fadeSlideUp_0.6s_ease-out_0.4s_forwards]">
              <div className="border-l-4 border-[#00B4D8] pl-6">
                <h3 className="text-2xl font-bold text-[#00B4D8] mb-2">Sourcing Strategy Expertise</h3>
                <p className="text-gray-300">
                  Leverage deep research and market data to assess market readiness.
                </p>
              </div>
              <div className="border-l-4 border-[#00B4D8] pl-6">
                <h3 className="text-2xl font-bold text-[#00B4D8] mb-2">Vast Industrial Experience</h3>
                <p className="text-gray-300">
                  A team with 200+ years of combined expertise in Indian and international markets, serving clients from the U.S., Europe, Canada, New Zealand, China & the U.K.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Supplier Development Section */}
        <div className="mb-32">
          <h2 className="text-5xl font-bold text-[#00B4D8] mb-12 opacity-0 animate-[fadeSlideUp_0.6s_ease-out_forwards]">
            Supplier Development
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: Supplier Evaluation, Collaborative Engagement, Performance Monitoring */}
            <div className="space-y-6 opacity-0 animate-[fadeSlideUp_0.6s_ease-out_0.2s_forwards]">
              <div className="border-l-4 border-[#00B4D8] pl-6">
                <h3 className="text-2xl font-bold text-[#00B4D8] mb-2">Supplier Evaluation</h3>
                <p className="text-gray-300">
                  Conduct a thorough assessment of a supplier's current performance and identify opportunities for improvement through tools such as audits, surveys, scorecards, and benchmarking.
                </p>
              </div>
              <div className="border-l-4 border-[#00B4D8] pl-6">
                <h3 className="text-2xl font-bold text-[#00B4D8] mb-2">Collaborative Engagement</h3>
                <p className="text-gray-300">
                  Foster strong partnerships with suppliers to build meaningful connections and unlock mutual benefits.
                </p>
              </div>
              <div className="border-l-4 border-[#00B4D8] pl-6">
                <h3 className="text-2xl font-bold text-[#00B4D8] mb-2">Performance Monitoring</h3>
                <p className="text-gray-300">
                  Establish robust systems to track supplier performance and ensure standardized quality metrics.
                </p>
              </div>
            </div>
            {/* Right Column: Quality Assurance Audits and Proactive Corrective Measures */}
            <div className="space-y-6 opacity-0 animate-[fadeSlideUp_0.6s_ease-out_0.4s_forwards]">
              <div className="border-l-4 border-[#00B4D8] pl-6">
                <h3 className="text-2xl font-bold text-[#00B4D8] mb-2">Quality Assurance Audits</h3>
                <p className="text-gray-300">
                  Implement regular quality audits to maintain and enhance product and service standards.
                </p>
              </div>
              <div className="border-l-4 border-[#00B4D8] pl-6">
                <h3 className="text-2xl font-bold text-[#00B4D8] mb-2">Proactive Corrective Measures</h3>
                <p className="text-gray-300">
                  Adopt a collaborative approach to address & resolve issues effectively, driving continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Supplier Management Initiatives Section */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-[#00B4D8] mb-12 opacity-0 animate-[fadeSlideUp_0.6s_ease-out_forwards]">
            Supplier Management Initiatives
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8 opacity-0 animate-[fadeSlideUp_0.6s_ease-out_0.2s_forwards]">
              <p className="text-xl leading-relaxed text-gray-300">
                Effective off-shore supplier management is vital to maintaining consistent high-quality standards and delivery performance, which directly impacts the true cost of sourcing.
              </p>
              <div className="space-y-6">
                <div className="border-l-4 border-[#00B4D8] pl-6">
                  <h3 className="text-2xl font-bold text-[#00B4D8] mb-2">Clear Communication</h3>
                  <p className="text-gray-300">
                    Clear communication and swift issue resolution are paramount.
                  </p>
                </div>
              </div>
            </div>
            {/* Right Column */}
            <div className="space-y-6 opacity-0 animate-[fadeSlideUp_0.6s_ease-out_0.4s_forwards]">
              <div className="border-l-4 border-[#00B4D8] pl-6">
                <h3 className="text-2xl font-bold text-[#00B4D8] mb-2">Impartial Approach</h3>
                <p className="text-gray-300">
                  Synergy's impartial approach fosters transparency, enabling the rapid identification of root causes and ensuring prompt, effective solutions for both suppliers & buyers.
                </p>
              </div>
            </div>
            {/* Icon */}
            <div className="opacity-0 animate-[fadeSlideUp_0.6s_ease-out_0.4s_forwards]">
              <Settings className="w-48 h-48 text-black/80" />
            </div>
          </div>
        </div>

        {/* Quality Assurance Section */}
        <div className="mb-32">
          <h2 className="text-5xl font-bold text-[#00B4D8] mb-12 opacity-0 animate-[fadeSlideUp_0.6s_ease-out_forwards]">
            Quality Assurance
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: Now includes Third-Party Material Testing */}
            <div className="space-y-6 opacity-0 animate-[fadeSlideUp_0.6s_ease-out_0.2s_forwards]">
              <div className="border-l-4 border-[#00B4D8] pl-6">
                <h3 className="text-2xl font-bold text-[#00B4D8] mb-2">Preparation and Verification</h3>
                <p className="text-gray-300">
                  Development or validation of Quality Control Plans (QCP) and Production Part Approval Process (PPAP) documentation.
                </p>
              </div>
              <div className="border-l-4 border-[#00B4D8] pl-6">
                <h3 className="text-2xl font-bold text-[#00B4D8] mb-2">Quality Process Audits</h3>
                <p className="text-gray-300">
                  Comprehensive audits of quality processes, including verification of calibration status for quality control equipment, ensuring traceability to national and international standards.
                </p>
              </div>
              <div className="border-l-4 border-[#00B4D8] pl-6">
                <h3 className="text-2xl font-bold text-[#00B4D8] mb-2">Tooling and Fixture Inspection</h3>
                <p className="text-gray-300">
                  In-process evaluation of tooling and fixtures to maintain production precision.
                </p>
              </div>
              <div className="border-l-4 border-[#00B4D8] pl-6">
                <h3 className="text-2xl font-bold text-[#00B4D8] mb-2">Third-Party Material Testing</h3>
                <p className="text-gray-300">
                  Independent testing of materials, including chemical and mechanical properties, conducted at accredited laboratories.
                </p>
              </div>
            </div>
            {/* Right Column */}
            <div className="space-y-6 opacity-0 animate-[fadeSlideUp_0.6s_ease-out_0.4s_forwards]">
              <div className="border-l-4 border-[#00B4D8] pl-6">
                <h3 className="text-2xl font-bold text-[#00B4D8] mb-2">First Article and PPAP Inspection</h3>
                <p className="text-gray-300">
                  Detailed inspection of first articles (FAI) and PPAP quantities during the production phase.
                </p>
              </div>
              <div className="border-l-4 border-[#00B4D8] pl-6">
                <h3 className="text-2xl font-bold text-[#00B4D8] mb-2">Casting Oversight</h3>
                <p className="text-gray-300">
                  For casting processes, on-site monitoring of metal pouring, along with real-time measurement and reporting of chemical composition.
                </p>
              </div>
              <div className="border-l-4 border-[#00B4D8] pl-6">
                <h3 className="text-2xl font-bold text-[#00B4D8] mb-2">Finished Component Inspection</h3>
                <p className="text-gray-300">
                  Thorough inspection of final components to ensure compliance with quality standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solutions;




