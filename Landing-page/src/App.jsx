// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Faq from './components/Faq';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Client from './components/Client';
import About from './components/About';
import Work from './components/Work';
import Features from './components/Features';

import './Index.css';

import Logo from './assets/smartmeter.png';

function App() {
  return (
    <Router>
      <Navbar logo={Logo} />
      <Routes>
        <Route path="/" element={<>
          <Home />
          <About />
          <Features />
          <Client />
          <Testimonials />
          <Contact />
          <Work />
          <Faq />
        </>} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/how-it-works" element={<Client />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;