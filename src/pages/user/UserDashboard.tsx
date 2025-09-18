import React, { useState } from 'react';
import { Search, MapPin, Clock, Star, History, AlertTriangle, Coffee, Phone, Navigation } from 'lucide-react';
import SearchBar from '../../components/user/SearchBar';
import BusList from '../../components/user/BusList';
import MapView from '../../components/user/MapView';
import FavoritesList from '../../components/user/FavoritesList';
import TripHistory from '../../components/user/TripHistory';

const UserDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'search' | 'favorites' | 'history'>('search');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showMap, setShowMap] = useState(false);
  const [selectedBus, setSelectedBus] = useState<any>(null);

  const handleSearch = (from: string, to: string) => {
    // Mock search results
    const mockResults = [
      {
        id: 1,
        busNumber: 'KL-07-AX-1234',
        route: `${from} → ${to}`,
        eta: '5 mins',
        fare: '₹25',
        currentLocation: 'Near City Mall',
        capacity: { current: 32, total: 50 },
        driver: 'Ravi Kumar',
        rating: 4.2
      },
      {
        id: 2,
        busNumber: 'KL-07-BX-5678',
        route: `${from} → ${to}`,
        eta: '12 mins',
        fare: '₹25',
        currentLocation: 'Tech Park Junction',
        capacity: { current: 18, total: 45 },
        driver: 'Suresh Nair',
        rating: 4.5
      },
      {
        id: 3,
        busNumber: 'KL-07-CX-9012',
        route: `${from} → ${to}`,
        eta: '18 mins',
        fare: '₹25',
        currentLocation: 'Railway Station',
        capacity: { current: 41, total: 50 },
        driver: 'Anil Joseph',
        rating: 4.0
      }
    ];
    setSearchResults(mockResults);
    setShowMap(true);
  };

  const handleBusSelect = (bus: any) => {
    setSelectedBus(bus);
  };

  const quickActions = [
    { icon: AlertTriangle, label: 'Update Capacity', color: 'text-orange-600 bg-orange-100' },
    { icon: Clock, label: 'Report Delay', color: 'text-red-600 bg-red-100' },
    { icon: Coffee, label: 'Break Time', color: 'text-blue-600 bg-blue-100' },
    { icon: Phone, label: 'Emergency', color: 'text-purple-600 bg-purple-100' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome, User!</h1>
          <p className="text-gray-600">Where would you like to go today?</p>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {[
                { id: 'search', label: 'Search', icon: Search },
                { id: 'favorites', label: 'Favorites', icon: Star },
                { id: 'history', label: 'History', icon: History }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-orange-500 text-orange-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {activeTab === 'search' && (
              <div className="space-y-6">
                <SearchBar onSearch={handleSearch} />
                
                {searchResults.length > 0 && (
                  <>
                    <BusList 
                      buses={searchResults} 
                      onBusSelect={handleBusSelect}
                      selectedBus={selectedBus}
                    />
                  </>
                )}

                {/* Quick Actions */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {quickActions.map((action, index) => (
                      <button
                        key={index}
                        className="flex flex-col items-center space-y-2 p-4 rounded-lg border hover:shadow-md transition-all duration-200"
                      >
                        <div className={`p-3 rounded-full ${action.color}`}>
                          <action.icon className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{action.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'favorites' && <FavoritesList />}
            {activeTab === 'history' && <TripHistory />}
          </div>

          {/* Map/Side Panel */}
          <div className="lg:col-span-1">
            {showMap && activeTab === 'search' ? (
              <MapView selectedBus={selectedBus} />
            ) : (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <Navigation className="w-5 h-5 mr-2 text-orange-600" />
                  Live Updates
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="text-sm font-medium text-green-700">KL-07-AX-1234</p>
                    <p className="text-xs text-gray-600">Running on time • Next: Tech Park</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <p className="text-sm font-medium text-orange-700">KL-07-BX-5678</p>
                    <p className="text-xs text-gray-600">2 mins delay • Next: City Mall</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <p className="text-sm font-medium text-red-700">KL-07-CX-9012</p>
                    <p className="text-xs text-gray-600">5 mins delay • Traffic jam</p>
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

export default UserDashboard;