import React, { useState } from "react";
import { User, Truck, ArrowRight } from "lucide-react";
import UserLogin from "./auth/UserLogin";
import DriverLogin from "./auth/DriverLogin";
const LandingPage: React.FC = () => {
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isDriverModalOpen, setIsDriverModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Welcome to <span className="text-orange-600">BusHive</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your smart companion for bus tracking and management. Choose your
            role to get started.
          </p>
        </div>

        {/* Options */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* User Option */}
            <div
              onClick={() => setIsUserModalOpen(true)}
              className="cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-orange-100 hover:border-orange-200 transform hover:-translate-y-1"
            >
              <div className="text-center">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                  <User className="w-10 h-10 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  I'm a User
                </h3>
                <p className="text-gray-600 mb-6">
                  Track buses, plan your journey, and get real-time updates on
                  your favorite routes.
                </p>
                <div className="flex items-center justify-center text-orange-600 group-hover:text-orange-700 font-semibold">
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </div>

            {/* Driver/Conductor Option */}
            <div
              onClick={() => setIsDriverModalOpen(true)}
              className="cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-green-100 hover:border-green-200 transform hover:-translate-y-1"
            >
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                  <Truck className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  I'm a Driver/Conductor
                </h3>
                <p className="text-gray-600 mb-6">
                  Manage your bus operations, clock in/out, and provide
                  real-time updates to passengers.
                </p>
                <div className="flex items-center justify-center text-green-600 group-hover:text-green-700 font-semibold">
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= User Modal ================= */}
      {isUserModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[500px] max-h-[90vh] overflow-y-auto shadow-lg relative">
            <button
              onClick={() => setIsUserModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>
            <UserLogin /> 
          </div>
        </div>
      )}

      {/* ================= Driver Modal ================= */}
      {isDriverModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[500px] max-h-[90vh] overflow-y-auto shadow-lg relative">
            <button
              onClick={() => setIsDriverModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>
            <DriverLogin /> 
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
