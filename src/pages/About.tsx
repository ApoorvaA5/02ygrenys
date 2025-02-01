import React, { useEffect, useRef } from 'react';
import { 
  ChevronDown, 
  Globe, 
  Target, 
  Users, 
  Award, 
  Briefcase, 
  Clock, 
  Building, 
  Star, 
  PenTool, 
  Box, 
  CheckCircle,
  ArrowRight,
  Play 
} from 'lucide-react';

import teamImg from '../assets/Team.jpg';

import CEO1 from '../assets/CEO-PIC.png';
import CEO2 from '../assets/ceo2Img.png';
import mission from '../assets/Mission.png';
import vision from '../assets/Vision.png';
const AboutUs = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white text-zinc-950">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-vector/isometric-lock-padlock-keyhole-cyber-security-information-network-protection-future-cyber-technology-web-services-business-internet-project_587448-1060.jpg')] bg-cover bg-center bg-fixed opacity-80" />
        <div className="relative z-10 text-center space-y-8 max-w-6xl mx-auto px-4">
          <h1 className="text-xl font-black bg-clip-text text-transparent bg-white  animate-fade-in">
            {/* ABOUT US */}
          </h1>
          <p className="text-3xl font-extrabold text-pretty  animate-fade-in-delayed">
            LET'S SYNERGIZE, YOUR GOALS ARE OURS!
          </p>
          <div className="text-center max-w-4xl mx-auto mb-16">
  <p className="text-xl text-gray-900 text-pretty leading-relaxed mb-8">
    At Synergy, our priority is to truly understand the expectations of global engineering OEMs and translate them into our key goals. We focus on delivering quality, value, and dependability in every project.
  </p>
</div>
          <ChevronDown className="w-12 h-12 mx-auto mt-12 animate-bounce text-blue-100" />
        </div>
      </section>

 
     


<div className="bg-gradient-to-b from-gray-50 to-white text-gray-800">
  {/* Three Card Section */}
  <section className="py-6 px-4">
    <div className="max-w-6xl px-8 mb-8 mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-slate-950">
          CORE VALUES
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Our guiding principles that drive success and innovation.
        </p>
      </div>

      {/* Card Layout */}
      <div className="grid md:grid-cols-3 gap-3">
        {[
          {
            title: "Vision",
            description:
              "To make India proud by being a role model socio-technical sourcing company with an ever-widening international market and supply chain that sources & delivers world-class engineering products, relying on indigenous process innovation, Kaizen, Total employee & stakeholder involvement, Supplier development and customer delight.",
            bgImage: vision,
          },

          {
            title: "Excellence",
            description:
              "Delivering quality that is consistent and dependable, offering real value and tangible savings, and ensuring timely, reliable delivery to exceed expectations.",
            bgImage: teamImg,
          },
          {
            title: "Mission",
            description:
              "Placing quality and customer satisfaction at the core of our culture, fostering collaboration across employees, suppliers, and stakeholders to achieve sustainable growth, while building technical expertise, embracing lean processes, and supporting inclusivity and innovation in alignment with the 'Make In India' vision.",
            bgImage: mission,
          },
        ].map((card, index) => (
          <div
            key={index}
            className="group relative bg-black p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border-t-4 border-transparent hover:border-blue-800"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 rounded-2xl bg-cover bg-center filter blur-md group-hover:blur-0  transition-all duration-500"
              style={{ backgroundImage: `url(${card.bgImage})` }}
            ></div>

            {/* Overlay to Darken Background for Better Text Visibility */}
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl"></div>

            {/* Card Content */}
            <div className="relative z-10 text-center">
              {/* Title */}
              <h4 className="text-4xl font-extrabold rounded-t-lg text-slate-300 bg-sky-500 brightness-125 mb-4 tracking-wide">
                {card.title}
              </h4>

              {/* Description */}
              <p className="text-white text-opacity-100 text-ellipsis leading-relaxed text-base md:text-lg">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
</div>








{/* WHO ARE WE SECTION */}
    <section className="bg-gradient-to-r from-blue-50 to-purple-50 px-6 lg:px-20 py-12">
  <div className="max-w-6xl mx-auto">
    {/* White Container with Flex Layout */}
    <div className="flex flex-col lg:flex-row bg-white p-8 rounded-2xl shadow-xl items-center gap-8 lg:gap-16">
      {/* Left Side - Image */}
      <div className="lg:w-1/2">
        <img
          src={teamImg}
          alt="Team or factory image"
          className="rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
        />
      </div>

      {/* Right Side - Text */}
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-4xl font-extrabold text-slate-950">
          WHO ARE WE?
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Since 2005, and with over eight decades of combined experience in the Indian engineering & manufacturing domain, our vast team comprises dedicated manufacturing & quality engineers and supply chain professionals. This expertise enables us to effectively manage your offshore sourcing & manufacturing programs. At Synergy, we ensure exceptional value in sourcing & delivering high-quality engineering products from India for global markets.
        </p>
      </div>
    </div>
  </div>
</section>

     {/* History Timeline */}
      <section className="px-6 lg:px-20 ">
        <h2 className="text-4xl text-center py-8 font-extrabold text-slate-950">
          OUR HISTORY
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-sky-400absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-purple-600" />
          <div className="-space-y-4">
            {[ 
              { year: "2005", event: "Founded as a consulting company", icon: Building },
              { year: "2007", event: "Evolved into a one-stop sourcing and 100% export house", icon: Globe },
              { year: "2014", event: "ISO9001-2015 certified by TUV-SUD South Asia", icon: Award },
              { year: "2016", event: "Commenced dedicated assembly facility", icon: PenTool },
              { year: "2018", event: "Forged partnerships with U.S. & Canadian OEMs for value-added contract manufacturing", icon: Users },
              { year: "2019", event: "National Star Performer Engineering Export award, Government of India", icon: Star },
              { year: "2020", event: "National Star Performer Engineering Export award, Government of India", icon: Star },
              { year: "2022", event: "Award for Export Excellence, Southern Region, Government of India", icon: Award },
              { year: "2023", event: "Assembly operations certified for ISO-9001-2015", icon: Award },
              { year: "2023", event: "Award for Export Excellence, Southern Region, Government of India", icon: Star },
              { year: "2023", event: "Platinum Award for 5S Excellence from ABK-AOT, Japan", icon: Award },
              { year: "2025", event: "Approved by ASME A112.18.2/CSA B125.2, ANSI/NSF 2, NSF/ANSI 372 (Lead Content), NSF/ANSI/CAN 61, ASME A112.18.1 / CSA B125.1, PED 2014/68/EU directive, CE standards, RoHs compliance", icon: Box }
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-on-scroll`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <div className="bg-slate-100 p-6 rounded-xl shadow-lg hover:shadow-sky-600 transition-all duration-300">
                    <div className="flex items-center space-x-4 mb-2">
                      <item.icon className="w-6 h-6 text-blue-600" />
                      <span className="text-xl font-extrabold text-blue-600">{item.year}</span>
                    </div>
                    <p className="text-lg text-justify">{item.event}</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-center ">
                  <div className="h-8 w-8 bg-blue-600 rounded-full border-4 border-white shadow" />
                </div>
                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Talk Section */}
      <section className="bg-gradient-to-b from-blue-50 to-purple-50 mt-12 px-6">
  <div className="container mx-auto max-w-6xl">
    {/* Section Title */}
    <h2 className="text-4xl text-center  py-8 font-extrabold text-slate-950">
       WORDS FROM OUR CEO
    </h2>

    {/* Content */}
    <div className="flex px-6 flex-col lg:flex-row items-center gap-12">
      {/* Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left space-y-6">
        <h3 className="text-3xl font-bold text-gray-900">
          A Vision for Excellence
        </h3>
        <p className="text-lg text-gray-800 leading-relaxed">
          Listen to our CEO share his vision for Synergy, our commitment to excellence in manufacturing, and the importance of fostering global partnerships. At Synergy, we strive to deliver unmatched quality and value in all that we do.
        </p>
      </div>

      {/* Video Section */}
      <div className="lg:w-1/2 py-12 flex justify-center">
        <div className="w-full max-w-xl">
          <video
            controls
            className="rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 w-full"
          >
          
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Leadership Section */}
      <section className="container-2xl mx-auto px-6 py-10">
  {/* Section Title */}
  <h2 className="text-5xl font-extrabold text-center mb-10  text-black tracking-wide">
    OUR LEADERSHIP
  </h2>

  {/* Leadership Cards */}
  <div className="grid lg:grid-row-2 px-12 gap-16">
    {[
      {
        name: "MR. KETAN BC",
        role: "CEO",
        image: CEO1,
        description: `Over 30 years of international business experience in working with global industrial OEMs for growing manufacturing and exports from India for engineered components and products. Vast experience in supply chain management of precision machined parts, forgings, castings, metal stamping & precision fabrication, plastic and rubber molding, electrical motor coils & insulation & sub-assemblies. Vast industry experiences working with global OEMs in a variety of industry segments including Railways & Metro Transportation, Mining, Commercial Plumbing, Lawn & Garden Equipment, Earthmoving equipment, Forestry Equipment, Oil & Gas Pumps, Valves, Medical Equipment and more. 
        Involved in the implementation of technical collaborations and Joint Ventures between India and U.S. based corporations. 
        Have led the organisation to develop over 300+ manufacturing partners in India for over 2000+ components, sub-assemblies and contract manufactured finished products for 100% export to OEM clients globally.`,
        contact: "ketan@indiasynergy.com",
      },
      {
        name: "MR. MIKE SWARTZLANDER",
        role: "Marketing Director, North America",
        image: CEO2,
        description: `Mr. Mike Swartzlander combines 35 years of experience in all aspects of global manufacturing and sourcing for Fortune 500 OEMs with a rich background in and understanding of India. Mike has been doing business in India since 1981 and lived in Mumbai for several years. Located now in North Carolina near Asheville, Mike is managing the marketing and sales for Synergy in the USA.`,
        contact: "mike@indiasynergy.com",
        phone: "+1-614-849-8257",
      },
    ].map((leader, index) => (
      <div
        key={index}
        className="group relative bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-100 border border-gray-100"
      >
        {/* Glow Effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl opacity-10 group-hover:opacity-100 blur-xl transition duration-500"></div>

        <div className="relative flex flex-col lg:flex-row items-center gap-8">
        
          <img
            src={leader.image}
            alt={leader.name}
            className="w-48 h-48 rounded-full object-cover shadow-lg transform group-hover:scale-105 transition duration-500"
          />

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-gray-800 mb-3">{leader.name}</h3>
            <p className="text-sky-600 text-lg font-semibold mb-4">{leader.role}</p>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              {leader.description}
            </p>

            {/* Contact Information */}
            <div className="space-y-2">
              <p className="text-gray-600 text-lg">
                📧 <span className="font-medium">{leader.contact}</span>
              </p>
              {leader.phone && (
                <p className="text-gray-600 text-lg">
                  📞 <span className="font-medium">{leader.phone}</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
    </div>
  );
};

export default AboutUs;