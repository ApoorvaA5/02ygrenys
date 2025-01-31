import React from 'react';
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
  return (
    <div className="bg-gray-900 py-20 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#00B4D8]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Integrated Off-Shore Manufacturing
        </motion.h2>

        {/* Cards Container */}
        <div className="flex justify-between space-x-4">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="relative overflow-hidden group bg-white rounded-lg p-8 shadow-xl w-1/4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.3 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-skyblue-500 to-blue-500"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
              <div className="relative flex flex-col items-center">
                <motion.div
                  className="relative w-20 h-20 mb-6"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 + index * 0.3 }}
                >
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
                  <motion.img
                    src={feature.image}
                    alt={feature.title}
                    className="w-20 h-20 object-cover rounded-full"
                  />
                </motion.div>
                <h3 className="text-xl font-bold text-[#00B4D8] text-center">{feature.title}</h3>
                
                {/* Properly Aligned List Items */}
                <ul className="space-y-3 text-gray-700 text-left flex-1 w-full">
                  {feature.points.map((point, pointIndex) => (
                    <motion.li 
                      key={pointIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 1 + pointIndex * 0.1 }}
                      className="flex items-start gap-x-2"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#00B4D8] flex-shrink-0" />
                      <span className="leading-tight">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <motion.div
                className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-500/10 via-skyblue-500/10 to-transparent rounded-tl-full"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.15 }}
                transition={{ delay: 0.5 + index * 0.6, duration: 0.5 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntegratedManufacturing;

