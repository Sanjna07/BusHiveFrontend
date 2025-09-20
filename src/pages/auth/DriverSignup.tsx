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
    <div className="flex items-center justify-center px-4 py-4">
      <div className="w-full max-w-sm">
        <AuthCard
          title="Join BusHive as a Driver"
          subtitle="Register to start managing your bus operations and serving passengers"
          icon={
            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-[#414a37]">
              <Truck className="w-6 h-6 text-[#ece6e1]" />
            </div>
          }
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#99744a] w-4 h-4" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#99744a] focus:border-transparent transition-all duration-200 text-sm"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#99744a] w-4 h-4" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#99744a] focus:border-transparent transition-all duration-200 text-sm"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="aadhaar" className="block text-sm font-medium text-gray-700 mb-1">
                Aadhaar Number
              </label>
              <div className="relative">
                <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#99744a] w-4 h-4" />
                <input
                  type="text"
                  id="aadhaar"
                  name="aadhaar"
                  value={formData.aadhaar}
                  onChange={handleAadhaarChange}
                  className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#99744a] focus:border-transparent transition-all duration-200 text-sm"
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
              className="w-full bg-[#ece6e1] text-[#414a37] py-2.5 rounded-lg hover:bg-[#ece6e1]/90 transition-colors duration-200 font-semibold text-sm"
            >
              Continue to Verification
            </button>
          </form>

          <div className="mt-4 text-center text-sm">
            <p className="text-gray-600">
              Already registered?{' '}
              <Link to="/driver/login" className="text-[#99744a] hover:text-[#99744a]/80 font-semibold">
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
