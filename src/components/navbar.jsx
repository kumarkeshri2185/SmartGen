import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from "../assets/images/Logo.jpeg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-black via-blue-900 to-black text-white p-4 shadow-2xl border-b border-blue-800">
      <div className="container mx-auto flex justify-between items-center relative z-50">
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="h-20 w-20 rounded-full"/>
            <span className="text-2xl font-bold text-blue-200 tracking-wider">
              SMARTGEN SPACEDTECH
            </span>
          </div>
          <p className="text-lg italic text-blue-300 transition duration-300 mt-1">
            A World of Possibilities
          </p>
        </div>
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {[
            { name: 'Home', path: '/', className: 'text-xl font-bold' },
            { name: 'About', path: '/about', className: 'text-xl font-bold' },
            { name: 'Services', path: '/services', className: 'text-xl font-bold' },
            { name: 'Media', path: '/media', className: 'text-xl font-bold' },
            { name: 'Contact', path: '/contact', className: 'text-xl font-bold' },
          ].map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className={`
                text-blue-200 hover:text-white transition duration-300 
                ${item.className || ''}
              `}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-gradient-to-r from-black via-blue-900 to-black md:hidden z-50">
            <div className="flex flex-col items-center space-y-4 p-6">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Media', path: '/media' },
                { name: 'Contact', path: '/contact' },
              ].map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  className="text-blue-200 hover:text-white w-full text-center py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;