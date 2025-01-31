import React, { useState } from 'react';
import { MapPin, Mail } from 'lucide-react';

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
          <div className="bg-[#1a1a1a] p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-4">
              <MapPin className="w-6 h-6 text-[#00B4D8] mr-3" />
              <h3 className="text-xl font-semibold">Visit Our Facility</h3>
            </div>
            <p className="text-gray-400">
              Krishna Group Compound, SIPCOT Industrial Complex,
              Hosur - 635126, Tamil Nadu, India
            </p>
          </div>

          {/* Email Us */}
          <div className="bg-[#1a1a1a] p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-4">
              <Mail className="w-6 h-6 text-[#00B4D8] mr-3" />
              <h3 className="text-xl font-semibold">Email Us</h3>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400">India: mail@indiasynergy.com</p>
              <p className="text-gray-400">USA: mike@indiasynergy.com</p>
            </div>
          </div>

          {/* North America (Small Map) */}
          <div className="bg-[#1a1a1a] p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-4">
              <img
                src="https://cdn.britannica.com/33/4833-050-F6E415FE/Flag-United-States-of-America.jpg"
                alt="North America Map"
                className="w-6 h-6 rounded-md mr-3"
              />
              <h3 className="text-xl font-semibold">North America</h3>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400">Mike Swartzlander</p>
              <p className="text-gray-400">mike@indiasynergy.com</p>
              <p className="text-gray-400">+1-614-849-8257</p>
            </div>
          </div>

          {/* UK & Europe (Small Map) */}
          <div className="bg-[#1a1a1a] p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-4">
              <img
                src="https://cdn.britannica.com/29/22529-004-ED1907BE/Union-Flag-Cross-St-Andrew-of-George.jpg"
                alt="UK & Europe Map"
                className="w-6 h-6 rounded-md mr-3"
              />
              <h3 className="text-xl font-semibold">UK & Europe</h3>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400">Mike Ellis - ISS</p>
              <p className="text-gray-400">mikeellis@indiasynergy.com</p>
              <p className="text-gray-400">+44 7919 566937</p>
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
