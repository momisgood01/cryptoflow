import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="bg-[rgb(28,33,47)] shadow fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="text-3xl font-bold">
              
              <span className="text-white">Crypto</span>
              <span className="text-[#9b87f5]">Flow</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-[#9b87f5]">
              Features
            </Link>
            <Link to="/about" className="text-white hover:text-[#9b87f5]">
              How it works
            </Link>
            <Link to="/services" className="text-white hover:text-[#9b87f5]">
              Testimonials
            </Link>
            <Link to="/contact" className="text-white hover:text-[#9b87f5]">
              Pricing
            </Link>
            <Link to="/contact" className="text-white hover:text-[#9b87f5]">
                FAQs
            </Link>  
          </div>



          <div className="hidden md:flex items-center space-x-6">  
            <Link
              to="/signup"
              className="px-4 py-2  text-white rounded hover:bg-[#9b87f5] transition"
            >
              Log In
            </Link>

            <Link
              to="/signup"
              className="px-4 py-2 bg-[#9b87f5] text-white rounded hover:bg-[#a99ed8] transition"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen((s) => !s)}
              aria-expanded={isOpen}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b87f5]"
            >
              {isOpen ? (
                /* Close icon */
                <svg className="w-6 h-6 " viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                /* Hamburger icon */
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (collapsible) */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 transition-max-height duration-200 ease-out overflow-hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="px-4 pt-3 pb-4 space-y-2">
          <Link to="/" className="block py-2 text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="block py-2 text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/services" className="block py-2 text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link to="/contact" className="block py-2 text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>
            Contact
          </Link>

          <Link
            to="/signup"
            className="block px-4 py-2 bg-blue-600 text-white rounded-full text-center hover:bg-blue-700 transition"
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
