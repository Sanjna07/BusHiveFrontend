import React, { useState } from 'react';
import { Search, MapPin, Clock, Star, History, AlertTriangle, Coffee, Phone, Navigation, Users, Route, MessageSquare, Settings, UserCheck, AlertCircle } from 'lucide-react';
import SearchBar from '../../components/user/SearchBar';
import BusList from '../../components/user/BusList';
import MapView from '../../components/user/MapView';
import FavoritesList from '../../components/user/FavoritesList';
import TripHistory from '../../components/user/TripHistory';
import { useNavigate } from 'react-router-dom';

const UserDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'search' | 'favorites' | 'history'>('search');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showMap, setShowMap] = useState(false);
  const [selectedBus, setSelectedBus] = useState<any>(null);
  const navigate = useNavigate();

  const handleSearch = (from: string, to: string) => {
    // Mock search results
    const mockResults = [
      {
        id: 1,
        busNumber: 'KL-07-AX-1234',
        route: `${from} → ${to}`,
        eta: '5 mins',
        currentLocation: 'Near City Mall',
        capacity: { current: 32, total: 50 },
        driver: 'Ravi Kumar'
      },
      {
        id: 2,
        busNumber: 'KL-07-BX-5678',
        route: `${from} → ${to}`,
        eta: '12 mins',
        currentLocation: 'Tech Park Junction',
        capacity: { current: 18, total: 45 },
        driver: 'Suresh Nair'
      },
      {
        id: 3,
        busNumber: 'KL-07-CX-9012',
        route: `${from} → ${to}`,
        eta: '18 mins',
        currentLocation: 'Railway Station',
        capacity: { current: 41, total: 50 },
        driver: 'Anil Joseph'
      }
    ];
    setSearchResults(mockResults);
    setShowMap(true);
  };

  const handleBusSelect = (bus: any) => {
    setSelectedBus(bus);
  };

  const quickActions = [
    { icon: UserCheck, label: 'Update Capacity', color: 'text-orange-600 bg-orange-100', action: 'updateCapacity' },
    { icon: AlertCircle, label: 'Report Delay', color: 'text-red-600 bg-red-100', action: 'reportDelay' },
    { icon: Users, label: 'Find Carpool', color: 'text-blue-600 bg-blue-100', path: '/user/carpool' },
    { icon: Route, label: 'Plan Route', color: 'text-green-600 bg-green-100', path: '/user/route-planner' },
    { icon: MessageSquare, label: 'Feedback', color: 'text-purple-600 bg-purple-100', path: '/user/feedback' },
    { icon: Settings, label: 'Settings', color: 'text-gray-600 bg-gray-100', path: '/user/settings' }
  ];

  const handleQuickAction = (path?: string, action?: string) => {
    if (path) {
      navigate(path);
    } else if (action === 'updateCapacity') {
      handleUpdateCapacity();
    } else if (action === 'reportDelay') {
      handleReportDelay();
    }
  };

  const handleUpdateCapacity = () => {
    const confirmed = window.confirm('Have you boarded the bus?\n\nClick OK for "Boarded Bus" or Cancel for "Not Boarded"');
    if (confirmed) {
      alert('Thank you! Your boarding status has been updated to "Boarded Bus"');
    } else {
      alert('Thank you! Your boarding status has been updated to "Not Boarded"');
    }
  };

  const handleReportDelay = () => {
    const delay = prompt('Please enter the delay in minutes:');
    if (delay && !isNaN(Number(delay))) {
      alert(`Thank you! Delay of ${delay} minutes has been reported.`);
    } else if (delay !== null) {
      alert('Please enter a valid number for delay in minutes.');
    }
  };

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
                
                {/* Map View - moved above Available Buses */}
                {showMap && selectedBus && (
                  <MapView selectedBus={selectedBus} />
                )}
                
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
  <div className="space-y-4">
    {quickActions.map((action, index) => (
      <button
        key={index}
        onClick={() => handleQuickAction(action.path, action.action)}
        className="flex items-center justify-between p-4 w-full rounded-lg border hover:shadow-md transition-all duration-200"
      >
        <div className={`p-3 rounded-full ${action.color}`}>
          <action.icon className="w-6 h-6" />
        </div>
        <span className="text-base font-medium text-gray-700 flex-1 ml-4">
          {action.label}
        </span>
      </button>
    ))}
  </div>
</div>


            {activeTab === 'favorites' && <FavoritesList />}
            {activeTab === 'history' && <TripHistory />}
          </div>

          {/* Map/Side Panel */}
          <div className="lg:col-span-1">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;