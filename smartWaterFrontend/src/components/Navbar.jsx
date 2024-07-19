import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ logo }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <div className="">
    <nav className="bg-white fixed w-full -mt-24 sm:border-b sm:border-gray-200 sm:shadow-md sm:mb-8 xl:mt-1 ">
    <div className="container mx-auto px-4 py-2 flex justify-between items-center ">
      <div className="flex items-center ">
        <img src={logo} className='w-16 h-16 mr-2' alt='logo'/>
        <Link to="/" className="text-2xl font-bold text-green-700">SmartFarm</Link>
      </div>
      <div className="hidden md:flex items-center text-lg gap-8 text-black">
        <Link to="/" className='hover:text-green-700'>Home</Link>
        <Link to="/about" className='hover:text-green-700'>About</Link>
        <Link to="/features" className='hover:text-green-700'>Features</Link>
        <Link to="/testimonials" className='hover:text-green-700'>Testimonials</Link>
        <Link to="/faq" className='hover:text-green-700'>FAQ</Link>
        <Link to="/contact" className='hover:text-green-700'>Contact</Link>
      </div>
      <div className="hidden md:flex gap-8 items-center">
        <Link to="/register" className="text-green-700">Register</Link>
        <Link to="/login" className="bg-green-700 text-white rounded-full px-4 py-1">Login</Link>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-green-700 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            )}
          </svg>
        </button>
      </div>
    </div>
    {menuOpen && (
      <div className="md:hidden bg-white shadow-md">
        <div className="flex flex-col text-lg gap-4 p-4">
          <Link to="/" className='hover:text-green-700' onClick={toggleMenu}>Home</Link>
          <Link to="/about" className='hover:text-green-700' onClick={toggleMenu}>About</Link>
          <Link to="/features" className='hover:text-green-700' onClick={toggleMenu}>Features</Link>
          <Link to="/testimonials" className='hover:text-green-700' onClick={toggleMenu}>Testimonials</Link>
          <Link to="/faq" className='hover:text-green-700' onClick={toggleMenu}>FAQ</Link>
          <Link to="/contact" className='hover:text-green-700' onClick={toggleMenu}>Contact</Link>
          <Link to="/register" className='hover:text-green-700' onClick={toggleMenu}>Register</Link>
          <Link to="/login" className='hover:text-green-700' onClick={toggleMenu}>Login</Link>
        </div>
      </div>
    )}
  </nav>
  </div>
);
}

export default Navbar;