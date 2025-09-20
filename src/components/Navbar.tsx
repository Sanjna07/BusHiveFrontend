import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, Menu, X, Route as RouteIcon, MapPin, Home, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Placeholder for auth state

  const navLinks = [
    { name: 'Home', href: '/', icon: <Home className="h-5 w-5" /> },
    { name: 'Driver', href: '/driver/login', icon: <RouteIcon className="h-5 w-5" /> },
    { name: 'Live Map', href: '/map', icon: <MapPin className="h-5 w-5" /> },
    { name: 'Contact Us', href: '/contact', icon: <Mail className="h-5 w-5" /> },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-[#99744A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/public/logo1.jpeg"
              alt="BusHive Logo"
              className="h-36 w-36 -mt-1 object-contain" // bigger logo
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-200 transform text-[#99744A] hover:text-[#414A37] hover:scale-110`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}

            {isLoggedIn ? (
              <div className="relative group">
                <button className="flex items-center space-x-1 text-[#414A37] hover:text-[#99744A] transition-colors duration-200 px-3 py-2 rounded-md hover:bg-[#DBC2A6]">
                  <User className="h-4 w-4 text-[#99744A]" />
                  <span>Account</span>
                </button>
              </div>
            ) : (
              <Link
                to="/get-started"
                className="bg-[#414A37] text-[#DBC2A6] px-4 py-2 rounded-lg hover:bg-[#2F362C] transition-colors duration-200 flex items-center space-x-1"
              >
                <User className="w-4 h-4 text-[#DBC2A6]" />
                <span>Get Started</span>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-[#99744A] hover:text-[#414A37] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#414A37]"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div
          className={`absolute inset-0 bg-white bg-opacity-75 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        ></div>
        <div
          className={`relative z-50 bg-[#F7F2EB] w-full h-full transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } flex flex-col items-center justify-center p-8`}
        >
          <div className="absolute top-4 right-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-md text-[#414A37] hover:text-[#99744A] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#99744A]"
            >
              <span className="sr-only">Close main menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-medium text-[#414A37] hover:text-[#99744A] hover:scale-110 transition-all duration-200 transform"
              >
                {link.name}
              </Link>
            ))}
            {isLoggedIn ? (
              <button
                onClick={() => setIsLoggedIn(false)}
                className="text-2xl font-medium text-[#414A37] hover:text-[#99744A] transition-colors"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/get-started"
                onClick={() => setIsMenuOpen(false)}
                className="w-full text-center bg-[#414A37] text-[#DBC2A6] px-8 py-4 rounded-lg text-2xl font-bold hover:bg-[#2F362C] transition-colors"
              >
                Get Started
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
