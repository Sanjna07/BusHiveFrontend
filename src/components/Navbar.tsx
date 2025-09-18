import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, LogIn } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isLoggedIn = false; // Replace with actual auth state later

  return (
    <nav className="bg-white shadow-sm border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.jpeg" alt="BusHive" className="w-10 h-10" />
            <span className="text-xl font-bold text-orange-600">BusHive</span>
          </Link>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {!isLoggedIn && (
              <>
                <Link
                  to="/user/login"
                  className="flex items-center space-x-1 text-gray-600 hover:text-orange-600 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-orange-50"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Login</span>
                </Link>
                <Link
                  to="/"
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-200 flex items-center space-x-1"
                >
                  <User className="w-4 h-4" />
                  <span>Get Started</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;