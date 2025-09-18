import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Route, MapPin, Clock, Navigation, Zap } from 'lucide-react';

const RoutePlannerPage: React.FC = () => {
  const [routes, setRoutes] = useState<any[]>([]);

  const handlePlanRoute = () => {
    // Mock route planning results
    const mockRoutes = [
      {
        id: 1,
        name: 'Fastest Route',
        duration: '25 mins',
        distance: '8.5 km',
        steps: [
          { type: 'walk', description: 'Walk to Tech Park Bus Stop', duration: '3 mins' },
          { type: 'bus', description: 'Take Bus KL-07-AX-1234', duration: '18 mins' },
          { type: 'walk', description: 'Walk to City Mall', duration: '4 mins' }
        ],
        cost: '₹25',
        icon: Zap,
        color: 'text-green-600'
      },
      {
        id: 2,
        name: 'Cheapest Route',
        duration: '35 mins',
        distance: '9.2 km',
        steps: [
          { type: 'walk', description: 'Walk to Metro Station', duration: '5 mins' },
          { type: 'metro', description: 'Take Metro Line 1', duration: '15 mins' },
          { type: 'bus', description: 'Take Bus KL-07-BX-5678', duration: '12 mins' },
          { type: 'walk', description: 'Walk to City Mall', duration: '3 mins' }
        ],
        cost: '₹18',
        icon: Route,
        color: 'text-blue-600'
      }
    ];
    setRoutes(mockRoutes);
  };

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
              <Route className="w-6 h-6 mr-3 text-orange-600" />
              Route Planner
            </h1>
            <p className="text-gray-600 mt-2">Find the best route for your journey</p>
          </div>

          <div className="p-6">
            <div className="space-y-6">
              {/* Route Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500 w-4 h-4" />
                    <input
                      type="text"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500"
                      placeholder="Starting location"
                      defaultValue="Tech Park"
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
                      placeholder="Destination"
                      defaultValue="City Mall"
                    />
                  </div>
                </div>
              </div>

              {/* Preferences */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Departure Time</label>
                  <input
                    type="time"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500"
                    defaultValue="09:00"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500">
                    <option>Fastest</option>
                    <option>Cheapest</option>
                    <option>Least Walking</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Transport</label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500">
                    <option>All</option>
                    <option>Bus Only</option>
                    <option>Metro + Bus</option>
                  </select>
                </div>
              </div>

              <button
                onClick={handlePlanRoute}
                className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
              >
                Plan My Route
              </button>

              {/* Route Results */}
              {routes.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Suggested Routes</h3>
                  {routes.map((route) => (
                    <div key={route.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-full bg-gray-100 ${route.color}`}>
                            <route.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{route.name}</h4>
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <div className="flex items-center space-x-1">
                                <Clock className="w-3 h-3" />
                                <span>{route.duration}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Navigation className="w-3 h-3" />
                                <span>{route.distance}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-orange-600">{route.cost}</p>
                          <p className="text-xs text-gray-500">Total cost</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {route.steps.map((step: any, index: number) => (
                          <div key={index} className="flex items-center space-x-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
                              step.type === 'walk' ? 'bg-gray-100 text-gray-600' :
                              step.type === 'bus' ? 'bg-orange-100 text-orange-600' :
                              'bg-blue-100 text-blue-600'
                            }`}>
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-800">{step.description}</p>
                              <p className="text-xs text-gray-500">{step.duration}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium">
                          Select This Route
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutePlannerPage;