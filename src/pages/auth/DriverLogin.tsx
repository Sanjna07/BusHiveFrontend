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
    <div className="flex items-center justify-center px-4 py-4">
      <div className="w-full max-w-sm">
        <AuthCard
          title="Welcome Back, Driver!"
          subtitle="Sign in to manage your bus operations and serve passengers"
          icon={
            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-[#414a37]">
              <Truck className="w-6 h-6 text-[#ece6e1]" />
            </div>
          }
        >
          {/* Login Type Selector */}
          <div className="mb-6">
            <div className="flex rounded-lg bg-[#f7f2eb] p-1">
              <button
                type="button"
                onClick={() => setLoginType('phone')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  loginType === 'phone'
                    ? 'bg-white text-[#414a37] shadow-sm'
                    : 'text-gray-600 hover:text-[#414a37]'
                }`}
              >
                Phone Number
              </button>
              <button
                type="button"
                onClick={() => setLoginType('driverId')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  loginType === 'driverId'
                    ? 'bg-white text-[#414a37] shadow-sm'
                    : 'text-gray-600 hover:text-[#414a37]'
                }`}
              >
                Driver ID
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="phoneOrId" className="block text-sm font-medium text-gray-700 mb-1">
                {loginType === 'phone' ? 'Phone Number' : 'Driver ID'}
              </label>
              <div className="relative">
                {loginType === 'phone' ? (
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#99744a] w-4 h-4" />
                ) : (
                  <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#99744a] w-4 h-4" />
                )}
                <input
                  type={loginType === 'phone' ? 'tel' : 'text'}
                  id="phoneOrId"
                  name="phoneOrId"
                  value={formData.phoneOrId}
                  onChange={handleChange}
                  className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#99744a] focus:border-transparent transition-all duration-200 text-sm"
                  placeholder={loginType === 'phone' ? 'Enter your phone number' : 'Enter your Driver ID'}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#99744a] w-4 h-4" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#99744a] focus:border-transparent transition-all duration-200 text-sm"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#ece6e1] text-[#414a37] py-2.5 rounded-lg hover:bg-[#ece6e1]/90 transition-colors duration-200 font-semibold text-sm"
            >
              Sign In
            </button>
          </form>

          <div className="mt-4 text-center text-sm">
            <p className="text-gray-600">
              New driver?{' '}
              <Link to="/driver/signup" className="text-[#99744a] hover:text-[#99744a]/80 font-semibold">
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
