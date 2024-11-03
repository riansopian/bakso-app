'use client'

import { MapContainer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { icon } from 'leaflet';

const LeafIcon = icon({
    
  iconUrl: 'icons/marker.png',
  shadowUrl: 'icons/marker.png',
        iconSize:     [38, 95],
        shadowSize:   [50, 64],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
    }
);

export default function Map() {
  return (
    <div>
      <main>
        <MapContainer className="w-full h-full" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      
            <Marker position={[51.505, -0.09]} icon={LeafIcon}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </main>
    </div>
  );
}
