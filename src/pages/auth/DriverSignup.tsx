import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Truck, User, Phone, CreditCard, ArrowLeft } from 'lucide-react';
import AuthCard from '../../components/AuthCard';

const DriverSignup: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    aadhaar: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add signup logic here
    console.log('Driver signup:', formData);
    navigate('/driver/verify-aadhaar', { state: { driverData: formData } });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const formatAadhaar = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    // Format as XXXX-XXXX-XXXX
    return digits.replace(/(\d{4})(\d{4})(\d{4})/, '$1-$2-$3').substr(0, 14);
  };

  const handleAadhaarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatAadhaar(e.target.value);
    setFormData({
      ...formData,
      aadhaar: formatted
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
          title="Join BusHive as a Driver"
          subtitle="Register to start managing your bus operations and serving passengers"
          icon={<Truck className="w-8 h-8 text-green-600" />}
          variant="green"
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
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
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
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="aadhaar" className="block text-sm font-medium text-gray-700 mb-2">
                Aadhaar Number
              </label>
              <div className="relative">
                <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  id="aadhaar"
                  name="aadhaar"
                  value={formData.aadhaar}
                  onChange={handleAadhaarChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="XXXX-XXXX-XXXX"
                  maxLength={14}
                  required
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Your Aadhaar will be verified for security purposes
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors duration-200 font-semibold"
            >
              Continue to Verification
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already registered?{' '}
              <Link to="/driver/login" className="text-green-600 hover:text-green-700 font-semibold">
                Sign in here
              </Link>
            </p>
          </div>
        </AuthCard>
      </div>
    </div>
  );
};

export default DriverSignup;