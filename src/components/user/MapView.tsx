import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Clock, Users, MapPin } from 'lucide-react';

interface MapViewProps {
  selectedBus: any;
}

// Fix default marker icon issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

const MapView: React.FC<MapViewProps> = ({ selectedBus }) => {
  // Example mock bus locations (latitude, longitude)
  const buses = [
    { id: 1, lat: 12.9716, lng: 77.5946, busNumber: 'KL-07-AX-1234', eta: '5 mins', capacity: { current: 32, total: 50 } },
    { id: 2, lat: 12.9750, lng: 77.5990, busNumber: 'KL-07-BX-5678', eta: '12 mins', capacity: { current: 18, total: 45 } },
    { id: 3, lat: 12.9780, lng: 77.5900, busNumber: 'KL-07-CX-9012', eta: '18 mins', capacity: { current: 41, total: 50 } },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center">
          <MapPin className="w-5 h-5 mr-2 text-orange-600" />
          Live Map
        </h3>
      </div>

      <MapContainer center={[12.9716, 77.5946]} zoom={13} className="h-64 w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />
        {buses.map((bus) => (
          <Marker key={bus.id} position={[bus.lat, bus.lng]}>
            <Popup>
              <div>
                <h4 className="font-semibold">{bus.busNumber}</h4>
                <p><Clock className="w-4 h-4 inline mr-1" /> ETA: {bus.eta}</p>
                <p><Users className="w-4 h-4 inline mr-1" /> {bus.capacity.current}/{bus.capacity.total}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {selectedBus && (
        <div className="p-4 bg-gray-50">
          <h4 className="font-semibold text-gray-800">{selectedBus.busNumber}</h4>
          <p><Clock className="w-4 h-4 inline mr-1" /> ETA: {selectedBus.eta}</p>
          <p><Users className="w-4 h-4 inline mr-1" /> {selectedBus.capacity.current}/{selectedBus.capacity.total}</p>
          <p><MapPin className="w-4 h-4 inline mr-1" /> {selectedBus.currentLocation}</p>
        </div>
      )}
    </div>
  );
};

export default MapView;