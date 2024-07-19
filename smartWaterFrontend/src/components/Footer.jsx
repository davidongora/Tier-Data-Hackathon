// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-green-700 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4 md:gap-y-0">
        <div className="text-white  gap-24 mr-24">
          <p className="mr-16 text-[24px] font-bold" >smartfarm</p>
          < br/>< br/>
          <p>Personalized crop recommendations based on real-time weather data </p>
        </div>
        
        {/* Quick Links */}
        <div className="text-white">
          <p className="font-bold mb-2">Quick Links:</p>
          <div className="grid gap-2">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/features">Features</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
          </div>
        </div>
        
        {/* Newsletter Signup */}
        <div className="text-white">
          <p className="font-bold mb-2">Newsletter Signup</p>
          <input
            id="newsletter"
            type="text"
            placeholder="Subscribe to our newsletter for the latest updates."
            className="border p-2 w-full bg-white rounded text-black"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
