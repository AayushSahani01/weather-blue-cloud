import React from 'react';

import { Marker, useMapEvents } from "react-leaflet";
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'

const MapPage = ({ lat, lon, onMapClick }) => {
  function LocationMarker() {
    useMapEvents({
      click(e) {
        onMapClick(e.latlng.lat, e.latlng.lng);
      },
    });
    return lat && lon ? <Marker position={[lat, lon]} /> : null;
  }

  return (
    <MapContainer center={[lat, lon]} zoom={8} className="h-96 w-full rounded-lg">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  );
};

export default MapPage;