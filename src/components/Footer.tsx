import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1E2124] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Menu Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">MENU</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="flex items-center space-x-2 hover:text-[#00B4D8] transition-colors">
                  <Check className="w-4 h-4 text-[#00B4D8]" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="flex items-center space-x-2 hover:text-[#00B4D8] transition-colors">
                  <Check className="w-4 h-4 text-[#00B4D8]" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center space-x-2 hover:text-[#00B4D8] transition-colors">
                  <Check className="w-4 h-4 text-[#00B4D8]" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">PRODUCTS</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products/casting" className="flex items-center space-x-2 hover:text-[#00B4D8] transition-colors">
                  <Check className="w-4 h-4 text-[#00B4D8]" />
                  <span>Castings</span>
                </Link>
              </li>
              <li>
                <Link to="/products/metal-stamping" className="flex items-center space-x-2 hover:text-[#00B4D8] transition-colors">
                  <Check className="w-4 h-4 text-[#00B4D8]" />
                  <span>Metal Stampings and Fabrication</span>
                </Link>
              </li>
              <li>
                <Link to="/products/dies-tools" className="flex items-center space-x-2 hover:text-[#00B4D8] transition-colors">
                  <Check className="w-4 h-4 text-[#00B4D8]" />
                  <span>Dies, Tools & Moulds</span>
                </Link>
              </li>
              <li>
                <Link to="/products/machined-components" className="flex items-center space-x-2 hover:text-[#00B4D8] transition-colors">
                  <Check className="w-4 h-4 text-[#00B4D8]" />
                  <span>Machined Components</span>
                </Link>
              </li>
              <li>
                <Link to="/products/electric-motor-coils" className="flex items-center space-x-2 hover:text-[#00B4D8] transition-colors">
                  <Check className="w-4 h-4 text-[#00B4D8]" />
                  <span>Electric Motor Coils</span>
                </Link>
              </li>
              <li>
                <Link to="/products/forgings" className="flex items-center space-x-2 hover:text-[#00B4D8] transition-colors">
                  <Check className="w-4 h-4 text-[#00B4D8]" />
                  <span>Forgings</span>
                </Link>
              </li>
              <li>
                <Link to="/products/plastics-composites" className="flex items-center space-x-2 hover:text-[#00B4D8] transition-colors">
                  <Check className="w-4 h-4 text-[#00B4D8]" />
                  <span>Plastics, Composites and Rubber Parts</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Solution Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">SOLUTION</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/solutions#supplier-research" className="flex items-center space-x-2 hover:text-[#00B4D8] transition-colors">
                  <Check className="w-4 h-4 text-[#00B4D8]" />
                  <span>Supplier Research</span>
                </Link>
              </li>
              <li>
                <Link to="/solutions#supplier-development" className="flex items-center space-x-2 hover:text-[#00B4D8] transition-colors">
                  <Check className="w-4 h-4 text-[#00B4D8]" />
                  <span>Supplier Development</span>
                </Link>
              </li>
              <li>
                <Link to="/solutions#supplier-management" className="flex items-center space-x-2 hover:text-[#00B4D8] transition-colors">
                  <Check className="w-4 h-4 text-[#00B4D8]" />
                  <span>Supplier Management Initiatives</span>
                </Link>
              </li>
              <li>
                <Link to="/solutions#quality-assurance" className="flex items-center space-x-2 hover:text-[#00B4D8] transition-colors">
                  <Check className="w-4 h-4 text-[#00B4D8]" />
                  <span>Quality Assurance</span>
                </Link>
              </li>
              <li>
                <Link to="/solutions#packaging" className="flex items-center space-x-2 hover:text-[#00B4D8] transition-colors">
                  <Check className="w-4 h-4 text-[#00B4D8]" />
                  <span>Packaging</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">CONTACT INFO</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                <span className="font-semibold text-white">Address:</span> Krishna Group Compound
                SIPCOT Industrial Complex Hosur-635126 Tamilnadu, State, India.
              </p>
              <p>
                <span className="font-semibold text-white">E-mail:</span>{' '}
                <a href="mailto:mail@indiasynergy.com" className="text-[#00B4D8] hover:underline">
                  mail@indiasynergy.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-700 text-center">
          <div className="mb-4">
            <span className="text-3xl font-bold text-[#00B4D8]">Synergy</span>
          </div>
          <div className="text-sm text-gray-400 flex flex-wrap justify-center items-center gap-4">
            <span>© 2025 Indiasynergy.com. All Rights Reserved.</span>
            <Link to="/privacy-policy" className="text-[#00B4D8] hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;