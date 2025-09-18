import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Truck, Phone, Lock, ArrowLeft, CreditCard } from 'lucide-react';
import AuthCard from '../../components/AuthCard';

const DriverLogin: React.FC = () => {
  const [loginType, setLoginType] = useState<'phone' | 'driverId'>('phone');
  const [formData, setFormData] = useState({
    phoneOrId: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add login logic here
    console.log('Driver login:', formData);
    navigate('/driver/dashboard');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white py-16">
      <div className="container mx-auto px-4">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <AuthCard
          title="Welcome Back, Driver!"
          subtitle="Sign in to manage your bus operations and serve passengers"
          icon={<Truck className="w-8 h-8 text-green-600" />}
          variant="green"
        >
          {/* Login Type Selector */}
          <div className="mb-6">
            <div className="flex rounded-lg bg-gray-100 p-1">
              <button
                type="button"
                onClick={() => setLoginType('phone')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  loginType === 'phone'
                    ? 'bg-white text-green-600 shadow-sm'
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                Phone Number
              </button>
              <button
                type="button"
                onClick={() => setLoginType('driverId')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  loginType === 'driverId'
                    ? 'bg-white text-green-600 shadow-sm'
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                Driver ID
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="phoneOrId" className="block text-sm font-medium text-gray-700 mb-2">
                {loginType === 'phone' ? 'Phone Number' : 'Driver ID'}
              </label>
              <div className="relative">
                {loginType === 'phone' ? (
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                ) : (
                  <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                )}
                <input
                  type={loginType === 'phone' ? 'tel' : 'text'}
                  id="phoneOrId"
                  name="phoneOrId"
                  value={formData.phoneOrId}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder={loginType === 'phone' ? 'Enter your phone number' : 'Enter your Driver ID'}
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
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors duration-200 font-semibold"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              New driver?{' '}
              <Link to="/driver/signup" className="text-green-600 hover:text-green-700 font-semibold">
                Register here
              </Link>
            </p>
          </div>
        </AuthCard>
      </div>
    </div>
  );
};

export default DriverLogin;