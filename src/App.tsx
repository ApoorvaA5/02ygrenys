import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import SupplierResearch from './pages/solutions/SupplierResearch';
import SupplierDevelopment from './pages/solutions/SupplierDevelopment';
import SupplierManagement from './pages/solutions/SupplierManagement';
import QualityAssurance from './pages/solutions/QualityAssurance';
import Packaging from './pages/solutions/Packaging';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/solutions/supplier-research" element={<SupplierResearch />} />
        <Route path="/solutions/supplier-development" element={<SupplierDevelopment />} />
        <Route path="/solutions/supplier-management" element={<SupplierManagement />} />
        <Route path="/solutions/quality-assurance" element={<QualityAssurance />} />
        <Route path="/solutions/packaging" element={<Packaging />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
