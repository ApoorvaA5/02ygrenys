import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Building2, Globe } from 'lucide-react';

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
            <div className="flex items-center mb-4">
              <MapPin className="w-6 h-6 text-[#00B4D8] mr-3" />
              <h3 className="text-xl font-semibold text-white">Visit Our Facility</h3>
            </div>
            <p className="text-gray-400">
              Krishna Group Compound, SIPCOT Industrial Complex,
              Hosur - 635126, Tamil Nadu, India
            </p>
          </div>

          {/* Email Us */}
          <div className="bg-[#1a1a1a] p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 opacity-0 animate-[fadeSlideUp_0.6s_ease-out_0.4s_forwards]">
            <div className="flex items-center mb-4">
              <Mail className="w-6 h-6 text-[#00B4D8] mr-3" />
              <h3 className="text-xl font-semibold text-white">Email Us</h3>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400">India: mail@indiasynergy.com</p>
              <p className="text-gray-400">USA: mike@indiasynergy.com</p>
            </div>
          </div>

          {/* North America */}
          <div className="bg-[#1a1a1a] p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 opacity-0 animate-[fadeSlideUp_0.6s_ease-out_0.5s_forwards]">
            <div className="flex items-center mb-4">
              <Building2 className="w-6 h-6 text-[#00B4D8] mr-3" />
              <h3 className="text-xl font-semibold text-white">North America</h3>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400">Mike Swartzlander</p>
              <p className="text-gray-400">+1-614-849-8257</p>
            </div>
          </div>

          {/* UK & Europe */}
          <div className="bg-[#1a1a1a] p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 opacity-0 animate-[fadeSlideUp_0.6s_ease-out_0.6s_forwards]">
            <div className="flex items-center mb-4">
              <Globe className="w-6 h-6 text-[#00B4D8] mr-3" />
              <h3 className="text-xl font-semibold text-white">UK & Europe</h3>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400">Mike Ellis - ISS</p>
              <p className="text-gray-400">+44 7919 566937</p>
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