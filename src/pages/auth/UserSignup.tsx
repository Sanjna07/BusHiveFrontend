import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Phone, Lock, ArrowLeft } from 'lucide-react';
import AuthCard from '../../components/AuthCard';

const UserSignup: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add signup logic here
    console.log('User signup:', formData);
    navigate('/user/dashboard');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white py-16">
      <div className="container mx-auto px-4">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <AuthCard
          title="Join BusHive as a User"
          subtitle="Create your account to start tracking buses and planning your journeys"
          icon={<User className="w-8 h-8 text-orange-600" />}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  placeholder="Create a password"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors duration-200 font-semibold"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/user/login" className="text-orange-600 hover:text-orange-700 font-semibold">
                Sign in here
              </Link>
            </p>
          </div>
        </AuthCard>
      </div>
    </div>
  );
};

export default UserSignup;