import React from 'react';
import { Clock, Users, Star, MapPin } from 'lucide-react';

interface Bus {
  id: number;
  busNumber: string;
  route: string;
  eta: string;
  fare: string;
  currentLocation: string;
  capacity: { current: number; total: number };
  driver: string;
  rating: number;
}

interface BusListProps {
  buses: Bus[];
  onBusSelect: (bus: Bus) => void;
  selectedBus: Bus | null;
}

const BusList: React.FC<BusListProps> = ({ buses, onBusSelect, selectedBus }) => {
  const getCapacityColor = (current: number, total: number) => {
    const percentage = (current / total) * 100;
    if (percentage < 50) return 'text-green-600 bg-green-100';
    if (percentage < 80) return 'text-orange-600 bg-orange-100';
    return 'text-red-600 bg-red-100';
  };

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800">Available Buses</h3>
        <p className="text-sm text-gray-600">{buses.length} buses found</p>
      </div>
      
      <div className="divide-y divide-gray-200">
        {buses.map((bus) => (
          <div
            key={bus.id}
            onClick={() => onBusSelect(bus)}
            className={`p-6 hover:bg-gray-50 cursor-pointer transition-colors duration-200 ${
              selectedBus?.id === bus.id ? 'bg-orange-50 border-l-4 border-orange-500' : ''
            }`}
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="font-semibold text-gray-900">{bus.busNumber}</h4>
                <p className="text-sm text-gray-600">{bus.route}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Available</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-orange-500" />
                <span className="text-gray-600">ETA: {bus.eta}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span className="text-gray-600">{bus.currentLocation}</span>
              </div>

              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-purple-500" />
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  getCapacityColor(bus.capacity.current, bus.capacity.total)
                }`}>
                  {bus.capacity.current}/{bus.capacity.total}
                </span>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-gray-100">
              <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors duration-200 text-sm font-medium">
                Select Bus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusList;