import React from 'react';

const Solutions = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Banner Section */}
      <div
        style={{
          backgroundImage: `url(/solutionsBanner.jpeg)`, // Image from the public folder
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '90vh',
          width: '100%',
        }}
        className="relative"
      >
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
        <div className="mb-20">
          <div className="flex items-center space-x-4 mb-12">
            <h2 className="text-4xl font-bold text-[#00B4D8]">Supplier Research</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Content */}
            <div className="space-y-8">
              <p className="text-xl leading-relaxed text-gray-300">
                Synergy specializes in conducting comprehensive supplier research & evaluation for 
                any engineering product or service. We empower you to make informed techno-commercial 
                and strategic commercial decisions, ensuring a seamless and successful sourcing 
                experience from India.
              </p>

              <div className="space-y-6">
                <div className="border-l-4 border-[#00B4D8] pl-6">
                  <h3 className="text-2xl font-bold text-[#00B4D8] mb-2">Sourcing Strategy Expertise</h3>
                  <p className="text-gray-300">
                    Leverage deep research and market data to assess market readiness.
                  </p>
                </div>

                <div className="border-l-4 border-[#00B4D8] pl-6">
                  <h3 className="text-2xl font-bold text-[#00B4D8] mb-2">Vast Industrial Experience</h3>
                  <p className="text-gray-300">
                    A team with 200+ years of combined expertise in Indian and international markets, 
                    serving clients from the U.S., Europe, Canada, New Zealand, China & the U.K.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content - Image Replacement */}
            <div className="bg-[#1a1a1a] p-6 rounded-lg">
              {/* Image replaces the End-to-End card */}
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYF0YanUZXIE_THjLVGQxkCzM-NanaKBLlA&s" 
                alt="Supplier Research"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* New Supplier Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {[
            {
              title: "Supplier Research and Evaluation",
              description: "Thorough research and evaluation to ensure the best sourcing decisions."
            },
            {
              title: "Due Diligence and Contract Finalization",
              description: "Ensuring a smooth process from evaluation to finalizing contracts."
            },
            {
              title: "Product Development Management and Process Controls",
              description: "Guidance on managing product development and ensuring quality controls."
            },
            {
              title: "First Article Qualification (F.A.I./P.P.A.P.) and Final Inspections",
              description: "Ensuring the first article is properly qualified and final inspections are carried out."
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800 hover:border-[#00B4D8] transition-colors duration-300"
            >
              <h3 className="text-xl font-bold text-[#00B4D8] mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;


