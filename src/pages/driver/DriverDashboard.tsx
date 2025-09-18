import React, { useState, useEffect } from 'react';
import { User, Bus, History, Calendar } from 'lucide-react';

const DriverDashboard: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Mock driver data
  const driverData = {
    name: 'Ravi Kumar',
    busNumber: 'KL-07-AX-1234',
    driverId: '1234',
    route: 'Tech Park → City Mall → Railway Station'
  };

  // Mock clock history
  const clockHistory = [
    { date: '2024-01-15', clockIn: '06:30 AM', clockOut: '02:30 PM', totalHours: '8:00' },
    { date: '2024-01-14', clockIn: '06:45 AM', clockOut: '02:45 PM', totalHours: '8:00' },
    { date: '2024-01-13', clockIn: '06:30 AM', clockOut: '02:15 PM', totalHours: '7:45' },
    { date: '2024-01-12', clockIn: '06:40 AM', clockOut: '02:40 PM', totalHours: '8:00' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit',
      hour12: true 
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <User className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{driverData.name}</h1>
                <p className="text-gray-600">Driver ID: {driverData.driverId}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-2 text-green-600 mb-1">
                <Bus className="w-5 h-5" />
                <span className="font-semibold text-lg">{driverData.busNumber}</span>
              </div>
              <p className="text-sm text-gray-600">{driverData.route}</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* History Section */}
          <div className="bg-white rounded-lg shadow-md p-6 lg:col-span-2">
            <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
              <History className="w-5 h-5 mr-2 text-gray-600" />
              Clock History
            </h2>

            <div className="space-y-4">
              {clockHistory.map((day, index) => (
                <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="font-medium text-gray-800">{day.date}</span>
                    </div>
                    <span className="text-sm font-semibold text-green-600">{day.totalHours}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div>
                      <span className="text-gray-500">Clock In:</span>
                      <span className="ml-2 font-medium">{day.clockIn}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Clock Out:</span>
                      <span className="ml-2 font-medium">{day.clockOut}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Weekly Summary */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-2xl font-bold text-blue-600">32:45</p>
                  <p className="text-sm text-blue-800">This Week</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-2xl font-bold text-green-600">4</p>
                  <p className="text-sm text-green-800">Days Active</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-2xl font-bold text-orange-600">156</div>
            <div className="text-sm text-gray-600">Total Trips</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-2xl font-bold text-blue-600">4.3</div>
            <div className="text-sm text-gray-600">Avg Rating</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-2xl font-bold text-green-600">98%</div>
            <div className="text-sm text-gray-600">On-Time</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverDashboard;