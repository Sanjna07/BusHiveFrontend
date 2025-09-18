import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, MapPin, Clock, Plus, Car } from 'lucide-react';

const CarpoolPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'find' | 'offer'>('find');

  const carpoolOffers = [
    {
      id: 1,
      driver: 'Sarah Johnson',
      from: 'Tech Park',
      to: 'City Mall',
      time: '09:00 AM',
      date: '2024-01-16',
      seats: 3,
      price: '₹15',
      rating: 4.8
    },
    {
      id: 2,
      driver: 'Mike Chen',
      from: 'University',
      to: 'Railway Station',
      time: '02:30 PM',
      date: '2024-01-16',
      seats: 2,
      price: '₹12',
      rating: 4.6
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          to="/user/dashboard"
          className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Dashboard</span>
        </Link>

        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900 flex items-center">
              <Users className="w-6 h-6 mr-3 text-orange-600" />
              Find Carpool
            </h1>
            <p className="text-gray-600 mt-2">Share rides and save money</p>
          </div>

          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button
                onClick={() => setActiveTab('find')}
                className={`px-6 py-3 font-medium text-sm ${
                  activeTab === 'find'
                    ? 'border-b-2 border-orange-500 text-orange-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Find Rides
              </button>
              <button
                onClick={() => setActiveTab('offer')}
                className={`px-6 py-3 font-medium text-sm ${
                  activeTab === 'offer'
                    ? 'border-b-2 border-orange-500 text-orange-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Offer Ride
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'find' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500 w-4 h-4" />
                      <input
                        type="text"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500"
                        placeholder="Pick-up location"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500 w-4 h-4" />
                      <input
                        type="text"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500"
                        placeholder="Drop-off location"
                      />
                    </div>
                  </div>
                </div>

                <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors">
                  Search Carpools
                </button>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Available Rides</h3>
                  {carpoolOffers.map((offer) => (
                    <div key={offer.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold text-gray-900">{offer.driver}</h4>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <MapPin className="w-3 h-3" />
                            <span>{offer.from} → {offer.to}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-orange-600">{offer.price}</p>
                          <p className="text-xs text-gray-500">{offer.seats} seats left</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{offer.time}</span>
                          </div>
                          <span>{offer.date}</span>
                        </div>
                        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors text-sm">
                          Request Ride
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'offer' && (
              <div className="space-y-6">
                <div className="text-center py-8">
                  <Car className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Offer a Ride</h3>
                  <p className="text-gray-600 mb-6">Share your journey and earn some money</p>
                  
                  <div className="max-w-md mx-auto space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500"
                          placeholder="Starting point"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500"
                          placeholder="Destination"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                        <input
                          type="date"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                        <input
                          type="time"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Available Seats</label>
                        <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Price per seat</label>
                        <input
                          type="number"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500"
                          placeholder="₹"
                        />
                      </div>
                    </div>
                    
                    <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold">
                      Post Ride Offer
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarpoolPage;