import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Manufacturing Expertise",
    image: "https://thumbs.dreamstime.com/b/quality-control-qc-engineer-monitoring-checking-machine-system-manufacturing-factory-230764631.jpg",
    points: [
      "Team of 100+ engineers",
      "Precision machining",
      "Fabrication & welding",
      "Molding, Castings, Forgings",
      "Hands-on manufacturing process knowledge",
      "Surface treatment & coating, including fully integrated contract assembly"
    ]
  },
  {
    title: "Revolutionizing Global Manufacturing",
    image: "https://media.licdn.com/dms/image/v2/D4D12AQFMT26TB3ABqw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1684476386350?e=2147483647&v=beta&t=y1JHHvZVTXrYtitH2_TBIJsLpm42UAuQ0QMyi7Cd4e4",
    points: [
      "Trusted partner for nearly two decades in manufacturing solutions.",
      "Delivering high-quality products and world-class services.",
      "Serving OEMs across the U.S, Canada, Europe, Australia, the U.K, New Zealand, and Asia."
    ]
  },
  {
    title: "Reassuring Quality",
    image: "https://www.friso.com.sg/sites/default/files/styles/article_image_banner/public/2020-12/3%20Milk%20QC%20Concern%20Content-Card.jpg.webp?itok=XzkQ2xOQ",
    points: [
      "Every sourcing strategy focuses on striking the right balance between best-in-class quality and competitiveness.",
      "We strive to help you achieve  \"true\" savings with zero compromise on quality.",
      "Ensuring a dependable supply chain for consistent and reliable delivery."
    ]
  },
  {
    title: "Manufacturing Complexities Simplified",
    image: "https://blog.forgestik.com/hs-fs/hubfs/Images_Blog%20Headers%20and%20Content/iStock-1049259612_manuf-complex_compressed.jpg?width=1920&height=514&name=iStock-1049259612_manuf-complex_compressed.jpg",
    points: [
      "Fully integrated value-added sourcing and manufacturing solutions.",
      "Eliminates complexities in lean supply chain management.",
      "Enables seamless management of multiple processes"
    ]
  }
];

const IntegratedManufacturing = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#00B4D8]">
          Integrated Off-Shore Manufacturing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg p-8 shadow-xl transform transition-all duration-500"
              animate={{ scale: activeIndex === index ? 1.05 : 1 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-6 flex flex-col items-center">
                  <img src={feature.image} alt={feature.title} className="w-20 h-20 object-cover mb-4 rounded-full" />
                  <h3 className="text-xl font-bold text-[#00B4D8] text-center">
                    {feature.title}
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  {feature.points.map((point, pointIndex) => (
                    <li 
                      key={pointIndex}
                      className="flex items-start group"
                    >
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-[#00B4D8] flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                      <span className="group-hover:text-[#00B4D8] transition-colors duration-300">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntegratedManufacturing;