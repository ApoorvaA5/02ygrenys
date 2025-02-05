import React, { useState } from 'react';
import { Mail, MapPin, Phone } from "lucide-react"; 
import usa from '../assets/usa.png';
import uk from '../assets/uk.png';
import canada from '../assets/canada.png';
import eruope from '../assets/eruope.png';
import india from '../assets/india.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-center mb-4 text-[#00B4D8]">Contact Us</h1>
        <p className="text-xl text-center text-gray-400 mb-16">Get in touch with our team</p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
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

          {/* North America (Small Map) */}
          <div className="bg-[#1a1a1a] p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-4">
            <img src={usa} alt="USA Flag" className="w-6 h-6 rounded-md mr-3" />
              <h3 className="text-xl font-semibold">North America</h3>
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

          {/* UK & Europe (Small Map) */}
          <div className="bg-[#1a1a1a] p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-4">
            <img src={uk} alt="UK Flag" className="w-6 h-6 rounded-md mr-3" />
              <h3 className="text-xl font-semibold">UK & Europe</h3>
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

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Get In Touch With Us</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#1a1a1a] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#1a1a1a] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#1a1a1a] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 bg-[#1a1a1a] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#00B4D8] text-white py-4 rounded-lg font-semibold hover:bg-[#0096B4] transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
