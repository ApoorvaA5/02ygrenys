import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import Logo from '../assets/logo.png'; // Import the logo
import IndiaVideo from '../assets/india.mp4'; // Import the India video

const productCategories = [
  { title: 'Castings', path: '/products/casting' },
  { title: 'Metal Stampings And Fabrication', path: '/products/metal-stamping' },
  { title: 'Dies, Tools & Moulds', path: '/products/dies-tools' },
  { title: 'Machined Components', path: '/products/machined-components' },
  { title: 'Electric Motor Coils', path: '/products/electric-motor-coils' },
  { title: 'Forgings', path: '/products/forgings' },
  { title: 'Plastics, Composites And Rubber Parts', path: '/products/plastics-composites' }
];

const solutionCategories = [
  { title: 'Supplier Research', path: '/solutions/supplier-research' },
  { title: 'Supplier Development', path: '/solutions/supplier-development' },
  { title: 'Supplier Management Initiatives', path: '/solutions/supplier-management' },
  { title: 'Quality Assurance', path: '/solutions/quality-assurance' },
  { title: 'Packaging', path: '/solutions/packaging' }
];

const Navbar = () => {
  const location = useLocation();
  const [showProductsMenu, setShowProductsMenu] = useState(false);
  const [showSolutionsMenu, setShowSolutionsMenu] = useState(false);
  const productsDropdownRef = useRef<HTMLDivElement>(null);
  const solutionsDropdownRef = useRef<HTMLDivElement>(null);
  const productsTimeoutRef = useRef<number | null>(null);
  const solutionsTimeoutRef = useRef<number | null>(null);
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-[#00B4D8]' : 'text-white';
  };

  const handleProductsMouseEnter = () => {
    if (productsTimeoutRef.current) {
      window.clearTimeout(productsTimeoutRef.current);
    }
    setShowProductsMenu(true);
  };

  const handleProductsMouseLeave = () => {
    productsTimeoutRef.current = window.setTimeout(() => {
      setShowProductsMenu(false);
    }, 150);
  };

  const handleSolutionsMouseEnter = () => {
    if (solutionsTimeoutRef.current) {
      window.clearTimeout(solutionsTimeoutRef.current);
    }
    setShowSolutionsMenu(true);
  };

  const handleSolutionsMouseLeave = () => {
    solutionsTimeoutRef.current = window.setTimeout(() => {
      setShowSolutionsMenu(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (productsTimeoutRef.current) {
        window.clearTimeout(productsTimeoutRef.current);
      }
      if (solutionsTimeoutRef.current) {
        window.clearTimeout(solutionsTimeoutRef.current);
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
          <Link to="/products" className={`hover:text-[#00B4D8] transition-colors ${isActive('/products')}`}>Products</Link>
          
          {/* Solutions Dropdown */}
          <div 
            ref={solutionsDropdownRef}
            className="relative"
            onMouseEnter={handleSolutionsMouseEnter}
            onMouseLeave={handleSolutionsMouseLeave}
          >
            <button 
              className={`flex items-center space-x-1 hover:text-[#00B4D8] transition-colors ${
                location.pathname.includes('/solutions') ? 'text-[#00B4D8]' : 'text-white'
              }`}
            >
              <span>Solutions</span>
              <ChevronDown className={`w-4 h-4 transform transition-transform duration-200 ${showSolutionsMenu ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Solutions Dropdown Menu */}
            <div 
              className={`absolute left-0 top-full mt-2 w-64 bg-[#1a1a1a] rounded-lg shadow-xl py-2 z-50 transform transition-all duration-200 ${
                showSolutionsMenu 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              {solutionCategories.map((category, index) => (
                <Link
                  key={index}
                  to={category.path}
                  className="block px-4 py-2.5 text-gray-300 hover:bg-[#2a2a2a] hover:text-[#00B4D8] transition-colors"
                >
                  {category.title}
                </Link>
              ))}
            </div>
          </div>
          
          <Link to="/contact" className={`hover:text-[#00B4D8] transition-colors ${isActive('/contact')}`}>Contact Us</Link>
          <Link to="/blog" className={`hover:text-[#00B4D8] transition-colors ${isActive('/blog')}`}>Blog</Link>
        </div>

        {/* Flags Section Restored */}
        <div className="hidden md:flex items-center space-x-4">
          <img src="https://cdn.britannica.com/33/4833-050-F6E415FE/Flag-United-States-of-America.jpg" alt="USA Flag" className="w-8 h-5 object-cover" />
          <img src="https://cdn.britannica.com/66/96866-050-BBAE91CE/Flag-European-Union.jpg" alt="EU Flag" className="w-8 h-5 object-cover" />
          <img src="https://cdn.britannica.com/68/7068-050-54679E29/Flag-Canada.jpg" alt="Canada Flag" className="w-8 h-5 object-cover" />
          <img src="https://cdn.britannica.com/29/22529-004-ED1907BE/Union-Flag-Cross-St-Andrew-of-George.jpg" alt="UK Flag" className="w-8 h-5 object-cover" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

