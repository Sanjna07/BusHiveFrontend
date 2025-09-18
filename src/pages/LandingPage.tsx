import React from 'react';
import { Link } from 'react-router-dom';
import { User, Truck, ArrowRight } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Welcome to <span className="text-orange-600">BusHive</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your smart companion for bus tracking and management. Choose your role to get started.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* User Option */}
            <Link to="/user/login" className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-orange-100 hover:border-orange-200 transform hover:-translate-y-1">
                <div className="text-center">
                  <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                    <User className="w-10 h-10 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">I'm a User</h3>
                  <p className="text-gray-600 mb-6">
                    Track buses, plan your journey, and get real-time updates on your favorite routes.
                  </p>
                  <div className="flex items-center justify-center text-orange-600 group-hover:text-orange-700 font-semibold">
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Driver/Conductor Option */}
            <Link to="/driver/login" className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-green-100 hover:border-green-200 transform hover:-translate-y-1">
                <div className="text-center">
                  <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                    <Truck className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">I'm a Driver/Conductor</h3>
                  <p className="text-gray-600 mb-6">
                    Manage your bus operations, clock in/out, and provide real-time updates to passengers.
                  </p>
                  <div className="flex items-center justify-center text-green-600 group-hover:text-green-700 font-semibold">
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose BusHive?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚌</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Real-time Tracking</h3>
              <p className="text-gray-600 text-sm">Get live updates on bus locations and arrival times</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Quick & Easy</h3>
              <p className="text-gray-600 text-sm">Simple interface for both passengers and drivers</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Mobile Friendly</h3>
              <p className="text-gray-600 text-sm">Works perfectly on all devices and screen sizes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;