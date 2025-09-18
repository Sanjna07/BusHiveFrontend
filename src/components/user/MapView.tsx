import React from 'react';
import { MapPin, Navigation, Clock, Users } from 'lucide-react';

interface MapViewProps {
  selectedBus: any;
}

const MapView: React.FC<MapViewProps> = ({ selectedBus }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center">
          <Navigation className="w-5 h-5 mr-2 text-orange-600" />
          Live Map
        </h3>
      </div>

      {/* Mock Map */}
      <div className="h-64 bg-gradient-to-br from-blue-100 to-green-100 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-gray-600">
            <MapPin className="w-12 h-12 mx-auto mb-2 text-orange-500" />
            <p className="text-sm">Interactive map will be integrated here</p>
            <p className="text-xs">Showing live bus locations</p>
          </div>
        </div>

        {/* Mock Bus Markers */}
        <div className="absolute top-4 left-4 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        <div className="absolute top-16 right-8 w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-12 left-12 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
      </div>

      {selectedBus && (
        <div className="p-4 bg-gray-50">
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-800">{selectedBus.busNumber}</h4>
            
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-orange-500" />
                <span>ETA: {selectedBus.eta}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-purple-500" />
                <span>{selectedBus.capacity.current}/{selectedBus.capacity.total}</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-blue-500" />
              <span className="text-sm text-gray-600">{selectedBus.currentLocation}</span>
            </div>

            <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors duration-200 text-sm font-medium">
              Track This Bus
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapView;