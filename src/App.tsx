import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';

import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Solutions from './pages/Solutions';
import Casting from './pages/products/Casting';
import MetalStamping from './pages/products/MetalStamping';
import DiesTools from './pages/products/DiesTools';
import MachinedComponents from './pages/products/MachinedComponents';
import ElectricMotorCoils from './pages/products/ElectricMotorCoils';
import Forgings from './pages/products/Forgings';
import PlasticsComposites from './pages/products/PlasticsComposites';
import WireForming from './pages/products/wireForming';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
       
        <Route path="/products/casting" element={<Casting />} />
        <Route path="/products/metal-stamping" element={<MetalStamping />} />
        <Route path="/products/dies-tools" element={<DiesTools />} />
        <Route path="/products/machined-components" element={<MachinedComponents />} />
        <Route path="/products/electric-motor-coils" element={<ElectricMotorCoils />} />
        <Route path="/products/forgings" element={<Forgings />} />
        <Route path="/products/plastics-composites" element={<PlasticsComposites />} />
        <Route path="/products/WireForming" element={<WireForming/>}/>
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

