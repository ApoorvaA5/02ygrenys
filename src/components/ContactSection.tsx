import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from "lucide-react"; 
import usa from '../assets/usa.png';
import uk from '../assets/uk.png';
import canada from '../assets/canada.png';
import eruope from '../assets/eruope.png';
import india from '../assets/india.jpg';



const ContactSection = () => {
  return (
    <div className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#00B4D8] opacity-0 animate-[fadeSlideUp_0.6s_ease-out_forwards]">
          Contact Us
        </h2>
        <p className="text-xl text-center text-gray-400 mb-16 opacity-0 animate-[fadeSlideUp_0.6s_ease-out_0.2s_forwards]">
          Get in touch with our global team
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Visit Our Facility */}
          <div className="bg-[#1a1a1a] p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 opacity-0 animate-[fadeSlideUp_0.6s_ease-out_0.3s_forwards]">
  {/* Header */}
  <div className="flex items-center mb-4">
    <MapPin className="w-6 h-6 text-[#00B4D8] mr-3" />
    <h3 className="text-xl font-semibold text-white">Visit Our Facility</h3>
  </div>

  {/* Address */}
  <p className="text-gray-400">
    Krishna Group Compound, SIPCOT Industrial Complex,  
    Hosur - 635126, Tamil Nadu, India
  </p>

  {/* Phone Number */}
  <div className="flex items-center mt-4">
    <Phone className="w-5 h-5 text-[#00B4D8] mr-3" />
    <p className="text-gray-400">+91 94887 77812</p>
  </div>
</div>

          {/* Email Us */}
          <div className="bg-[#1a1a1a] p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 opacity-0 animate-[fadeSlideUp_0.6s_ease-out_0.4s_forwards]">
      {/* Header */}
      <div className="flex items-center mb-4">
        <Mail className="w-6 h-6 text-[#00B4D8] mr-3" />
        <h3 className="text-xl font-semibold text-white">Email Us</h3>
      </div>

      {/* Email List with Flags */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <img src={india} alt="India" className="w-6 h-6 rounded-md mr-3" />
          <p className="text-gray-400">mail@indiasynergy.com</p>
        </div>

        <div className="flex items-center space-x-2">
          <img src={usa} alt="USA" className="w-6 h-6 rounded-md mr-3" />
          <p className="text-gray-400">usa@indiasynergy.com</p>
        </div>

        <div className="flex items-center space-x-2">
          <img src={eruope} alt="Europe" className="w-6 h-6 rounded-md mr-3" />
          <p className="text-gray-400">europe@indiasynergy.com</p>
        </div>

        <div className="flex items-center space-x-2">
          <img src={canada} alt="Canada" className="w-6 h-6 rounded-md mr-3" />
          <p className="text-gray-400">canada@indiasynergy.com</p>
        </div>

        <div className="flex items-center space-x-2">
          <img src={uk} alt="UK" className="w-6 h-6 rounded-md mr-3" />
          <p className="text-gray-400">uk@indiasynergy.com</p>
        </div>
      </div>
    </div>


          {/* North America (Small Map Icon) */}
          <div className="bg-[#1a1a1a] p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-4">
            <img src={usa} alt="USA Flag" className="w-6 h-6 rounded-md mr-3" />
              <h3 className="text-xl font-semibold text-white ">North America</h3>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400">Mike Swartzlander</p>
              <p className="text-gray-400">mike@indiasynergy.com</p>
              <div className="flex items-center mt-4">
              <Phone className="w-5 h-5 text-[#00B4D8] mr-3" />
              <p className="text-gray-400">+1-614-849-8257</p> 
              </div> 
            </div>
          </div>

          {/* UK & Europe (Small Map Icon) */}
          <div className="bg-[#1a1a1a] p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-4">
            <img src={uk} alt="UK Flag" className="w-6 h-6 rounded-md mr-3" />
              <h3 className="text-xl font-semibold  text-white">UK & Europe</h3>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400">Mike Ellis - ISS</p>
              <p className="text-gray-400">mikeellis@indiasynergy.com</p>
              <div className="flex items-center mt-4">
              <Phone className="w-5 h-5 text-[#00B4D8] mr-3" />
              <p className="text-gray-400">+44 7919 566937</p> 
              </div>
            </div>
          </div>
        </div>

        <div className="text-center opacity-0 animate-[fadeSlideUp_0.6s_ease-out_0.7s_forwards]">
          <Link 
            to="/contact"
            className="inline-block bg-[#00B4D8] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0096B4] transition-colors duration-300"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
