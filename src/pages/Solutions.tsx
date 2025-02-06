import React, { useState } from 'react';
import { Settings, ChevronDown, ChevronUp,  Quote} from "lucide-react";
import solutionsBanner from '../assets/solutionsbanner.jpg'; 
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
import solution from '../assets/solution.mp4';


const faqs = [
  {
    id: 1,
    question: "What does Synergy specialize in?",
    answer: "Synergy specializes in sourcing and contract manufacturing of various engineering products, including casting, metal stamping and fabrication, dies, tools and moulds, precision machined components, electric motor coils, forgings, plastics, composites, and rubber parts and sub-assemblies, as well as finished engineering products to customer designs and specifications. We offer comprehensive solutions, including supplier research, supplier development, quality assurance, and specialized packaging services. International standards such as ASMT, ASME, CSA, DIN, JIS standards, etc., are followed as specified."

  },
  {
    id: 2,
    question: "How can I contact Synergy?",
    answer: "You can contact Synergy by visiting their website at indiasynergy.com and using the contact information provided on the website. They have options for phone, email, and a contact form. Synergy also has a representative in the U.S.A., Mr. Mike Swartzlander."

  },
  {
    id: 3,
    question: "Does Synergy provide custom manufacturing solutions?",
   answer:"Yes, Synergy offers custom manufacturing solutions tailored to meet the specific requirements and specificatons of their clients. We work closely with their customers to develop and deliver customized products and components."
  },
  {
    id: 4,
    question: "Can Synergy Handle large-scale production orders?",
    answer: "Absolutely! Synergy has the capability to handle both small and large-scale production orders. We have a network of well-equipped manufacturing partners with our in-house team of quality engineers and a skilled workforce to meet varying production demands."
  },
    {
    id: 5,
    question: "Does Synergy provides Sourcing services?",
    answer: "Yes, Synergy offers sourcing services to help clients find the right suppliers for their manufacturing needs. We have an extensive network of trusted manufacturing partners that are carefully audited and qualified and can assist in identifying reliable sources for materials and components."
  },
  {
    id: 6,
    question: "Can Synergy handle multiple manufacturing processes?",
    answer: "Yes, Synergy is proficient in a wide range of manufacturing processes. We have expertise in casting, machining, metal stamping and fabrication, welding, die production, precision machining, electric motor coils, forgings, plastics, composites, and rubber parts. Additional processes like coating, painting &amp; electro-plating, plasma coating, anodising, etc. are also available with our qualified suppliers."
  },
  {
    id: 7,
    question: "What industries does Synergy cater to?",
    answer: "Synergy serves a diverse range of industries, including, oil &amp; gas, pumps, valves, railways, mining, aerospace, industrial machinery, heavy duty plumbing, lawn and garden, farm equipment, agricultural equipment, and more. We have the capability to adapt their manufacturing and sourcing services to suit the requirements of different industries."
  },
  {
    id: 8,
    question: "Does Synergy offer quality assurance for thier products?",
    answer: "Absolutely! Quality assurance is a top priority for Synergy. We have stringent quality control measures, and we are ISO-9001-2015 certified with over 75+ engineers of our own who handle right from RFQ to product quality control, with a high quality performance level of less than 500PPM defect level. We utilize advanced testing for materials and processes and inspection techniques to ensure quality, reliability and repeatability."
  },
  {
    id: 9,
    question: "Can Synergy handle international sourcing requirements?",
    answer: "Yes, Synergy has experience in international sourcing and can assist clients in finding suppliers both domestically and internationally. We have a global network and can help source materials and components from various locations. However, majority of the materials are sourced within India unless there is a specific customer specified material that needs to be sourced globally"
  },
  {
    id: 10,
    question: "How can I request a quote from Synergy?",
    answer: "To request a quote from Synergy, you can either reach out to them through the contact information provided on their website or fill out the contact form available on their website. Provide details about your requirements with clear engineering drawings, material specifications, quality standards, pictures and if possible, samples, and their team will get back to you after doing feasibility study with a quote and further information"
  }
];

const Solutions = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };
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
          <div className="mt-12 text-center">
        <h2 className="text-4xl font-bold text-[#00B4D8]">Quality Assurance Lab</h2>
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
          {/* Quality Assurance Video */}
          <div className="mt-12 flex justify-center">
        <video 
          src={solution} 
          controls 
          className="w-100 h-60 rounded-lg shadow-lg"
        >
          Your browser does not support the video tag.
        </video>
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

{/* Export Worthy Packaging Heading (Even Spacing) */}
<div className="mt-16 mb-10 text-center">
  <h2 className="text-4xl font-bold text-[#00B4D8]">Export Worthy Packaging</h2>
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
     {[P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12].map((image, index) => (
      <div key={index} className="p-2">
        <div className="w-full h-60 bg-white border border-gray-300 hover:border-blue-500 transition-all px-6 rounded-lg shadow-lg flex items-center justify-center">
          <img
            src={image}
            alt={`Packaging ${index + 1}`}
            className="w-full h-full object-contain p-2"
          />
        </div>
      </div>
      ))}
      </Slider>
      </div>
    
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-5xl font-bold text-[#00B4D8] mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6 max-w-4xl mx-auto">
  {faqs.map((faq) => (
    <div
      key={faq.id}
      className="bg-gray-900 rounded-xl overflow-hidden transition-all duration-200 border border-gray-800"
    >
      <button
        className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-800 transition-colors"
        onClick={() => toggleFAQ(faq.id)}
      >
        <span className="text-xl font-medium text-white">
          {faq.question}
        </span>
        {openId === faq.id ? (
          <ChevronUp className="h-6 w-6 text-[#00B4D8]" />
        ) : (
          <ChevronDown className="h-6 w-6 text-[#00B4D8]" />
        )}
        </button>
      
        <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          openId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        >
        <p className="px-8 py-6 text-gray-300 text-lg leading-relaxed border-t border-gray-800">
          {faq.answer}
        </p>
       </div>
       </div>
      ))}
      </div>
      </div>
              

      <div className="mb-0 pb-0">
  <h2 className="text-5xl font-bold text-center text-[#00B4D8] mb-16 opacity-0 animate-[fadeSlideUp_0.6s_ease-out_forwards]">
    TESTIMONIALS
  </h2>

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    {/* Testimonial 1 */}
    <div className="bg-[#001F3F] p-8 rounded-2xl shadow-lg relative opacity-0 animate-[fadeSlideUp_0.6s_ease-out_0.2s_forwards]">
      <Quote className="absolute top-4 left-4 w-8 h-8 text-[#00B4D8] opacity-30" />
      <div className="space-y-4">
        <p className="text-gray-200 italic relative z-10 leading-relaxed">
          "We have been partnering with Synergy Global Sourcing for over 9 years now. Our journey together has been both rewarding and built on trust, commitment, and growth—some might say we have 'Synergy' together. We have experienced unsurpassed professionalism working with Ketan, Nitin, and the rest of the Synergy Global Sourcing team. In 2017, Unit Electrical Engineering Ltd. (UEE) proudly presented Synergy Global Sourcing with our Outstanding Supplier Achievement Award, a decision made unanimously. We highly endorse Synergy Global Sourcing to any future clients."
        </p>
        <p className="text-[#00B4D8] font-semibold">Business Unit Head, Canada</p>
      </div>
    </div>

    {/* Testimonial 2 */}
    <div className="bg-[#001F3F] p-8 rounded-2xl shadow-lg relative opacity-0 animate-[fadeSlideUp_0.6s_ease-out_0.4s_forwards]">
      <Quote className="absolute top-4 left-4 w-8 h-8 text-[#00B4D8] opacity-30" />
      <div className="space-y-4">
        <p className="text-gray-200 italic relative z-10 leading-relaxed">
          "We have worked with Ketan and his team at Synergy for over 10 years, collaborating on many projects. They have consistently demonstrated openness, commitment, and dedication to finding cost-effective solutions for our sourcing challenges. We highly recommend Synergy Global Sourcing to any prospective client."
        </p>
        <p className="text-[#00B4D8] font-semibold">Vice President, USA (NJ)</p>
      </div>
    </div>

    {/* Testimonial 3 */}
    <div className="bg-[#001F3F] p-8 rounded-2xl shadow-lg relative opacity-0 animate-[fadeSlideUp_0.6s_ease-out_0.6s_forwards]">
      <Quote className="absolute top-4 left-4 w-8 h-8 text-[#00B4D8] opacity-30" />
      <div className="space-y-4">
        <p className="text-gray-200 italic relative z-10 leading-relaxed">
          "WestShore Engineering Inc. has had the pleasure of working with Ketan and Synergy Global Sourcing for over 10 years. Whenever Synergy is involved in a project, we have full confidence that the product will be accurate and of the highest quality. Their extensive engineering knowledge and professionalism make them one of our best vendors. We look forward to continuing our partnership with Synergy for many years to come."
        </p>
        <p className="text-[#00B4D8] font-semibold">Business President, USA</p>
      </div>
    </div>
  </div>
</div>




    </div>
  );
}

export default Solutions;