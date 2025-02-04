import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png'; // Import the logo
import IndiaVideo from '../assets/india.mp4'; // Import the India video
import { ChevronDown } from 'lucide-react';

const productCategories = [
  { title: 'Castings', path: '/products/casting' },
  { title: 'Metal Stampings And Fabrication', path: '/products/metal-stamping' },
  { title: 'Dies, Tools & Moulds', path: '/products/dies-tools' },
  { title: 'Machined Components', path: '/products/machined-components' },
  { title: 'Electric Motor Coils', path: '/products/electric-motor-coils' },
  { title: 'Forgings', path: '/products/forgings' },
  { title: 'Plastics, Composites And Rubber Parts', path: '/products/plastics-composites' },
  { title: 'WireForming', path: '/products/wireforming' }
];

const Navbar = () => {
  const location = useLocation();
  const [showProductsMenu, setShowProductsMenu] = useState(false);
  const productsDropdownRef = useRef(null);
  const productsTimeoutRef = useRef(null);

  const isActive = (path) => (location.pathname === path ? 'text-[#00B4D8]' : 'text-white');

  const handleProductsMouseEnter = () => {
    if (productsTimeoutRef.current) {
      clearTimeout(productsTimeoutRef.current);
    }
    setShowProductsMenu(true);
  };

  const handleProductsMouseLeave = () => {
    productsTimeoutRef.current = setTimeout(() => {
      setShowProductsMenu(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (productsTimeoutRef.current) {
        clearTimeout(productsTimeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="bg-black text-white py-4">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img src={Logo} alt="Synergy Logo" className="h-10 object-contain" />
          </Link>
          <video
            src={IndiaVideo}
            className="w-12 h-12 rounded-full object-cover"
            autoPlay
            muted
            loop
          ></video>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`hover:text-[#00B4D8] transition-colors ${isActive('/')}`}>Home</Link>
          <Link to="/about" className={`hover:text-[#00B4D8] transition-colors ${isActive('/about')}`}>About Us</Link>
          
          {/* Products Dropdown */}
          <div 
            ref={productsDropdownRef}
            className="relative"
            onMouseEnter={handleProductsMouseEnter}
            onMouseLeave={handleProductsMouseLeave}
          >
            <button 
              className={`flex items-center space-x-1 hover:text-[#00B4D8] transition-colors ${
                location.pathname.includes('/products') ? 'text-[#00B4D8]' : 'text-white'
              }`}
            >
              <span>Products</span>
              <ChevronDown className={`w-4 h-4 transform transition-transform duration-200 ${showProductsMenu ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Products Dropdown Menu */}
            <div 
              className={`absolute left-0 top-full mt-2 w-64 bg-[#1a1a1a] rounded-lg shadow-xl py-2 z-50 transform transition-all duration-200 ${
                showProductsMenu 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              {productCategories.map((category) => (
                <Link
                  key={category.path}
                  to={category.path}
                  className="block px-4 py-2.5 text-gray-300 hover:bg-[#2a2a2a] hover:text-[#00B4D8] transition-colors"
                >
                  {category.title}
                </Link>
              ))}
            </div>
          </div>
          
          <Link to="/solutions" className={`hover:text-[#00B4D8] transition-colors ${isActive('/solutions')}`}>Solutions</Link>
          <Link to="/contact" className={`hover:text-[#00B4D8] transition-colors ${isActive('/contact')}`}>Contact Us</Link>
          <Link to="/blog" className={`hover:text-[#00B4D8] transition-colors ${isActive('/blog')}`}>Blog</Link>
        </div>

        {/* Flags Section */}
        <div className="hidden md:flex items-center space-x-4">
          {[
            { src: "https://cdn.britannica.com/33/4833-050-F6E415FE/Flag-United-States-of-America.jpg", email: "usa@indiasynergy.com" },
            { src: "https://cdn.britannica.com/66/96866-050-BBAE91CE/Flag-European-Union.jpg", email: "europe@indiasynergy.com" },
            { src: "https://cdn.britannica.com/68/7068-050-54679E29/Flag-Canada.jpg", email: "canada@indiasynergy.com" },
            { src: "https://cdn.britannica.com/29/22529-004-ED1907BE/Union-Flag-Cross-St-Andrew-of-George.jpg", email: "uk@indiasynergy.com" }
          ].map((flag, index) => (
            <div key={index} className="relative group">
              <img src={flag.src} alt="Flag" className="w-8 h-5 object-cover" />
              <span className="absolute hidden group-hover:block text-sm bg-gray-700 text-white rounded p-1 mt-1 left-1/2 transform -translate-x-1/2">
                {flag.email}
              </span>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


















